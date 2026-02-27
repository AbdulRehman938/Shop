import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollToPlugin);

const LandingPage = () => {
  useEffect(() => {
    // GSAP Smooth Scroll for Anchor Links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          gsap.to(window, {
            duration: 1.25,
            scrollTo: { y: target, autoKill: true },
            ease: "power4.inOut",
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleAnchorClick));

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleAnchorClick),
      );
    };
  }, []);

  return (
    <div className="min-h-screen" dir="rtl" lang="ur">
      <Navbar />
      <main>
        <Hero />
        <ProductCategories />
        <FeaturedProducts />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
