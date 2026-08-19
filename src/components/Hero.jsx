// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import "../styles/hero.css";
import heroVideo from "../assets/hero-photo.mp4"; // <-- your video file
import heroImg from "../assets/logo_png_g.svg"; // replace with your hero image path
import { CheckCircle2 } from "lucide-react";

export default function Hero() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      // skip observer/animations for users who prefer reduced motion
      rootRef.current && rootRef.current.classList.add("reduced-motion");
      return;
    }

    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section" ref={rootRef} aria-label="Hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="eyebrow">Branding • Premium Design • High Qulity Print</div>

          <h1 className="hero-title">
            <span className="accent">Building Brands</span> That Cut Through The Noise

          </h1>

          <p className="hero-sub">
            We turn businesses into brands through authentic storytelling. We uncover the human truth behind your product and pair it with impactful design to create an emotional connection audiences can’t ignore.
          </p>

          <div className="hero-ctas">
            <a className="btn primary" href="/Contact">
              Request Quote
            </a>
            <a className="btn ghosts" href="/Gallery">
              Our Portfolio
            </a>
            <a className="btn ghost" href="/Gallery">
              Start Your Project
            </a>
          </div>


          <ul className="hero-badges" aria-hidden>
            <li className="badge">
              <CheckCircle2 size={18} /> Same-day support
            </li>
            <li className="badge">
              <CheckCircle2 size={18} /> Quality printing
            </li>
            <li className="badge">
              <CheckCircle2 size={18} /> Creative Design
            </li>
          </ul>
        </div>

        <div
          className="hero-right"
          role="img"
          aria-label="Printed invitation sample"
        >
          <div className="hero-image-wrap">
            <video className="hero-video" autoPlay loop muted playsInline>
              <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="image-shadow"></div>
          </div>

          <div className="floating-card">
            <strong>Bridging Print & Pixel</strong>
            {/* <span>Design + Print</span> */}
          </div>
        </div>
      </div>
    </section>
  );
}
