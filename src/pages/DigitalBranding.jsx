
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Industries from '../components/Industries';
import '../styles/DigitalBranding.css';
import '../styles/ServicesPage.css';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Reusing existing assets
import printingImg from "../assets/printing-image.jpg";
import digitalImg from "../assets/digital-image.jpg";

// Assets for services (using what we have or best placeholders)
import seoImg from "../assets/Search Engine Optimization.jpg";
import webImg from "../assets/Web Design & Development.jpg";
import videoImg from "../assets/Video Editing & Shoots.jpg";
import mediaImg from "../assets/digital-image.jpg"; // Placeholder for Social Media if no specific

// Placeholder for clients/logo
import logo from "../assets/logo_png_w.svg";


const DigitalBranding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Work items for the carousel
    // Work items for the carousel (Using images from public/potfolio)
    const digitalWorks = [
        { id: 1, img: "/potfolio/Rectangle%20126.png", alt: "Portfolio Work 1" },
        { id: 2, img: "/potfolio/Rectangle%20147.png", alt: "Portfolio Work 2" },
        { id: 3, img: "/potfolio/Rectangle%20148.png", alt: "Portfolio Work 3" },
        { id: 4, img: "/potfolio/Rectangle%20149.png", alt: "Portfolio Work 4" },
        { id: 5, img: "/potfolio/Rectangle%20150.png", alt: "Portfolio Work 5" },
        { id: 6, img: "/potfolio/Rectangle%20151.png", alt: "Portfolio Work 6" },
        { id: 7, img: "/potfolio/Rectangle%20152.png", alt: "Portfolio Work 7" },
    ];

    // Client Assets (Using public path)
    const clients = [
        "/logos/01.jpg",
        "/logos/02.jpg",
        "/logos/03.jpg",
        "/logos/04.jpg",
        "/logos/05.jpg",
        "/logos/06.jpg",
        "/logos/07.jpg",
        "/logos/08.jpg",
        "/logos/09.jpg",
        "/logos/10.jpg",
        "/logos/11.jpg"
    ];

    return (
        <div className="digital-branding-page-wrapper">

            {/* 1. Expertise Header */}
            <section className="services-hero-section smoke-zone">
                <h1 className="services-hero-title">Our Expertise in Digital Branding</h1>
                <p className="services-hero-desc">
                    Elevate your brand with data-driven strategies and creative storytelling. From social media management to high-impact web design, we help you connect with your audience and grow your business.
                </p>
            </section>

            {/* 2. Top Navigation Cards (Context) */}
            <div className="service-categories-row">
                {/* Left: Printing (Inactive/Link) */}
                <Link to="/printing" className="service-cat-card smoke-zone">
                    <img src={printingImg} alt="Printing Services" className="service-cat-img" />
                    <div className="service-cat-overlay">
                        <h2>Printing Services</h2>
                    </div>
                </Link>

                {/* Right: Digital (Active) */}
                <div className="service-cat-card active smoke-zone">
                    <img src={digitalImg} alt="Digital Branding Services" className="service-cat-img" />
                    <div className="service-cat-overlay">
                        <h2>DIGITAL BRANDING Services</h2>
                    </div>
                </div>
            </div>

            {/* 3. Service Rows (The Core Content) */}
            <div className="db-services-container">

                {/* Service 1: Social Media Marketing */}
                <div className="db-service-block">
                    <div className="db-service-header">
                        <h3>Social Media Marketing</h3>
                        <p>Engage your audience with high-impact campaigns.</p>
                    </div>
                    <div className="db-service-row">
                        <div className="db-feature-box text-box">
                            <p>
                                Social Media Marketing helps brands promote their products and services on platforms like Facebook, Instagram, WhatsApp, and LinkedIn. By using creative posts, reels, ads, and a strong content strategy, it increases audience reach, boosts engagement, and supports business growth.
                            </p>
                        </div>
                        <div className="db-feature-box image-box" style={{ backgroundImage: `url('${mediaImg}')` }}>
                            {/* Image bg */}
                        </div>
                    </div>
                </div>

                {/* Service 2: Web Design & Development (Alternating) */}
                <div className="db-service-block">
                    <div className="db-service-header">
                        <h3>Web Design & Development</h3>
                        <p>Stunning, responsive websites that convert.</p>
                    </div>
                    <div className="db-service-row reverse">
                        <div className="db-feature-box text-box">
                            <p>
                                Web Design & Development involves creating attractive, user-friendly, and responsive websites. The goal is to give a brand a strong online presence, improve user experience, and help convert visitors into customers through a professional digital identity.
                            </p>
                        </div>
                        <div className="db-feature-box image-box" style={{ backgroundImage: `url('${webImg}')` }}>
                            {/* Image bg */}
                        </div>
                        {/* Note: In CSS 'reverse' class will swap order, so DOM order depends on flex-direction logic.
                If using row-reverse, text should be second in DOM? Or first in DOM and visually swapped?
                Let's stick to logical DOM order: Text then Image, and CSS swaps them.
                Wait, user image shows Image LEFT, Text RIGHT for 2nd item.
                So for 2nd item, if I want Image Left, Text Right:
                Normal row: Text Left, Image Right.
                Reverse row: Image Left, Text Right.
            */}
                    </div>
                </div>

                {/* Service 3: SEO */}
                <div className="db-service-block">
                    <div className="db-service-header">
                        <h3>Search Engine Optimization</h3>
                        <p>Rank higher and drive organic traffic.</p>
                    </div>
                    <div className="db-service-row">
                        <div className="db-feature-box text-box">
                            <p>
                                Search Engine Optimization (SEO) helps improve a website's visibility on search engines like Google. By optimizing content, keywords, and website structure, SEO increases organic traffic, improves search rankings, and helps businesses reach the right audience online.
                            </p>
                        </div>
                        <div className="db-feature-box image-box" style={{ backgroundImage: `url('${seoImg}')` }}>
                            {/* Image bg */}
                        </div>
                    </div>
                </div>

                {/* Service 4: Video Editing */}
                <div className="db-service-block">
                    <div className="db-service-header">
                        <h3>Video Editing & Shoots</h3>
                        <p>Cinematic storytelling for your brand.</p>
                    </div>
                    <div className="db-service-row reverse">
                        <div className="db-feature-box text-box">
                            <p>
                                Video Editing & Shoots involve creating high-quality videos through professional filming and editing. These services help brands showcase their products, services, and stories in an engaging way, increasing audience attention, brand impact, and marketing effectiveness.
                            </p>
                        </div>
                        <div className="db-feature-box image-box" style={{ backgroundImage: `url('${videoImg}')` }}>
                            {/* Image bg */}
                        </div>
                    </div>
                </div>

            </div>

            {/* 4. Our Work Section */}
            <section className="db-section-dark">
                <h2 className="db-section-title-white">OUR WORK</h2>

                {/* 3D Coverflow Auto-Sliding Carousel */}
                <div className="work-carousel-container">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        speed={2500} // Speed for non-stop effect
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 0, // No delay
                            disableOnInteraction: false,
                        }}
                        modules={[EffectCoverflow, Autoplay, Pagination]}
                        className="printing-swiper"
                    >
                        {digitalWorks.map((work) => (
                            <SwiperSlide key={work.id}>
                                <div className="work-slide-item">
                                    <img src={work.img} alt={work.alt} className="work-slide-img" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <button className="db-more-btn">MORE</button>
            </section>

            {/* 5. Sectors We Support (Reused from Home) */}
            <Industries />

            {/* 6. Our Clients */}
            <section className="section printing-section" style={{ background: '#fff' }}>
                <h2 className="printing-title">OUR CLIENTS</h2>

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
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    className="clients-swiper"
                    style={{ paddingBottom: '3rem', maxWidth: '1200px', margin: '0 auto' }}
                >
                    {clients.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="db-client-slide">
                                <img
                                    src={img}
                                    alt={`Client ${index + 1}`}
                                    className="db-client-img"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </section>

        </div>
    );
};

export default DigitalBranding;
