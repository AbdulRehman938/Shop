import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                className="h-14 md:h-16 w-auto"
                src="/logo.png"
                alt="Al Rehman Trunk Store Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <Link
              to="/"
              className="text-secondary hover:text-amber-500 font-bold transition-all duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a
              href="#products"
              className="text-secondary hover:text-amber-500 font-bold transition-all duration-300 relative group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="text-secondary hover:text-amber-500 font-bold transition-all duration-300 relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-secondary hover:text-amber-500 font-bold transition-all duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Social Icons or CTA could go here */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-amber-500/30"
            >
              Inquire Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-secondary hover:text-amber-500 hover:bg-amber-50 focus:outline-none transition-all"
            >
              {isOpen ? (
                <HiX className="h-8 w-8" />
              ) : (
                <HiMenu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white border-t border-gray-100 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 text-center bg-white shadow-xl">
          <Link
            onClick={() => setIsOpen(false)}
            to="/"
            className="block px-3 py-4 text-secondary hover:bg-amber-50 hover:text-amber-500 font-bold rounded-xl transition-all"
          >
            Home
          </Link>
          <a
            onClick={() => setIsOpen(false)}
            href="#products"
            className="block px-3 py-4 text-secondary hover:bg-amber-50 hover:text-amber-500 font-bold rounded-xl transition-all"
          >
            Products
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#about"
            className="block px-3 py-4 text-secondary hover:bg-amber-50 hover:text-amber-500 font-bold rounded-xl transition-all"
          >
            About Us
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#contact"
            className="block px-3 py-4 text-secondary hover:bg-amber-50 hover:text-amber-500 font-bold rounded-xl transition-all"
          >
            Contact
          </a>
          <div className="pt-4">
            <a
              onClick={() => setIsOpen(false)}
              href="#contact"
              className="inline-block w-full bg-amber-500 text-white py-4 rounded-xl font-bold shadow-lg"
            >
              Inquire Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
