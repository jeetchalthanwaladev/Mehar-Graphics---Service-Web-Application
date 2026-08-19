import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { BLOG_POSTS } from "../data/blogData";
import "../styles/blog.css";

export default function Blog() {
  return (
    <div className="blog-page">
      <div className="blog-header">
        <span className="blog-eyebrow">Insights & Updates</span>
        <h1 className="blog-title">Our Latest News</h1>
        <p className="blog-subtitle">
          Expert advice, industry trends, and creative inspiration from the team at Mehar Graphics.
        </p>
      </div>

      {/* FEATURED POSTS CAROUSEL */}
      <div className="blog-featured-section">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          className="featured-swiper"
        >
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <SwiperSlide key={post.id}>
              <Link to={`/blog/${post.id}`} className="featured-slide-card">
                <div className="featured-slide-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="featured-slide-content">
                  <h2 className="featured-slide-title">{post.title}</h2>
                  <p className="featured-slide-excerpt">{post.excerpt}</p>
                </div>
                <div className="featured-slide-footer">
                  Read More
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* TRENDY BLOGS SCROLLER */}
      <div className="blog-highlights-section">
        <div className="highlights-label">Trending Now</div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={'auto'}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="highlights-swiper"
        >
          {BLOG_POSTS.map((post) => (
            <SwiperSlide key={post.id} className="highlight-slide">
              <Link to={`/blog/${post.id}`} className="highlight-item">
                <span className="highlight-icon">🔥</span>
                <span className="highlight-title">{post.title}</span>
                <span className="highlight-arrow">↗</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="blog-container">
        <div className="blog-grid">
          {BLOG_POSTS.map((post, index) => (
            <article key={post.id} className="blog-card" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
              <div className="blog-image-wrapper">
                <img src={post.image} alt={post.title} className="blog-image" loading="lazy" />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="meta-item">
                    <Calendar size={14} /> {post.date}
                  </span>
                  <span className="meta-item">
                    <Clock size={14} /> {post.readTime}
                  </span>
                </div>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="read-more">
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
