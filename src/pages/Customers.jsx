import React, { useState, useEffect } from "react";
import { Search, ArrowRight } from "lucide-react";
import "../styles/CustomersPage.css";

// Data
const CUSTOMERS_DATA = [
  { id: 1, name: "Golden Care Hospital", category: "Hospital", img: "/logos/01.jpg" },
  { id: 2, name: "Universal Hospital", category: "Hospital", img: "/potfolio/Rectangle%20147.png" }, // Mocking varied images
  { id: 3, name: "Botein Pharma", category: "Pharma", img: "/logos/02.jpg" },
  { id: 4, name: "Navjivan Pathology", category: "Hospital", img: "/logos/03.jpg" },
  { id: 5, name: "American Standard Clinic", category: "Hospital", img: "/logos/04.jpg" },
  { id: 6, name: "Dr. Siddhant Mehta", category: "Hospital", img: "/potfolio/Rectangle%20150.png" }, // Mock
  { id: 7, name: "School of Excellence", category: "School", img: "/logos/05.jpg" },
  { id: 8, name: "Modern High School", category: "School", img: "/logos/06.jpg" },
  { id: 9, name: "City Pharmacy", category: "Pharma", img: "/logos/07.jpg" },
  { id: 10, name: "Corporate Hub", category: "Corporate", img: "/logos/08.jpg" },
];

const CATEGORIES = [
  "ALL",
  "SCHOOLS, AND COLLEGES",
  "HOSPITALS, CLINICS, AND PHARMACEUTICAL COMPANIES"
];

export default function Customers() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(CUSTOMERS_DATA);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let results = CUSTOMERS_DATA;

    // Filter by Category
    if (activeCategory !== "ALL") {
      if (activeCategory === "SCHOOLS, AND COLLEGES") {
        results = results.filter(c => c.category === "School");
      } else if (activeCategory === "HOSPITALS, CLINICS, AND PHARMACEUTICAL COMPANIES") {
        results = results.filter(c => c.category === "Hospital" || c.category === "Pharma");
      }
    }

    // Filter by Search
    if (searchTerm) {
      results = results.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    setFilteredData(results);
  }, [activeCategory, searchTerm]);

  return (
    <div className="customers-page-wrapper">
      {/* Hero Section */}
      <section className="customers-hero-section">
        <h1 className="customers-hero-title">Our Customers</h1>
      </section>

      {/* Search & Filter Section */}
      <div className="search-filter-container">
        {/* Search Bar */}
        <div className="search-bar-wrapper">
          <Search className="search-icon" size={24} />
          <input
            type="text"
            placeholder="Search for client..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons-row">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
          <button className="filter-arrow-btn">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="customers-grid">
        {filteredData.map((item) => (
          <div key={item.id} className="customer-card">
            <div className="customer-img-wrapper">
              <img src={item.img} alt={item.name} className="customer-image" />
            </div>
            {/* Optional: Overlay text if needed, but image shows clean cards */}
          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: '4rem', color: '#666' }}>No clients found matching your search.</p>
      )}

    </div>
  );
}
