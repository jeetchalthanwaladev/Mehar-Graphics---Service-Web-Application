import React, { useRef, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import "../styles/PrintingExpertise.css"; // reuse same styles for consistency

export default function PrintingDetail() {
  const { id } = useParams();
  const location = useLocation();
  const passedCard = location.state && location.state.card;
  const videoRef = useRef(null);

  // fallback cards map in case user visits URL directly
  const fallback = {
    paper: {
      id: "paper",
      title: "PAPER PRINTING SERVICES",
      img: "/assets/digital-image.jpg",
      video: "/assets/digital-video.mp4",
      poster: "/assets/digital-image.jpg",
      description:
        "High-quality paper printing for flyers, brochures, and more. Custom sizes and finishes available.",
    },
    vinyl: {
      id: "vinyl",
      title: "VINYL PRINTING SERVICES",
      img: "/assets/printing-image.jpg",
      video: "/assets/printing-video.mp4",
      poster: "/assets/printing-image.jpg",
      description: "Durable vinyl printing for banners, stickers and outdoor signage.",
    },
  };

  const card = passedCard || fallback[id] || {
    id: "unknown",
    title: "Not Found",
    img: null,
    description: "No details available for this item.",
  };

  useEffect(() => {
    // autoplay the video (muted) on this detail page if available
    if (card.video && videoRef.current && videoRef.current.play) {
      try {
        videoRef.current.muted = true;
        videoRef.current.play();
      } catch (e) {}
    }
    // cleanup: pause on unmount
    return () => {
      if (videoRef.current && videoRef.current.pause) {
        try { videoRef.current.pause(); } catch (e) {}
      }
    };
  }, [card]);

  return (
    <div className="printing-detail-page" style={{ padding: 30 }}>
      <Link to="/" style={{ display: "inline-block", marginBottom: 16, color: "#004d4d", fontWeight: 700 }}>
        ← Back
      </Link>

      <div className="detail-card" style={{ maxWidth: 1100 }}>
        <h1 style={{ color: "#003b49", marginBottom: 12 }}>{card.title}</h1>

        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 480px", minWidth: 300 }}>
            {card.video ? (
              <video
                ref={videoRef}
                src={card.video}
                poster={card.poster || card.img || ""}
                controls
                playsInline
                loop
                style={{ width: "100%", borderRadius: 12, display: "block" }}
              />
            ) : card.img ? (
              <img src={card.img} alt={card.title} style={{ width: "100%", borderRadius: 12 }} />
            ) : (
              <div style={{ width: "100%", height: 240, borderRadius: 12, background: "#eee" }} />
            )}
          </div>

          <div style={{ flex: "1 1 360px", minWidth: 280 }}>
            <p style={{ color: "#233", lineHeight: 1.5, marginBottom: 18 }}>{card.description}</p>

            <ul style={{ color: "#004d4d", fontWeight: 700 }}>
              <li>Custom sizes</li>
              <li>Fast turnaround</li>
              <li>Quality finishes</li>
            </ul>

            <div style={{ marginTop: 22 }}>
              <Link to="/" className="expertise-btn link-btn" style={{ textDecoration: "none" }}>
                Order Now <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

