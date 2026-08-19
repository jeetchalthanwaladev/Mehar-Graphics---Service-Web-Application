import { useEffect, useMemo, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import EditableText from "../../components/EditableText";
import EditableImage from "../../components/EditableImage";
import { uploadFile } from "../../lib/upload";

const DEFAULT_HOME = {
  heroTitle: "Professional Printing Solutions",
  heroSubtitle: "Serving the city since 2015",
  bannerImage: "",
  stats: { clients: 18, yearsExperience: 10, services: 28 }
};

export default function HomePreviewEditor() {
  const [data, setData] = useState(DEFAULT_HOME);
  const [initial, setInitial] = useState(DEFAULT_HOME);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);

  // Load Firestore doc once
  useEffect(() => {
    (async () => {
      try {
        const snap = await getDoc(doc(db, "siteContent", "home"));
        const merged = snap.exists()
          ? { ...DEFAULT_HOME, ...snap.data(), stats: { ...DEFAULT_HOME.stats, ...(snap.data().stats || {}) } }
          : DEFAULT_HOME;
        setData(merged);
        setInitial(merged);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Compute minimal changes (diff)
  const diff = useMemo(() => {
    const d = {};
    if (data.heroTitle !== initial.heroTitle) d.heroTitle = data.heroTitle;
    if (data.heroSubtitle !== initial.heroSubtitle) d.heroSubtitle = data.heroSubtitle;
    if (data.bannerImage !== initial.bannerImage) d.bannerImage = data.bannerImage;

    const s = data.stats || {};
    const s0 = initial.stats || {};
    if ((s.clients ?? 0) !== (s0.clients ?? 0)) d["stats.clients"] = s.clients;
    if ((s.yearsExperience ?? 0) !== (s0.yearsExperience ?? 0)) d["stats.yearsExperience"] = s.yearsExperience;
    if ((s.services ?? 0) !== (s0.services ?? 0)) d["stats.services"] = s.services;

    return d;
  }, [data, initial]);

  // Save only changed fields (except bannerImage which we save immediately on upload)
  async function handleSave() {
    if (Object.keys(diff).length === 0) {
      alert("No changes.");
      return;
    }
    setBusy(true);
    try {
      const payload = { updatedAt: serverTimestamp() };

      // Flatten dot-keys into nested objects for merge
      for (const [k, v] of Object.entries(diff)) {
        if (k.includes(".")) {
          const [root, key] = k.split(".");
          payload[root] = { ...(data[root] || {}), [key]: v };
        } else {
          payload[k] = v;
        }
      }

      await setDoc(doc(db, "siteContent", "home"), payload, { merge: true });
      setInitial(data);
      alert("Saved!");
    } catch (e) {
      alert("Save failed: " + e.message);
    } finally {
      setBusy(false);
    }
  }

  if (loading) {
    return <div className="container" style={{ padding: "2rem 0" }}>Loading…</div>;
  }

  return (
    <div className="container" style={{ padding: "1rem 0 2rem" }}>
      {/* The dashed border helps the admin see the editable area */}
      <section className="hero" style={{ border: "2px dashed #e2e8f0", borderRadius: 14, padding: "1rem" }}>
        <div className="hero__grid">
          <div>
            <span className="badge">Trusted Manufacturer</span>

            <h1 style={{ marginTop: 8 }}>
              <EditableText
                as="span"
                value={data.heroTitle}
                onChange={(v) => setData({ ...data, heroTitle: v })}
                placeholder="Hero title"
              />
            </h1>

            <p className="lead">
              <EditableText
                as="span"
                value={data.heroSubtitle}
                onChange={(v) => setData({ ...data, heroSubtitle: v })}
                placeholder="Hero subtitle"
              />
            </p>

            {/* KPIs inline-edit */}
            <div className="stats">
              <div className="stat">
                <b>
                  <EditableText
                    value={String(data.stats?.clients ?? 0)}
                    onChange={(v) =>
                      setData({
                        ...data,
                        stats: { ...data.stats, clients: Number(v.replace(/\D/g, "") || 0) }
                      })
                    }
                    placeholder="Clients"
                  />+
                </b>
                Happy Clients
              </div>

              <div className="stat">
                <b>
                  <EditableText
                    value={String(data.stats?.yearsExperience ?? 0)}
                    onChange={(v) =>
                      setData({
                        ...data,
                        stats: { ...data.stats, yearsExperience: Number(v.replace(/\D/g, "") || 0) }
                      })
                    }
                    placeholder="Years"
                  />+
                </b>
                Years Experience
              </div>

              <div className="stat">
                <b>
                  <EditableText
                    value={String(data.stats?.services ?? 0)}
                    onChange={(v) =>
                      setData({
                        ...data,
                        stats: { ...data.stats, services: Number(v.replace(/\D/g, "") || 0) }
                      })
                    }
                    placeholder="Services"
                  />+
                </b>
                Services
              </div>
            </div>
          </div>

          {/* Right: hero image with instant save */}
          <div className="hero-logo-wrapper">
            <EditableImage
              src={data.bannerImage || "/assets/logo_png_g.svg"}
              alt="Hero image"
              onPick={async (file) => {
                // Upload to Firebase Storage
                const url = await uploadFile("site_images", file);

                // Update local preview immediately
                setData((prev) => ({ ...prev, bannerImage: url }));

                // Instantly persist URL to Firestore (no need to press Save)
                await setDoc(
                  doc(db, "siteContent", "home"),
                  { bannerImage: url, updatedAt: serverTimestamp() },
                  { merge: true }
                );

                // Sync "initial" so Save button doesn't detect a change for bannerImage
                setInitial((prev) => ({ ...prev, bannerImage: url }));

                return url;
              }}
            />
          </div>
        </div>
      </section>

      <div style={{ marginTop: 14 }}>
        <button className="btn primary" onClick={handleSave} disabled={busy}>
          Save changes
        </button>
        <span style={{ marginLeft: 10, fontSize: 13, color: "#64748b" }}>
          Double-click any text to edit. Click the hero image to replace. Image saves instantly.
        </span>
      </div>
    </div>
  );
}
