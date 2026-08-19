import React from "react";
import "../styles/AboutUs.css";
import { Award, Clock, Heart, ShieldCheck } from 'lucide-react';
// Assets (using placeholders or existing assets where applicable)
import printingImg from "../assets/printing-image.jpg";
import digitalImg from "../assets/digital-image.jpg";

export default function About() {
  return (
    <div className="about-page-wrapper">

      {/* 1. Header/Hero */}
      <section className="about-hero smoke-zone">
        <h1>ABOUT MEHAR GRAPHICS</h1>
        <h3>Print. Signage. Branding.</h3>
        <p>
          From essential hospital stationery to illuminating LED signage, we provide end-to-end solutions.
          Now offering strategic branding activities to help your business stand out. Quality manufacturing backed by a decade of expertise.
        </p>
      </section>

      {/* 2. Our Story (Checkerboard) */}
      <section className="story-section">
        <span className="story-badge">Our Story</span>
        <h2 className="story-title">Crafting Excellence Since 2010</h2>

        <div className="about-story-grid">
          {/* Row 1 */}
          <div className="story-block dark-teal">
            <div className="story-block-content">
              <h3>Our Beginning</h3>
              <p>Mehar Graphics was founded on a promise: to provide solutions that actually help businesses grow. For over a decade, we have been the silent partners behind the city’s success stories. Every file, register, and banner we produced was a piece of someone’s hard work and passion.</p>
            </div>
          </div>
          <div className="story-block">
            <img src={printingImg} alt="Printing Press" />
          </div>

          {/* Row 2 */}
          <div className="story-block">
            <img src={digitalImg} alt="Office" />
          </div>
          <div className="story-block dark-teal">
            <div className="story-block-content">
              <h3>The Evolution</h3>
              <p>We believe a true partner evolves when you need them most. That is why 2019 marked a new chapter in our history. Seeing the shift in how the world does business, we integrated Digital Branding into our core services. We wanted to ensure that the same local businesses we supported with print in 2010 wouldn't get left behind in the digital age.</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="story-block dark-teal">
            <div className="story-block-content">
              <h3>Enduring Relationships</h3>
              <p>We don't just have "clients"; we have relationships that span generations. Today, whether it's a traditional ledger or a modern social media campaign, we pour the same heart into every project.</p>
            </div>
          </div>
          <div className="story-block">
            {/* Using same img or another placeholder */}
            <img src={printingImg} alt="Teamwork" />
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="values-section">
        <h2 className="section-title">Our Core Values</h2>
        <p className="section-sub">The principles that guide every decision we make</p>

        <div className="about-values-grid">
          <div className="value-card">
            <div className="value-icon">
              <Award size={32} color="#043F4A" />
            </div>
            <div className="value-content">
              <h4>Quality Excellence</h4>
              <p>We never compromise on quality.</p>
            </div>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <Clock size={32} color="#043F4A" />
            </div>
            <div className="value-content">
              <h4>Timely Delivery</h4>
              <p>Your deadlines matter to us.</p>
            </div>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <Heart size={32} color="#043F4A" />
            </div>
            <div className="value-content">
              <h4>Customer First</h4>
              <p>Your vision drives everything we do.</p>
            </div>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <ShieldCheck size={32} color="#043F4A" />
            </div>
            <div className="value-content">
              <h4>Trust & Reliability</h4>
              <p>Long-term relationships built on trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet Our Team */}
      <section className="team-section">
        <h2 className="section-title" style={{ color: '#fff' }}>Meet Our Team</h2>
        <p className="section-sub">The passionate professionals behind our success</p>

        <div className="about-team-grid">
          {/* 1 */}
          <div className="about-team-card">
            <div className="about-team-avatar">
              {/* <img src={...} /> */}
            </div>
            <h3 className="about-team-name">Ajay Bajaj</h3>
            <p className="about-team-role">Founder & CEO</p>
            <p className="about-team-exp">Experience: 25+ years</p>
          </div>
          {/* 2 */}
          <div className="about-team-card">
            <div className="about-team-avatar"></div>
            <h3 className="about-team-name">Punit Bajaj</h3>
            <p className="about-team-role">Business Growth Manager</p>
            <p className="about-team-exp">Experience: 10+ years</p>
          </div>
          {/* 3 */}
          <div className="about-team-card">
            <div className="about-team-avatar"></div>
            <h3 className="about-team-name">Archna Bajaj</h3>
            <p className="about-team-role">Digital Growth Manager</p>
            <p className="about-team-exp">Experience: 5+ years</p>
          </div>
        </div>
      </section>

      {/* 5. Mission & Vision */}
      <section className="mv-section">
        <div className="mv-block mission">
          <h3 className="mv-title">OUR MISSION</h3>
          <p>To give every business a voice that echoes—both offline and online. From the signage on your shop front to the brand story on your screen, we commit to delivering quality, creativity, and consistency.</p>
        </div>
        <div className="mv-block vision">
          <h3 className="mv-title">OUR VISION</h3>
          <p>To become India's most trusted creative hub, where a 10-year heritage of manufacturing excellence meets the future of digital storytelling.</p>
        </div>
      </section>

    </div>
  );
}
