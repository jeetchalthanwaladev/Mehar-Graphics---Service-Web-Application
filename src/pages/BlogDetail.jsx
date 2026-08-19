import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { BLOG_POSTS } from "../data/blogData";
import "../styles/blog.css";

export default function BlogDetail() {
    const { id } = useParams();
    const post = BLOG_POSTS.find((p) => p.id === parseInt(id));

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post) {
        return (
            <div className="blog-create-container">
                <h2>Post not found</h2>
                <Link to="/blog" className="back-link">Back to Blog</Link>
            </div>
        );
    }

    return (
        <div className="blog-post-page">
            {/* Hero / Header Image */}
            <div className="post-header-image">
                <img src={post.image} alt={post.title} />
                <div className="post-overlay"></div>
                <div className="post-header-content">
                    <span className="post-category-tag">{post.category}</span>
                    <h1 className="post-title">{post.title}</h1>
                    <div className="post-meta-row">
                        <span className="meta-item"><User size={16} /> {post.author}</span>
                        <span className="meta-item"><Calendar size={16} /> {post.date}</span>
                        <span className="meta-item"><Clock size={16} /> {post.readTime}</span>
                    </div>
                </div>
            </div>

            <div className="post-container">
                <Link to="/blog" className="back-link">
                    <ArrowLeft size={18} /> Back to Articles
                </Link>

                <div
                    className="post-body-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>

                <div className="post-footer">
                    <p>Thanks for reading! Contact us for more info.</p>
                    <Link to="/contact" className="contact-btn">Get in Touch</Link>
                </div>
            </div>
        </div>
    );
}
