import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="notfound-page">
      <div className="nf-box">
        <h1>404</h1>
        <p>Oops! The page you're looking for has wandered off the print press.</p>
        <img 
          src="/assets/empty-folder.png" 
          alt="Not found illustration"
          className="nf-illustration"
        />
        
        <Link to="/" className="cta nf-btn">Go Back Home</Link>

        <div className="nf-links">
          <Link to="/services">View Services</Link> • 
          <Link to="/contact">Contact Us</Link> • 
          <Link to="/gallery">Gallery</Link>
        </div>
      </div>
    </section>
  );
}
