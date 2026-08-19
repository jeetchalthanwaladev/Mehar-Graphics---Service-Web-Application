import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Industries from '../components/Industries';
import '../styles/DigitalBranding.css'; // Reusing the same CSS for consistency
import "../styles/ServicesPage.css"; // Importing Services CSS for the Premium Swiper Styles

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Reusing existing assets
import printingImg from "../assets/printing-image.jpg";
import digitalImg from "../assets/digital-image.jpg";

// Printing specific images
import paperImg from "../assets/paper-printing-new.jpg"; // New Paper Image
import vinylImg from "../assets/vinyl-printing-new.jpg"; // New Vinyl Image

const PrintingServices = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Printing Work items for the carousel (Duplicated for smooth loop)
    // Printing Work items for the carousel (Using images from public/potfolio)
    const printingWorks = [
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
            <section className="services-hero-section">
                <h1 className="services-hero-title">Our Expertise in Printing</h1>
                <p className="services-hero-desc">
                    Experience precision and quality with our comprehensive printing solutions. From business cards to large format signage, we bring your vision to life with vibrant colors and premium materials.
                </p>
            </section>

            {/* 2. Top Navigation Cards (Context) */}
            <div className="service-categories-row">
                {/* Left: Printing (Active) */}
                <div className="service-cat-card active">
                    <img src={printingImg} alt="Printing Services" className="service-cat-img" />
                    <div className="service-cat-overlay">
                        <h2>Printing Services</h2>
                    </div>
                </div>

                {/* Right: Digital (Link) */}
                <Link to="/digital-branding" className="service-cat-card">
                    <img src={digitalImg} alt="Digital Branding Services" className="service-cat-img" />
                    <div className="service-cat-overlay">
                        <h2>DIGITAL BRANDING Services</h2>
                    </div>
                </Link>
            </div>

            {/* 3. Service Rows (The Core Content) */}
            <div className="db-services-container">

                {/* Service 1: Paper Printing */}
                <div className="db-service-block">
                    <div className="db-service-header">
                        <h3>PAPER PRINTING SERVICES</h3>
                        <p>High-quality solutions for all your business needs.</p>
                    </div>
                    <div className="db-service-row">
                        <div className="db-feature-box text-box">
                            <p>
                                Paper Printing Services offer high-quality printing solutions such as visiting cards, flyers, brochures, posters, letterheads, and banners. These services help businesses create a professional image, strengthen branding, and make marketing more effective.
                            </p>
                            <Link to="/paper-printing" style={{
                                display: 'inline-block',
                                marginTop: '1rem',
                                padding: '10px 20px',
                                background: '#fff',
                                color: '#043F4A',
                                fontWeight: 'bold',
                                borderRadius: '5px',
                                textDecoration: 'none'
                            }}>
                                VIEW DETAILS
                            </Link>
                        </div>
                        <div className="db-feature-box image-box" style={{ backgroundImage: `url('${paperImg}')` }}>
                            {/* Image bg */}
                        </div>
                    </div>
                </div>

                {/* Service 2: Vinyl Printing */}
                <div className="db-service-block">
                    <div className="db-service-header">
                        <h3>VINYL PRINTING SERVICES</h3>
                        <p>Durable and impactful outdoor branding.</p>
                    </div>
                    <div className="db-service-row reverse">
                        <div className="db-feature-box text-box">
                            <p>
                                Vinyl Printing Services provide high-quality, durable, and weather-resistant prints such as hoardings, shop signage, wall graphics, vehicle branding, and stickers. These services are ideal for outdoor and long-term branding, helping to create strong and impactful brand visibility.
                            </p>
                            <Link to="/vinyl-printing" style={{
                                display: 'inline-block',
                                marginTop: '1rem',
                                padding: '10px 20px',
                                background: '#fff',
                                color: '#043F4A',
                                fontWeight: 'bold',
                                borderRadius: '5px',
                                textDecoration: 'none'
                            }}>
                                VIEW DETAILS
                            </Link>
                        </div>
                        <div className="db-feature-box image-box" style={{ backgroundImage: `url('${vinylImg}')` }}>
                            {/* Image bg */}
                        </div>
                    </div>
                </div>

            </div>

            {/* 4. Our Work Section */}
            <section className="db-section-dark">
                <h2 className="db-section-title-white">OUR WORK</h2>

                {/* 3D Coverflow Auto-Sliding Carousel - Reused from Digital Branding */}
                <div className="work-carousel-container">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        speed={2500} // Continuous smooth transition speed
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 0, // No delay for non-stop effect
                            disableOnInteraction: false,
                        }}
                        modules={[EffectCoverflow, Autoplay, Pagination]}
                        className="printing-swiper"
                    >
                        {printingWorks.map((work) => (
                            <SwiperSlide key={work.id}>
                                <div className="work-slide-item">
                                    <img src={work.img} alt={work.alt} className="work-slide-img" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <button className="db-more-btn">MORE</button>
                </div>
            </section>

            {/* 5. Sectors We Support */}
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
}

export default PrintingServices;
