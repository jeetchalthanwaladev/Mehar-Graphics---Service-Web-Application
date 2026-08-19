import React from "react";
import "../styles/ContactUs.css"; // Newly created styles

export default function Contact() {
  return (
    <div className="contact-page-wrapper">

      {/* 1. Hero */}
      <section className="hero-banner">
        <h1>Contact Us</h1>
        <p>Ready to start your printing project? Get in touch with our team today</p>
      </section>

      {/* 2. Contact Checkerboard Grid (3 cols x 2 rows) */}
      <section className="contact-actions-grid">
        {/* Row 1, Col 1: CALL US (Light) */}
        <div className="contact-tile light">
          <h2>CALL US</h2>
        </div>

        {/* Row 1, Col 2: Dark Empty/Decorative Block */}
        <div className="contact-tile dark">
          <h3>Quick Response</h3>
          <p style={{ fontWeight: 800, fontSize: '1.2rem', marginTop: '0.5rem', color: '#fff' }}>Get instant<br />quotes & support</p>
        </div>

        {/* Row 1, Col 3: EMAIL US (Light) */}
        <div className="contact-tile light">
          <h2>Email Us</h2>
        </div>

        {/* Row 2, Col 1: Phone Info (Dark) */}
        <div className="contact-tile dark">
          <h3>+91 79844 72110</h3>
          <p style={{ fontWeight: 800, fontSize: '1.2rem', marginTop: '0.5rem', color: '#fff' }}>Mon-Sat: 9AM-7PM,<br />Sun: 10AM-4PM</p>
        </div>

        {/* Row 2, Col 2: WHATSAPP (Light Tile in Center) */}
        <div className="contact-tile light">
          <h2 style={{ fontSize: '2rem' }}>WhatsApp US</h2>
        </div>

        {/* Row 2, Col 3: Email Info (Dark) */}
        <div className="contact-tile dark">
          <h3 style={{ fontSize: '1.2rem', wordBreak: 'break-all' }}>mehargraphics6113@gmail.com</h3>
          <p style={{ fontWeight: 800, fontSize: '1.2rem', marginTop: '0.5rem', color: '#fff' }}>Reply within<br />24 hours</p>
        </div>
      </section>

      {/* 3. Map & Info Section */}
      <section className="info-map-section">

        {/* Left: Map */}
        <div className="map-box">
          {/* Embedding Google Maps for Surat location */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.59715978434!2d72.84277737596043!3d21.168412882967667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0500139e83b5d%3A0x6442653229871131!2sMehar%20Graphics!5e0!3m2!1sen!2sin!4v1703064871234!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mehar Graphics Location"
          ></iframe>
        </div>

        {/* Right: Info Stack */}
        <div className="info-panel">
          <div className="info-card">
            <h4>Address:</h4>
            <p>7/149 Gandhinagar Colony, Behind Bethi Colony,<br />Near Kharwar Nagar, Udhana Darwaja, Surat</p>
          </div>

          <div className="info-card">
            <h4>Hours:</h4>
            <div style={{ marginBottom: "0.5rem" }}>
              <p>Mon–Sat: 9:00 AM – 7:00 PM</p>
              <p>Sun: 10:00 AM – 4:00 PM</p>
            </div>
          </div>

          <div className="info-card">
            <h4>Contact:</h4>
            <div style={{ marginBottom: "0.5rem" }}>
              <p><strong>Ajay Bajaj:</strong> +91 93277 70824</p>
              <p><strong>Punit Bajaj:</strong> +91 79844 72110</p>
            </div>
            <div>
              <p><strong>Email:</strong> mehargraphics6113@gmail.com</p>
            </div>
          </div>
        </div>

      </section>

      {/* 4. Bottom CTA Section */}
      <section className="contact-cta-section">
        <h2 className="contact-cta-title">Start Your Next Project</h2>
        <p className="contact-cta-sub">
          Get in touch with us today for a free quote and consultation for all your printing needs.
        </p>
        <div className="contact-cta-buttons">
          <a href="#" className="cta-outline-btn">Request a Quote</a>
          <a href="#" className="cta-outline-btn">Get Your Free Estimate</a>
          <a href="#" className="cta-outline-btn">Start Your Project</a>
          <a href="#" className="cta-outline-btn">Consult With Us</a>
        </div>
      </section>
    </div>
  );
}
