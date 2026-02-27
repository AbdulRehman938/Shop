import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { T } from "../context/TranslationContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-xl shadow-lg py-2" : "bg-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              <Link to="/" className="flex items-center gap-3">
                <img
                  className={`transition-all duration-500 ${scrolled ? "h-12" : "h-16"} w-auto`}
                  src="/logo.png"
                  alt="Logo"
                />
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className={`font-black text-sm uppercase tracking-[0.2em] transition-all hover:text-amber-500 relative group ${scrolled ? "text-secondary" : "text-white"}`}
                >
                  <T>{item.name}</T>
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                href="#contact"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-amber-500/20 hover:-translate-y-1 active:scale-95"
              >
                <T>Inquire</T>
              </motion.a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-2xl transition-colors ${scrolled ? "text-secondary hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
              >
                {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500 origin-left"
          style={{ scaleX }}
        />
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden bg-white pt-24 px-6"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  onClick={() => setIsOpen(false)}
                  href={item.href}
                  className="text-4xl font-black text-secondary hover:text-amber-500 uppercase tracking-tighter transition-colors"
                >
                  <T>{item.name}</T>
                </a>
              ))}
              <a
                onClick={() => setIsOpen(false)}
                href="#contact"
                className="bg-amber-500 text-white py-6 rounded-[2rem] font-black text-xl uppercase tracking-widest shadow-2xl"
              >
                <T>Inquire Now</T>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
