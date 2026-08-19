import React from "react";
import "../styles/Gallery.css";

// Importing some assets for the gallery
import printImg from "../assets/printing-image.jpg";
import digitalImg from "../assets/digital-image.jpg";
import brandingImg from "../assets/SocialMediaMarketing.png";
import webImg from "../assets/Web Design & Development.jpg";
import seoImg from "../assets/Search Engine Optimization.jpg";
import paperImg from "../assets/paper-printing-new.jpg";

const galleryItems = [
    { id: 1, src: printImg, title: "Premium Printing" },
    { id: 2, src: digitalImg, title: "Digital Solutions" },
    { id: 3, src: brandingImg, title: "Social Media Marketing" },
    { id: 4, src: webImg, title: "Web Design" },
    { id: 5, src: seoImg, title: "SEO Optimization" },
    { id: 6, src: paperImg, title: "Paper Crafts" },
];

export default function Gallery() {
    return (
        <div className="gallery-page-wrapper">
            {/* Hero Section */}
            <section className="gallery-hero">
                <h1>Our Portfolio</h1>
                <p>
                    A glimpse into the creative world of Mehar Graphics. Explore our latest projects in printing, branding, and digital design.
                </p>
            </section>

            {/* Gallery Grid */}
            <section className="gallery-content">
                <div className="gallery-grid">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="gallery-item">
                            <img src={item.src} alt={item.title} loading="lazy" />
                            <div className="gallery-overlay">
                                <h3>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
