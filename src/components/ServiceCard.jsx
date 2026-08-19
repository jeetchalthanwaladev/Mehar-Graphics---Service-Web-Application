export default function ServiceCard({ name, category, desc }) {
  return (
    <div className="service-card hover-lift">
      <h3>{name}</h3>
      <p className="service-cat">{category}</p>
      <p className="service-desc">{desc}</p>

      <div className="service-actions">
        <button className="btn primary">Get Quote</button>
      </div>
    </div>
  );
}
