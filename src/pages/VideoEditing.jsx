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
import videoImg from "../assets/Video Editing & Shoots.jpg";

export default function VideoEditing() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        <div className="service-detail-wrapper">

            {/* 1. Hero */}
            <section className="sd-hero-section">
                <h1 className="sd-hero-title">Video Editing & Shoots</h1>
            </section>

            {/* 2. Main Content */}
            <section className="sd-content-section">
                <div className="sd-split-card">
                    <div className="sd-text-box">
                        <p>
                            We provide professional video editing and shooting services to bring your brand's story to life. From high-quality corporate shoots to engaging social media reels and post-production editing, we ensure your visual content captures attention and drives results.
                        </p>
                    </div>
                    <div
                        className="sd-image-box"
                        style={{ backgroundImage: `url('${videoImg}')` }}
                    ></div>
                </div>
            </section>

            {/* 3. Our Work */}
            <section className="sd-work-section">
                <h2 className="sd-section-title-white">OUR WORK</h2>

                {/* 3D Coverflow Auto-Sliding Carousel */}
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

            {/* 4. Sectors */}
            <Industries />

            {/* 5. Clients */}
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

        </div>
    );
}
