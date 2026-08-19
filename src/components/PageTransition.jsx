import { motion } from "framer-motion";
import React from "react";

const PageTransition = ({ children }) => {
    const brandColor = "#043F4A"; // Mehar Graphics Brand Color
    const logoPath = "/logos/mehargraphics.png";

    return (
        <div className="page-transition-container" style={{ position: "relative" }}>
            {/* The Page Content Fade & Slide */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >
                {children}
            </motion.div>

            {/* The "Enter" Slide-up Overlay (reveals content) */}
            <motion.div
                className="slide-in-overlay"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: brandColor,
                    transformOrigin: "top",
                    zIndex: 10000,
                    pointerEvents: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <motion.img
                    src={logoPath}
                    alt="Mehar Graphics"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ width: "300px", maxWidth: "80%", filter: "brightness(0) invert(1)" }}
                />
            </motion.div>

            {/* The "Exit" Slide-up Overlay (covers content) */}
            <motion.div
                className="slide-out-overlay"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: brandColor,
                    transformOrigin: "bottom",
                    zIndex: 10000,
                    pointerEvents: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <motion.img
                    src={logoPath}
                    alt="Mehar Graphics"
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    style={{ width: "300px", maxWidth: "80%", filter: "brightness(0) invert(1)" }}
                />
            </motion.div>
        </div>
    );
};

export default PageTransition;
