export default function FeaturedServices() {
  return (
    <>
      {/* Solutions We Deliver */}
      <section className="section">
        <div className="container">
          <h2>Solutions We Deliver</h2>
          <p className="sub">
            End-to-end branding, printing and digital solutions tailored to your
            business needs.
          </p>

          <div className="solutions-grid fade-up">
            <div className="solution-card">
              <h3>Branding &amp; Identity Design</h3>
              <p>
                Logos, stationery, visual identity and brand systems that make
                you stand out.
              </p>
            </div>
            <div className="solution-card">
              <h3>Print Production &amp; Packaging</h3>
              <p>
                High-quality offset and digital printing for files, bags,
                labels, brochures and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise in Printing */}
      <section className="section section--teal">
        <div className="container">
          <h2>Our Expertise in Printing</h2>

          <div className="print-expertise fade-up">
            {/* Left pills */}
            <div className="print-expertise__left">
              <div className="print-tag">Paper Printing Services</div>
              <div className="print-tag">Vinyl Printing Services</div>
            </div>

            {/* Middle cards */}
            <div className="print-expertise__center">
              <div className="print-card">
                <h3>Offset Printing</h3>
                <p>Single &amp; multicolour offset printing for bulk jobs.</p>
              </div>
              <div className="print-card">
                <h3>Digital Printing</h3>
                <p>Quick, short-run digital prints with sharp quality.</p>
              </div>
            </div>

            {/* Right empty block just for layout balance (like your design) */}
            <div className="print-expertise__extra" />
          </div>
        </div>
      </section>

      {/* Our Expertise in Digital Branding */}
      <section className="section">
        <div className="container">
          <h2>Our Expertise in Digital Branding</h2>

          <div className="digital-grid fade-up">
            <div className="digital-card">
              <h3>Social Media Management</h3>
              <p>Consistent creatives and campaigns to grow your presence.</p>
            </div>
            <div className="digital-card">
              <h3>Web Design &amp; Development</h3>
              <p>Modern, responsive websites that represent your brand.</p>
            </div>
            <div className="digital-card">
              <h3>Search Engine Optimization (SEO)</h3>
              <p>Organic visibility to bring more customers to your door.</p>
            </div>
            <div className="digital-card">
              <h3>Influencer Marketing</h3>
              <p>Brand collaborations with the right local influencers.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
