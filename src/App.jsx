import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PageTransition from "./components/PageTransition.jsx";
import SmokeCursor from "./components/SmokeCursor.jsx";

import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Industries from "./pages/Industries.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import GetQuote from "./pages/GetQuote.jsx";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";

import AdminRoute from "./adminRoute.jsx";

import PrintingExpertise from "./components/PrintingExpertise";
import PrintingDetail from "./pages/PrintingDetail";
import DigitalBranding from "./pages/DigitalBranding";
import PrintingServices from "./pages/PrintingServices";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import WebDesign from "./pages/WebDesign";
import SEO from "./pages/SEO";
import VinylPrinting from "./pages/VinylPrinting";
import VideoEditing from "./pages/VideoEditing";
import PaperPrinting from "./pages/PaperPrinting";

export default function App() {
  const location = useLocation();

  return (
    <>
      <SmokeCursor />
      <Header />

      <main className="site-main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Normal site pages */}
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/industries" element={<PageTransition><Industries /></PageTransition>} />
            <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
            <Route path="/customers" element={<PageTransition><Customers /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/get-quote" element={<PageTransition><GetQuote /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
            <Route path="/blog/:id" element={<PageTransition><BlogDetail /></PageTransition>} />

            {/* NEW PRINTING ROUTES */}
            <Route path="/printing" element={<PageTransition><PrintingServices /></PageTransition>} />
            <Route path="/printing/:id" element={<PageTransition><PrintingDetail /></PageTransition>} />

            {/* New Digital Branding Page */}
            <Route path="/digital-branding" element={<PageTransition><DigitalBranding /></PageTransition>} />

            {/* Detailed Service Pages */}
            <Route path="/social-media-marketing" element={<PageTransition><SocialMediaMarketing /></PageTransition>} />
            <Route path="/web-design" element={<PageTransition><WebDesign /></PageTransition>} />
            <Route path="/seo" element={<PageTransition><SEO /></PageTransition>} />
            <Route path="/vinyl-printing" element={<PageTransition><VinylPrinting /></PageTransition>} />
            <Route path="/video-editing" element={<PageTransition><VideoEditing /></PageTransition>} />
            <Route path="/paper-printing" element={<PageTransition><PaperPrinting /></PageTransition>} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
