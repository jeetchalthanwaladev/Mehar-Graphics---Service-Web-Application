import React, { useEffect, useState, useMemo } from "react";
import "../styles/ServiceDetailPage.css";
import Industries from "../components/Industries";

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Assets
import vinylImg from "../assets/vinyl-printing-new.jpg";
import ProductDetailModal from "../components/ProductDetailModal";

const vinylPrintingData = {
    "Outdoor Advertising Vinyl Products": [
        "Flex Banner", "Vinyl Banner", "Hoardings / Billboards", "Pole Banners",
        "Street Light Banners", "Event Outdoor Backdrops", "Roadside Sign Boards",
        "Temporary Construction Site Covers"
    ],
    "Shop & Commercial Branding Vinyl": [
        "Shop Front Vinyl Boards", "Window Graphics", "One Way Vision Vinyl",
        "Frosted Glass Vinyl", "Glass Branding Stickers", "Reception Branding",
        "Name Plates Vinyl", "Acrylic Board Vinyl Prints"
    ],
    "Vehicle Branding & Wrapping": [
        "Car Wrap Vinyl", "Bike Wrap Vinyl", "Bus Branding", "Auto Rickshaw Branding",
        "Truck Wraps", "Fleet Branding", "Reflective Safety Stickers", "Magnetic Vehicle Stickers"
    ],
    "Wall & Interior Decor Vinyl": [
        "Wall Stickers", "Wall Decals", "Wallpaper Vinyl", "3D Wall Graphics",
        "Office Wall Branding", "Hospital Wall Posters", "School Educational Vinyl",
        "Motivational Quotes Vinyl"
    ],
    "Glass & Privacy Vinyl": [
        "Frosted Film", "Etched Glass Effect Vinyl", "Privacy Film",
        "Decorative Glass Prints", "Office Partition Vinyl"
    ],
    "Retail & Promotional Vinyl": [
        "Floor Stickers", "Standee Prints", "Roll-up Banners", "Poster Vinyl",
        "Promotional Stickers", "POS Displays", "Counter Branding", "Shelf Branding"
    ],
    "Event & Exhibition Vinyl": [
        "Stage Backdrops", "Exhibition Stall Graphics", "Event Panels",
        "Photo Booth Backdrops", "Conference Branding", "Sponsor Boards"
    ],
    "Safety & Industrial Vinyl": [
        "Safety Stickers", "Warning Signs", "Fire Exit Signs", "Hazard Labels",
        "Reflective Tape", "Industrial Labels"
    ]
};

const allFinishes = ['Matte', 'Glossy', 'UV Coated', 'Laminated', 'Reflective'];
const allIndustries = [
    "Retail stores and showrooms",
    "Real estate companies and builders",
    "Automobile companies and service centers",
    "Restaurants and cafes",
    "Corporate offices",
    "Event and exhibition organizers",
    "Education institutes",
    "Hospitals and clinics",
    "Shopping malls and stores",
    "Gyms and fitness studios",
    "Beauty and salon brands",
    "Film and production houses",
    "Logistics and transport companies",
    "Interior designers and architects",
    "Manufacturing and industrial units"
];

const works = [
    { id: 1, img: "/potfolio/Rectangle%20126.png", alt: "Portfolio Work 1" },
    { id: 2, img: "/potfolio/Rectangle%20147.png", alt: "Portfolio Work 2" },
    { id: 3, img: "/potfolio/Rectangle%20148.png", alt: "Portfolio Work 3" },
    { id: 4, img: "/potfolio/Rectangle%20149.png", alt: "Portfolio Work 4" },
    { id: 5, img: "/potfolio/Rectangle%20150.png", alt: "Portfolio Work 5" },
    { id: 6, img: "/potfolio/Rectangle%20151.png", alt: "Portfolio Work 6" },
    { id: 7, img: "/potfolio/Rectangle%20152.png", alt: "Portfolio Work 7" },
];

const clients = [
    "/logos/01.jpg", "/logos/02.jpg", "/logos/03.jpg", "/logos/04.jpg",
    "/logos/05.jpg", "/logos/06.jpg", "/logos/07.jpg", "/logos/08.jpg",
    "/logos/09.jpg", "/logos/10.jpg", "/logos/11.jpg"
];

export default function VinylPrinting() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [selectedCategory, setSelectedCategory] = useState("Outdoor Advertising Vinyl Products");

    // Modal State
    const [activeProduct, setActiveProduct] = useState(null);
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);

    const handleCardClick = (productName) => {
        setActiveProduct({ name: productName });
        setIsProductModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsProductModalOpen(false);
    };

    // Filter Logic
    const [filters, setFilters] = useState({
        finishes: [],
        industries: [],
        inStock: false
    });

    const toggleFilter = (type, value) => {
        setFilters(prev => {
            const list = prev[type];
            const newList = list.includes(value)
                ? list.filter(item => item !== value)
                : [...list, value];
            return { ...prev, [type]: newList };
        });
    };

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

    // Enrich Data
    const enrichedData = useMemo(() => {
        const getMeta = (name) => {
            let hash = 0;
            for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
            const rand = (seed) => {
                const x = Math.sin(seed) * 10000;
                return x - Math.floor(x);
            };

            const stock = rand(hash) > 0.2;
            const myFinishes = allFinishes.filter((_, i) => rand(hash + i) > 0.6);
            if (myFinishes.length === 0) myFinishes.push(allFinishes[Math.floor(Math.abs(rand(hash)) * allFinishes.length)]);

            const myIndustries = allIndustries.filter((_, i) => rand(hash + i + 10) > 0.75);
            if (myIndustries.length === 0) myIndustries.push(allIndustries[Math.floor(Math.abs(rand(hash + 20)) * allIndustries.length)]);

            return { name, inStock: stock, finishes: myFinishes, industries: myIndustries };
        };

        const newData = {};
        Object.keys(vinylPrintingData).forEach(cat => {
            newData[cat] = vinylPrintingData[cat].map(prodName => getMeta(prodName));
        });
        return newData;
    }, []);

    const currentProducts = useMemo(() => {
        const products = enrichedData[selectedCategory] || [];
        return products.filter(product => {
            if (filters.finishes.length > 0) {
                const hasMatch = product.finishes.some(f => filters.finishes.includes(f));
                if (!hasMatch) return false;
            }
            if (filters.industries.length > 0) {
                const hasMatch = product.industries.some(i => filters.industries.includes(i));
                if (!hasMatch) return false;
            }
            if (filters.inStock && !product.inStock) return false;
            return true;
        });
    }, [selectedCategory, filters, enrichedData]);

    const categories = Object.keys(vinylPrintingData);

    return (

        <div className="service-detail-wrapper">
            <section className="sd-hero-section">
                <h1 className="sd-hero-title">VINYL PRINTING SERVICES</h1>
            </section>

            <section className="sd-content-section">
                <div className="sd-split-card">
                    <div className="sd-image-box" style={{ backgroundImage: `url('${vinylImg}')` }}></div>
                    <div className="sd-text-box">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2rem', maxWidth: '600px' }}>
                            <p style={{ margin: 0, fontSize: '1.2rem', lineHeight: '1.8' }}>
                                Vinyl Printing Services provide high-quality, durable, and weather-resistant prints such as hoardings, shop signage, wall graphics, vehicle branding, and stickers. These services are ideal for outdoor and long-term branding, helping to create strong and impactful brand visibility.
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

            <div className="pp-page-container">
                <aside className="pp-sidebar">
                    <div className="pp-sidebar-group">
                        <span className="pp-sidebar-heading">VINYL PRINTING SERVICES</span>
                    </div>

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

                <div className="pp-main-content">
                    <div className="pp-header">
                        <h2 className="pp-header-title">{selectedCategory}</h2>
                        <span className="pp-results-count">Showing {currentProducts.length} results</span>
                    </div>

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

                    <div className="pp-grid">
                        {currentProducts.map((product, i) => (
                            <div key={i} className="pp-card" onClick={() => handleCardClick(product.name)}>
                                <div className="pp-card-image-wrap">
                                    <div className="pp-badge">Sale</div>
                                    <div className="pp-actions"></div>
                                    <img
                                        src={vinylImg}
                                        alt={product.name}
                                        className="pp-card-img"
                                        onError={(e) => e.target.src = vinylImg}
                                    />
                                </div>
                                <div className="pp-card-content">
                                    <div>
                                        <div className="pp-card-cat">{selectedCategory}</div>
                                        <h3 className="pp-card-title">{product.name}</h3>
                                        <div className="pp-card-rating">
                                            <span>★★★★★</span> 4.8
                                        </div>
                                    </div>
                                    <div className="pp-card-footer">
                                        <span className="pp-price">Custom Quote</span>
                                        <button className="pp-enquire-btn">View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

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

            <Industries />

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

            <ProductDetailModal
                isOpen={isProductModalOpen}
                onClose={handleCloseModal}
                product={activeProduct}
                finishOptions={{
                    "Specialty Vinyl Types (Material Wise)": [
                        "Matte Vinyl", "Glossy Vinyl", "Transparent Vinyl", "Backlit Vinyl",
                        "Reflective Vinyl", "Blackout Vinyl", "Perforated Vinyl", "Cast Vinyl",
                        "Calendered Vinyl", "3M Vinyl", "Avery Vinyl", "HP Latex Vinyl"
                    ]
                }}
                showGsm={false}
                showRivets={true}
            />
        </div>
    );
}
