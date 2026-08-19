import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo_png_g.svg";
import "../styles/intro.css";

export default function IntroScreen({ onComplete }) {
    const [isExpanding, setIsExpanding] = useState(false);

    useEffect(() => {
        // Disable scrolling when intro is active
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    const handleStart = () => {
        setIsExpanding(true);
        // Wait for the expansion animation to finish before calling onComplete
        setTimeout(() => {
            onComplete();
        }, 1000); // 1s for a more "luxurious" feel
    };

    const logoVariants = {
        initial: { scale: 0.9, opacity: 0, filter: "blur(10px)" },
        animate: { scale: 1, opacity: 1, filter: "blur(0px)" },
        expand: {
            scale: 100,
            opacity: 0,
            filter: "blur(20px)",
            transition: { duration: 1, ease: [0.7, 0, 0.3, 1] }
        }
    };

    return (
        <motion.div
            className="intro-wrapper"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className={`intro-bg ${isExpanding ? "expand" : ""}`} />

            <div className="intro-content">
                <motion.div
                    className="intro-logo-container"
                    variants={logoVariants}
                    initial="initial"
                    animate={isExpanding ? "expand" : "animate"}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.button
                        className="intro-logo-btn"
                        onClick={handleStart}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isExpanding}
                    >
                        <img src={logo} alt="Mehar Graphics Logo" className="intro-logo" />
                    </motion.button>
                </motion.div>

                {!isExpanding && (
                    <motion.p
                        className="intro-hint"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        Click to Enter
                    </motion.p>
                )}
            </div>
        </motion.div>
    );
}
