import React, { useEffect } from "react";
import "../styles/ServiceDetailPage.css";
import Industries from "../components/Industries";

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Assets
import paperImg from "../assets/paper-printing-new.jpg";
import ProductDetailModal from "../components/ProductDetailModal";

// Work items (Reused)
const works = [
    { id: 1, img: "/potfolio/Rectangle%20126.png", alt: "Portfolio Work 1" },
    { id: 2, img: "/potfolio/Rectangle%20147.png", alt: "Portfolio Work 2" },
    { id: 3, img: "/potfolio/Rectangle%20148.png", alt: "Portfolio Work 3" },
    { id: 4, img: "/potfolio/Rectangle%20149.png", alt: "Portfolio Work 4" },
    { id: 5, img: "/potfolio/Rectangle%20150.png", alt: "Portfolio Work 5" },
    { id: 6, img: "/potfolio/Rectangle%20151.png", alt: "Portfolio Work 6" },
    { id: 7, img: "/potfolio/Rectangle%20152.png", alt: "Portfolio Work 7" },
];

// Client Assets (Reused)
const clients = [
    "/logos/01.jpg", "/logos/02.jpg", "/logos/03.jpg", "/logos/04.jpg",
    "/logos/05.jpg", "/logos/06.jpg", "/logos/07.jpg", "/logos/08.jpg",
    "/logos/09.jpg", "/logos/10.jpg", "/logos/11.jpg"
];

// Data Categories
const paperPrintingData = {
    "OFFICE & BUSINESS STATIONERY": [
        "Business Card", "Visiting Card", "Letterhead", "Envelope", "ID Card",
        "File Folder", "Presentation Folder", "Invoice / Bill Book", "Quotation Pad",
        "Receipt Book", "Delivery Challan Book", "Cash Memo", "Notepad", "Memo Pad", "Office Forms"
    ],
    "MARKETING & PROMOTIONAL PRINTING": [
        "Brochure (Bi-fold / Tri-fold / Z-fold)", "Flyer / Pamphlet", "Leaflet", "Poster",
        "Handbill", "Door Hanger", "Tent Card (Table Display)", "Standee Print", "Danglers",
        "Shelf Talkers", "Menu Card", "Catalogue", "Lookbook", "Product Sheet", "Price List"
    ],
    "PACKAGING PRINTING": [
        "Product Box", "Corrugated Box", "Mono Carton", "Paper Bag", "Carry Bag",
        "Food Packaging Box", "Sweet Box", "Pizza Box", "Cake Box", "Medicine Box",
        "Label Printing", "Sticker Printing", "Barcode Label", "Hang Tag", "Packaging Sleeve"
    ],
    "BRANDING & IDENTITY MATERIAL": [
        "Logo Sticker", "Brand Tag", "Thank You Card", "Warranty Card", "Feedback Card",
        "Loyalty Card", "Membership Card", "Coupon Card", "Gift Voucher", "Scratch Card"
    ],
    "BOOK & PUBLICATION PRINTING": [
        "Book Printing", "Magazine", "Newspaper", "Journal", "Notebook", "Diary",
        "Annual Report", "Company Profile Book", "Training Manual", "Instruction Booklet",
        "Story Book", "Comic Book"
    ],
    "EVENT & FUNCTION PRINTING": [
        "Wedding Card", "Invitation Card", "Greeting Card", "Birthday Card", "Festival Card",
        "Event Pass", "Entry Ticket", "Wrist Band", "Badge", "Certificate", "Award Certificate"
    ],
    "CORPORATE & INDUSTRIAL PRINTING": [
        "Report File", "Proposal File", "Presentation Print", "HR Forms", "Salary Slip Format",
        "Employee Handbook", "Safety Manual", "Compliance Documents"
    ],
    "PHOTO & DECOR PRINTING": [
        "Photo Print", "Canvas Print", "Photo Album", "Wall Frame Print", "Poster Frame",
        "Calendar", "Wall Calendar", "Desk Calendar"
    ],
    "SPECIALTY PRINTING ITEMS": [
        "Thermal Receipt Roll", "Carbonless Paper (NCR Bill)", "Foil Print Cards", "UV Spot Print",
        "Embossed Cards", "Die Cut Printing", "Sticker Sheets", "Scratch Label"
    ],
    "RETAIL SHOP PRINTING": [
        "Price Tag", "MRP Sticker", "Shelf Label", "Offer Board Print", "Counter Display Card"
    ]
};

const allFinishes = ['Matte', 'Glossy', 'UV Spot', 'Gold Foil', 'Embossed'];
const allIndustries = [
    "Corporate offices and IT companies",
    "Education institutes, schools, and colleges",
    "Real estate companies and builders",
    "Restaurants, cafes, and hotels",
    "Hospitals, clinics, and pharmaceutical companies",
    "Event planners and wedding agencies",
    "Retail stores, malls, and supermarkets",
    "Manufacturing companies and product brands",
    "Government offices and NGOs",
    "Banks, finance, and insurance companies",
    "Travel agencies and tour companies",
    "Fashion and apparel brands",
    "Beauty and wellness brands",
    "Publishers and authors",
    "Advertising and marketing agencies"
];

export default function PaperPrinting() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [selectedCategory, setSelectedCategory] = React.useState("OFFICE & BUSINESS STATIONERY");
    // New Modal State
    const [activeProduct, setActiveProduct] = React.useState(null);
    const [isProductModalOpen, setIsProductModalOpen] = React.useState(false);

    const handleCardClick = (productName) => {
        // Create a product object structure
        setActiveProduct({ name: productName });
        setIsProductModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsProductModalOpen(false);
    };

    // Filter Logic
    const [filters, setFilters] = React.useState({
        finishes: [],
        industries: [],
        inStock: false
    });

    // Toggle Checkbox Logic
    const toggleFilter = (type, value) => {
        setFilters(prev => {
            const list = prev[type];
            const newList = list.includes(value)
                ? list.filter(item => item !== value)
                : [...list, value];
            return { ...prev, [type]: newList };
        });
    };

    // Toggle Stock
    const toggleStock = () => {
        setFilters(prev => ({ ...prev, inStock: !prev.inStock }));
    };


    const clearFilters = () => {
        setFilters({
            finishes: [],
            industries: [],
            inStock: false
        });
    };

    // Enrich Data with Deterministic Attributes
    const enrichedData = React.useMemo(() => {
        const getMeta = (name) => {
            // Simple hash for consistency
            let hash = 0;
            for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
            const rand = (seed) => {
                const x = Math.sin(seed) * 10000;
                return x - Math.floor(x);
            };

            // Generate Attributes
            const stock = rand(hash) > 0.2; // 80% in stock
            const myFinishes = allFinishes.filter((_, i) => rand(hash + i) > 0.6);
            if (myFinishes.length === 0) myFinishes.push(allFinishes[Math.floor(Math.abs(rand(hash)) * allFinishes.length)]);

            const myIndustries = allIndustries.filter((_, i) => rand(hash + i + 10) > 0.75);
            if (myIndustries.length === 0) myIndustries.push(allIndustries[Math.floor(Math.abs(rand(hash + 20)) * allIndustries.length)]);

            return { name, inStock: stock, finishes: myFinishes, industries: myIndustries };
        };

        const newData = {};
        Object.keys(paperPrintingData).forEach(cat => {
            newData[cat] = paperPrintingData[cat].map(prodName => getMeta(prodName));
        });
        return newData;
    }, []); // paperPrintingData is now outside the component

    // Computed Products List
    const currentProducts = React.useMemo(() => {
        const products = enrichedData[selectedCategory] || [];
        return products.filter(product => {
            // Filter by Finish
            if (filters.finishes.length > 0) {
                const hasMatch = product.finishes.some(f => filters.finishes.includes(f));
                if (!hasMatch) return false;
            }
            // Filter by Industry
            if (filters.industries.length > 0) {
                const hasMatch = product.industries.some(i => filters.industries.includes(i));
                if (!hasMatch) return false;
            }
            // Filter by Stock
            if (filters.inStock && !product.inStock) return false;

            return true;
        });
    }, [selectedCategory, filters, enrichedData]);

    const categories = Object.keys(paperPrintingData);

    return (
        <div className="service-detail-wrapper">

            {/* 1. Hero */}
            <section className="sd-hero-section">
                <h1 className="sd-hero-title">PAPER PRINTING SERVICES</h1>
            </section>

            {/* 2. Main Content Split */}
            <section className="sd-content-section">
                <div className="sd-split-card">
                    <div className="sd-image-box" style={{ backgroundImage: `url('${paperImg}')` }}></div>
                    <div className="sd-text-box">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2rem', maxWidth: '600px' }}>
                            <p style={{ margin: 0, fontSize: '1.2rem', lineHeight: '1.8' }}>
                                Paper Printing Services offer high-quality printing solutions such as visiting cards, flyers, brochures, posters, letterheads, and banners. These services help businesses create a professional image, strengthen branding, and make marketing more effective.
                            </p>
                            <button
                                onClick={() => document.querySelector('.pp-page-container')?.scrollIntoView({ behavior: 'smooth' })}
                                style={{
                                    backgroundColor: '#fff',
                                    color: '#043F4A',
                                    padding: '14px 28px',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    fontWeight: '700',
                                    letterSpacing: '1px',
                                    cursor: 'pointer',
                                    textTransform: 'uppercase',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                    alignSelf: 'flex-start'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 10px 15px rgba(0,0,0,0.15)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                                }}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Paper Services Product Grid */}
            <div className="pp-page-container">
                {/* Sidebar Filter (Mimic) */}
                <aside className="pp-sidebar">
                    <div className="pp-sidebar-group">
                        <span className="pp-sidebar-heading">PAPER PRINTING SERVICES</span>
                    </div>

                    {/* Clear Filters Button */}
                    <div style={{ padding: '0 0 1.5rem 0' }}>
                        <button
                            onClick={clearFilters}
                            style={{
                                width: '100%',
                                padding: '10px',
                                backgroundColor: '#dc2626',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                fontSize: '0.9rem',
                                transition: 'background-color 0.2s'
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#b91c1c'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#dc2626'}
                        >
                            Clear All Filters
                        </button>
                    </div>





                    <div className="pp-sidebar-group">
                        <span className="pp-sidebar-heading">Your Industries</span>
                        <ul className="pp-sidebar-list">
                            {allIndustries.map((item, i) => (
                                <li key={i} className="pp-sidebar-item">
                                    <input
                                        type="checkbox"
                                        checked={filters.industries.includes(item)}
                                        onChange={() => toggleFilter('industries', item)}
                                    /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="pp-sidebar-group">
                        <span className="pp-sidebar-heading">Availability</span>
                        <ul className="pp-sidebar-list">
                            <li className="pp-sidebar-item">
                                <input
                                    type="checkbox"
                                    checked={filters.inStock}
                                    onChange={toggleStock}
                                /> In Stock
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main Grid Content */}
                <div className="pp-main-content">
                    <div className="pp-header">
                        <h2 className="pp-header-title">{selectedCategory}</h2>
                        <span className="pp-results-count">Showing {currentProducts.length} results</span>
                    </div>

                    {/* Horizontal Sliding Category Filter */}
                    <div className="pp-filters-container">
                        <div className="pp-filter-label">Categories:</div>
                        <div className="pp-category-filter">
                            {categories.map((cat, i) => (
                                <div
                                    key={i}
                                    className={`pp-cat-pill ${selectedCategory === cat ? 'active' : ''}`}
                                    style={{ animationDelay: `${i * 0.05}s` }}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Horizontal Sliding Industries Filter */}


                    <div className="pp-grid">
                        {currentProducts.length > 0 ? (
                            currentProducts.map((service, index) => (
                                <div
                                    key={`${selectedCategory}-${index}`}
                                    className="pp-card"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <div className="pp-card-image-wrap">
                                        {/* Using a dynamic path assumption with fallback to main image */}
                                        <img
                                            src={`/assets/${service.name}.jpg`}
                                            onError={(e) => { e.target.onerror = null; e.target.src = paperImg }}
                                            alt={service.name}
                                            className="pp-card-img"
                                        />
                                        {/* Optional Indicators for Demo */}
                                        {!service.inStock && (
                                            <span style={{
                                                position: 'absolute', top: '10px', right: '10px',
                                                background: '#ef4444', color: 'white', padding: '4px 8px',
                                                fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '4px'
                                            }}>Out of Stock</span>
                                        )}
                                    </div>
                                    <div className="pp-card-content">
                                        <div>
                                            <div className="pp-card-cat">Printing</div>
                                            <h3 className="pp-card-title">{service.name}</h3>

                                        </div>
                                        <div className="pp-card-footer">
                                            <span className="pp-price">Get Quote</span>
                                            <button
                                                className="pp-enquire-btn"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleCardClick(service.name);
                                                }}
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div style={{ colSpan: 3, padding: '2rem', textAlign: 'center', width: '100%', gridColumn: '1 / -1', color: '#64748b' }}>
                                No products match your filters.
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* 4. Our Work */}
            <section className="sd-work-section">
                <h2 className="sd-section-title-white">OUR WORK</h2>
                <div className="work-carousel-container" style={{ maxWidth: '1000px', margin: '0 auto 3rem' }}>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        speed={2500}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        modules={[EffectCoverflow, Autoplay, Pagination]}
                        className="printing-swiper"
                    >
                        {works.map((work) => (
                            <SwiperSlide key={work.id}>
                                <div className="work-slide-item">
                                    <img src={work.img} alt={work.alt} className="work-slide-img" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <button className="sd-more-btn">MORE</button>
            </section>

            {/* 5. Sectors */}
            <Industries />

            {/* 6. Clients */}
            <section className="sd-clients-section" style={{ background: '#fff' }}>
                <h2 className="sd-section-title-white" style={{ color: '#022e37' }}>OUR CLIENTS</h2>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="clients-swiper"
                    style={{ paddingBottom: '3rem', maxWidth: '1200px', margin: '0 auto' }}
                >
                    {clients.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="db-client-slide" style={{ border: '1px solid #f0f0f0' }}>
                                <img src={img} alt={`Client ${index + 1}`} className="db-client-img" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Product Detail Modal */}
            <ProductDetailModal
                isOpen={isProductModalOpen}
                onClose={handleCloseModal}
                product={activeProduct}
            />

        </div>
    );
}
