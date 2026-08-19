// src/components/Footer.jsx
import logo from "../assets/logo_png_g.svg";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer smoke-zone">
      <div className="container">
        {/* TOP ROW */}
        <div className="grid footer-grid">
          {/* COL 1 – Logo */}
          <div className="footer-logo-col">
            <img src={logo} alt="Mehar Graphics" className="footer-logo" />
          </div>

          {/* COL 2 – Mehar Graphics description */}
          <div>
            <h4>MEHAR GRAPHICS</h4>
            <p className="small">
              From essential hospital stationery to illuminating LED signage, we provide end-to-end solutions. Now offering strategic branding activities to help your business stand out. Quality manufacturing backed by a decade of expertise.
            </p>
          </div>

          {/* COL 3 – Contact info */}
          <div>
            <h4>Contact info</h4>
            <p className="small">+91 79844 72110</p>
            <p className="small">mehargraphics6113@gmail.com</p>
            <p className="small">
              7/149 Gandhinagar Colony,
              <br />
              Udhana Darwaja, Udhana, Surat.
            </p>
          </div>

          {/* COL 4 – Follow As */}
          <div>
            <h4>Follow As</h4>
            <p className="small footer-social-row">
              <a href="https://www.instagram.com/graphics.mehar?utm_source=qr&igsh=MTdmbm0yZmljYWt1aA==" className="footer-social-pill" aria-label="Instagram">
                <AiFillInstagram size={28} />
              </a>
              <a href="#" className="footer-social-pill" aria-label="Facebook">
                <AiFillFacebook size={28} />
              </a>
            </p>
            <p className="small footer-time">
              Mon–Sat: 9:00 AM – 8:00 PM
            </p>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="footer-bottom">
          MENUFECTUR BY MEHAR GRAPHICS {year}
        </div>
      </div>
    </footer>
  );
}
