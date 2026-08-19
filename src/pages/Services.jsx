import React from "react";
import { Link } from "react-router-dom";
// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import "../styles/ServicesPage.css";

// Assets
import printingImg from "../assets/printing-image.jpg";
import digitalImg from "../assets/digital-image.jpg";

// Helper for Icons
const Icon = ({ d }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sector-icon" style={{ width: 40, height: 40 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

const sectors = [
  { title: "Automotive", desc: "Service Centers & Showrooms", d: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" },
  { title: "Hospitality", desc: "Restaurants, Cafes & Hotels", d: "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Corporate Offices", desc: "IT & Business Parks", d: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" },
  { title: "Events & Expos", desc: "Organizers & Wedding Planners", d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" },
  { title: "Interiors", desc: "Designers & Architects", d: "M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" },
  { title: "Hotels", desc: "Resorts & Event Halls", d: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75m-.75 3h.75m-.75 3h.75" },
  { title: "Beauty & Wellness", desc: "Salons & Spas", d: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" },
  { title: "Entertainment", desc: "Film Production & Media", d: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" }
];

// Carousel items (duplicated for loop feel if needed, though Swiper 'loop' handles it)
// Carousel items (Using images from public/potfolio)
const printingWorks = [
  { id: 1, img: "/potfolio/Rectangle%20126.png", alt: "Portfolio Work 1" },
  { id: 2, img: "/potfolio/Rectangle%20147.png", alt: "Portfolio Work 2" },
  { id: 3, img: "/potfolio/Rectangle%20148.png", alt: "Portfolio Work 3" },
  { id: 4, img: "/potfolio/Rectangle%20149.png", alt: "Portfolio Work 4" },
  { id: 5, img: "/potfolio/Rectangle%20150.png", alt: "Portfolio Work 5" },
  { id: 6, img: "/potfolio/Rectangle%20151.png", alt: "Portfolio Work 6" },
  { id: 7, img: "/potfolio/Rectangle%20152.png", alt: "Portfolio Work 7" },
];

export default function Services() {
  return (
    <div className="services-page-wrapper">
      {/* 1. Hero */}
      <section className="services-hero-section smoke-zone">
        <h1 className="services-hero-title">Our Services</h1>
        <p className="services-hero-desc">
          From essential hospital stationery to illuminating LED signage, we provide end-to-end solutions.
          Now offering strategic branding activities to help your business stand out. Quality manufacturing backed by a decade of expertise.
        </p>
      </section>

      {/* Hero Categories */}
      <div className="service-categories-row">
        <Link to="/printing" className="service-cat-card smoke-zone">
          <img src={printingImg} alt="Printing Services" className="service-cat-img" />
          <div className="service-cat-overlay">
            <h2>Printing Services</h2>
          </div>
        </Link>
        <Link to="/digital-branding" className="service-cat-card smoke-zone">
          <img src={digitalImg} alt="Digital Branding Services" className="service-cat-img" />
          <div className="service-cat-overlay">
            <h2>Digital Branding Services</h2>
          </div>
        </Link>
      </div>

      {/* 2. Printing Work Showcase (Dark Teal) */}
      <section className="dark-section">
        <h2 className="section-heading-white">OUR WORK</h2>

        {/* 3D Auto-Sliding Carousel */}
        <div className="work-carousel-container">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 2500,
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

        <Link to="/printing" className="more-btn">MORE</Link>
      </section>

      {/* 3. Our Clients */}
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
          {/* Using client logos from public folder */}
          {[
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
          ].map((img, index) => (
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



      {/* 6. Sectors We Support */}
      <section className="industries-marquee" style={{ background: '#f0fdfa', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '100%', overflow: 'hidden' }}>
          <h2 className="industries-marquee__title" style={{ color: '#043F4A' }}>Sectors We Support</h2>
          <p className="industries-marquee__sub" style={{ color: '#64748b' }}>
            Navigating the complex requirements of different industries requires a partner who understands the big picture.
          </p>

          <div className="marquee-wrapper">
            {/* Row 1 - Forward */}
            <div className="marquee-track">
              {sectors.slice(0, 4).map((s, i) => (
                <div key={i} className="industry-card">
                  <div className="icon-box">
                    <Icon d={s.d} />
                  </div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              ))}
              {/* Duplicate for infinite loop */}
              {sectors.slice(0, 4).map((s, i) => (
                <div key={`dup-${i}`} className="industry-card">
                  <div className="icon-box">
                    <Icon d={s.d} />
                  </div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Row 2 - Reverse */}
            <div className="marquee-track reverse">
              {sectors.slice(4, 8).map((s, i) => (
                <div key={i} className="industry-card">
                  <div className="icon-box">
                    <Icon d={s.d} />
                  </div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              ))}
              {/* Duplicate for infinite loop */}
              {sectors.slice(4, 8).map((s, i) => (
                <div key={`dup-${i}`} className="industry-card">
                  <div className="icon-box">
                    <Icon d={s.d} />
                  </div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
