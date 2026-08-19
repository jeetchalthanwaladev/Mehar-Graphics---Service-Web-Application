import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/PrintingExpertise.css"; // Reuse the premium expanding card styles

// Assets
import socialMediaImg from "../assets/SocialMediaMarketing.png";
import webDesignImg from "../assets/Web Design & Development.jpg";
import seoImg from "../assets/Search Engine Optimization.jpg";
import videoImg from "../assets/Video Editing & Shoots.jpg";

export default function DigitalBranding() {
  const [hovered, setHovered] = useState(null);
  const videoRefs = useRef({});

  const cards = [
    {
      id: "social-media",
      title: "SOCIAL MEDIA MARKETING",
      img: socialMediaImg,
      video: "",
      poster: socialMediaImg,
      link: "/social-media-marketing"
    },
    {
      id: "web-design",
      title: "WEB DESIGN & DEVELOPMENT",
      img: webDesignImg,
      video: "",
      poster: webDesignImg,
      link: "/web-design"
    },
    {
      id: "seo",
      title: "SEARCH ENGINE OPTIMIZATION",
      img: seoImg,
      video: "",
      poster: seoImg,
      link: "/seo"
    },
    {
      id: "video-editing",
      title: "VIDEO EDITING & SHOOTS",
      img: videoImg,
      video: "",
      poster: videoImg,
      link: "/video-editing"
    },
  ];

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

  // Split cards into chunks of 2 for better layout (2 rows)
  const row1 = cards.slice(0, 2);
  const row2 = cards.slice(2, 4);

  const renderRow = (rowCards) => (
    <div className="printing-row" style={{ paddingBottom: '0' }}>
      {rowCards.map((card) => {
        const isExpanded = hovered === card.id;
        // Check if shrunk: If something is hovered AND it is NOT this card...
        // AND (important) the hovered card is IN THIS ROW.
        const isHoveredInThisRow = rowCards.some(c => c.id === hovered);
        const isShrunk = isHoveredInThisRow && hovered !== card.id;

        return (
          <div
            key={card.id}
            className={`expertise-card ${isExpanded ? "expanded" : isShrunk ? "shrunk" : ""}`}
            onMouseEnter={() => handleMouseEnter(card.id)}
            onMouseLeave={() => handleMouseLeave(card.id)}
            onFocus={() => handleMouseEnter(card.id)}
            onBlur={() => handleMouseLeave(card.id)}
            tabIndex={0}
            style={{ background: '#f0fdfa', color: '#043F4A' }}
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
              <Link
                to={card.link}
                state={{ card }}
                className="expertise-btn link-btn"
                aria-label={`Explore ${card.title}`}
                style={{ background: '#043F4A', color: '#ffffff' }}
              >
                Explore <span className="arrow">→</span>
              </Link>

              <h3 className="expertise-title" style={{ color: '#043F4A' }}>{card.title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="section printing-section" style={{ background: '#043F4A' }}>
      <div className="container">
        <h2 className="printing-title" style={{ color: '#ffffff' }}>Our Expertise in Digital Branding</h2>

        {/* Render two rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {renderRow(row1)}
          {renderRow(row2)}
        </div>
      </div>
    </section>
  );
}
