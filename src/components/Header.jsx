import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../styles/header.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ===== TOP INFO BAR ===== */}
      <div className="topbar">
        <div className="topbar-left">
          <span>+91 75688 27010</span>
          <span className="sep">•</span>
          <span>mehargraphics415@gmail.com</span>
        </div>
        <div className="topbar-right">
          Serving the city since 2015
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <header className="main-header">
        <div className="header-container">

          {/* LEFT → LOGO */}
          <Link to="/" className="brand" onClick={closeMenu}>
            <img src="/logos/mehargraphics.png" alt="Mehar Graphics" className="brand-logo1" />
          </Link>

          {/* MOBILE TOGGLE BUTTON */}
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* RIGHT → NAVIGATION */}
          <nav className={`nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
            <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
            <NavLink to="/customers" onClick={closeMenu}>Our Customers</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
            <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
          </nav>

          {/* BACKDROP FOR MOBILE */}
          {isMobileMenuOpen && <div className="mobile-backdrop" onClick={closeMenu}></div>}

        </div>
      </header>
    </>
  );
}
