import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
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
