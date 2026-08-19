const quotes = [
  {
    who: "Dr. Rajesh Kumar",
    org: "City Hospital",
    text: "Very reliable printing service. High quality and fast delivery."
  },
  {
    who: "Mrs. Patel",
    org: "Green Valley School",
    text: "Excellent notebooks and education materials. Consistent quality."
  },
  {
    who: "Mr. Mehta",
    org: "Industrial Solutions Ltd",
    text: "Professional signage and corporate printing. Trusted partner."
  }
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <h2>Client Success Stories</h2>
        <p className="sub">Building lasting partnerships through consistent quality and dedicated service.</p>

        <div className="testimonials fade-up">
          {quotes.map(q => (
            <div className="testi" key={q.who}>
              <p style={{ fontWeight: "700", marginBottom: "0.2rem" }}>{q.who}</p>
              <p style={{ fontSize: "0.9rem", color: "var(--muted)" }}>{q.org}</p>
              <p>“{q.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
