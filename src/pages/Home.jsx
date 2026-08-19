import { useEffect } from "react";
import Hero from "../components/Hero.jsx";
import Solutions from "../components/Solutions.jsx";
import PrintingExpertise from "../components/PrintingExpertise.jsx";
import DigitalBranding from "../components/DigitalBranding.jsx";
import IndustriesBlock from "../components/Industries.jsx";
import WhyChoose from "../components/WhyChoose.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CtaStrip from "../components/CtaStrip.jsx";

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Solutions />
      <PrintingExpertise />
      <DigitalBranding />
      <IndustriesBlock />
      <WhyChoose />
      <Testimonials />
      <CtaStrip />
    </>
  );
}
