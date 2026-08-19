// src/components/Solutions.jsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/solutions.css";

// Import your videos & images
import video1 from "../assets/printing-video.mp4";
import img1 from "../assets/printing-image.jpg";

import video2 from "../assets/digital-video.mp4";
import img2 from "../assets/digital-image.jpg";

export default function Solutions() {
  const secRef = useRef(null);

  useEffect(() => {
    if (!secRef.current) return;

    const el = secRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const items = [
    {
      title: "Printing",
      video: video1,
      image: img1,
      to: "/printing", // route for printing page
    },
    {
      title: "DIGITAL BRANDING",
      video: video2,
      image: img2,
      to: "/digital-branding", // route for digital page
    },
  ];

  return (
    <section className="solutions-section" ref={secRef}>
      <div className="container">
        <h2 className="solutions-title1">Our Core Services</h2>

        <div className="solutions-grid">
          {items.map((item, index) => (
            <article className="solutions-box" key={index}>
              {/* TOP: video (default) + image (on hover) */}
              <div className="media-wrap">
                <video
                  className="solution-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={item.video} type="video/mp4" />
                </video>

                <img
                  src={item.image}
                  alt={item.title}
                  className="solution-image"
                />
              </div>

              {/* BOTTOM: title + arrow button */}
              <div className="solutions-footer">
                <span className="solution-title">{item.title}</span>

                <Link
                  to={item.to}
                  className="solutions-arrow"
                  aria-label={`Go to ${item.title}`}
                >
                  <span className="arrow-circle">
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      aria-hidden="true"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 7H17V15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
