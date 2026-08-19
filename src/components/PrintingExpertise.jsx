import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/PrintingExpertise.css";

export default function PrintingExpertise({
  cards = [
    {
      id: "paper",
      title: "PAPER PRINTING SERVICES",
      img: "/assets/PAPERPRINTINGSERVICES.jpg",
      video: "/assets/PAPERPRINTINGSERVICES.mp4",
      poster: "/assets/PAPERPRINTINGSERVICES.jpg",
    },
    {
      id: "vinyl",
      title: "VINYL PRINTING SERVICES",
      img: "/assets/VINYLPRINTINGSERVICES.jpg",
      video: "/assets/VINYLPRINTINGSERVICES.mp4",
      poster: "/assets/VINYLPRINTINGSERVICES.jpg",
    },
  ],
}) {
  const [hovered, setHovered] = useState(null);
  const videoRefs = useRef({});

  const handleMouseEnter = (id) => {
    setHovered(id);
    const v = videoRefs.current[id];
    if (v && v.play) {
      try {
        v.muted = true;
        v.currentTime = 0;
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => { });
      } catch (e) { }
    }
  };

  const handleMouseLeave = (id) => {
    setHovered(null);
    const v = videoRefs.current[id];
    if (v && v.pause) {
      try {
        v.pause();
        v.currentTime = 0;
      } catch (e) { }
    }
  };

  return (
    <section className="section printing-section">
      <div className="container">
        <h2 className="printing-title">Our Expertise in Printing</h2>

        <div className="printing-row">
          {cards.map((card) => {
            const isExpanded = hovered === card.id;
            const isShrunk = hovered && hovered !== card.id;

            return (
              <div
                key={card.id}
                className={`expertise-card ${isExpanded ? "expanded" : isShrunk ? "shrunk" : ""}`}
                onMouseEnter={() => handleMouseEnter(card.id)}
                onMouseLeave={() => handleMouseLeave(card.id)}
                onFocus={() => handleMouseEnter(card.id)}
                onBlur={() => handleMouseLeave(card.id)}
                tabIndex={0}
              >
                <div className="expertise-img-box">
                  {card.video ? (
                    <video
                      ref={(el) => (videoRefs.current[card.id] = el)}
                      src={card.video}
                      poster={card.poster || card.img || ""}
                      playsInline
                      preload="metadata"
                      loop
                      className="card-media"
                    />
                  ) : card.img ? (
                    <img src={card.img} alt={card.title} className="card-media" />
                  ) : (
                    <div className="empty-img" />
                  )}
                </div>

                <div className="expertise-bottom">
                  {/* Link acts like your button and passes card object as state */}
                  <Link
                    to={card.id === 'paper' ? "/paper-printing" : card.id === 'vinyl' ? "/vinyl-printing" : "/printing"}
                    state={{ card }}
                    className="expertise-btn link-btn"
                    aria-label={`Explore ${card.title}`}
                  >
                    Explore <span className="arrow">→</span>
                  </Link>

                  <h3 className="expertise-title">{card.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
