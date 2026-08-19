import React, { useEffect, useRef } from 'react';

/**
 * Particle Class
 * Represents a single smoke particle in the canvas system.
 */
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 40 + 20; // Initial size between 20-60px
        this.speedX = Math.random() * 1.5 - 0.75; // Slight drift
        this.speedY = Math.random() * 1.5 - 0.75;
        this.opacity = Math.random() * 0.4 + 0.2; // Initial opacity 0.2-0.6
        this.fadingSpeed = Math.random() * 0.008 + 0.004; // How fast it disappears
        this.expansionSpeed = 0.4; // Particles grow as they age
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= this.fadingSpeed;
        this.size += this.expansionSpeed;
    }

    draw(ctx) {
        if (this.opacity <= 0) return;

        // Use radial gradient for soft, realistic smoke edges without heavy filters
        const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size
        );

        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(250, 250, 250, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

/**
 * SmokeCursor Component
 * Handles the canvas rendering and mouse tracking for the cinematic smoke effect.
 */
export default function SmokeCursor() {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const requestRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Particles only generated if mouse is over .smoke-zone or elements with bg images
        const handleMouseMove = (e) => {
            if (window.innerWidth < 768) return; // Disable on mobile

            const target = document.elementFromPoint(e.clientX, e.clientY);
            if (!target) return;

            // Detect if hovered element is a designated "smoke zone" or has a background image
            const isSmokeZone = target.closest('.smoke-zone') ||
                window.getComputedStyle(target).backgroundImage !== 'none';

            if (isSmokeZone) {
                // Add few particles per move to keep density premium
                for (let i = 0; i < 3; i++) {
                    const offsetX = (Math.random() - 0.5) * 10;
                    const offsetY = (Math.random() - 0.5) * 10;
                    particles.current.push(new Particle(e.clientX + offsetX, e.clientY + offsetY));
                }
            }
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const animate = () => {
            // Clear canvas while maintaining performance
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Additive blending for a cinematic, glowing smoke look
            ctx.globalCompositeOperation = 'lighter';

            // Update and draw each particle
            for (let i = 0; i < particles.current.length; i++) {
                const p = particles.current[i];
                p.update();
                p.draw(ctx);

                // Optimization: remove dead particles
                if (p.opacity <= 0 || p.size > 200) {
                    particles.current.splice(i, 1);
                    i--;
                }
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        // Initialize and setup event listeners
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);
        handleResize();

        requestRef.current = requestAnimationFrame(animate);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    // Canvas is full-screen, overlayed, and non-interactive (events pass through)
    return (
        <canvas
            ref={canvasRef}
            id="smoke-canvas"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 99999, // Ensure it's on top of background but allows interaction with content
                opacity: 0.8,
            }}
        />
    );
}
