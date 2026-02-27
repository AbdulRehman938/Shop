import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { T, useTranslation } from "../context/TranslationContext";
import { useState, useEffect } from "react";

const Footer = () => {
  const { t, lang } = useTranslation();
  const [emailPlaceholder, setEmailPlaceholder] = useState("Your email");

  useEffect(() => {
    t("Your email").then(setEmailPlaceholder);
  }, [t]);

  return (
    <footer className="bg-secondary text-white pt-24 pb-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          <div className="space-y-8">
            <Link to="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-20 w-auto brightness-0 invert transition-transform hover:scale-105"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed text-lg text-start">
              <T>
                Al Rehman Trunk Store: Providing strength, style, and utility to
                Pakistani homes for over 30 years. Quality you can trust.
              </T>
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, color: "hover:bg-blue-600" },
                { icon: <FaInstagram />, color: "hover:bg-pink-600" },
                { icon: <FaWhatsapp />, color: "hover:bg-green-600" },
                { icon: <FaTwitter />, color: "hover:bg-sky-500" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center transition-all duration-300 group ${social.color}`}
                >
                  <span className="text-xl text-gray-400 group-hover:text-white transition-colors">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 text-amber-500 uppercase tracking-widest ps-4 border-s-4 border-amber-500">
              <T>Quick Links</T>
            </h4>
            <ul className="space-y-4 text-lg">
              {["Home", "Products", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={
                      item === "Home"
                        ? "#"
                        : `#${item.toLowerCase().replace(" ", "")}`
                    }
                    className="text-gray-400 hover:text-amber-500 transition-all flex items-center gap-2 group"
                  >
                    <HiArrowSmRight
                      className={`opacity-0 group-hover:opacity-100 transition-all -ms-4 group-hover:ms-0 ${lang === "ur" ? "rotate-180" : ""}`}
                    />
                    <T>{item}</T>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 text-amber-500 uppercase tracking-widest ps-4 border-s-4 border-amber-500">
              <T>Shop Hours</T>
            </h4>
            <ul className="space-y-4 text-gray-400 text-lg">
              <li className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="font-bold">
                  <T>Mon - Sat</T>
                </span>
                <span className="text-white">9:00 - 21:00</span>
              </li>
              <li className="flex justify-between items-center p-4">
                <span className="font-bold">
                  <T>Sunday</T>
                </span>
                <span className="text-red-400 px-3 py-1 bg-red-400/10 rounded-lg text-sm font-black">
                  <T>CLOSED</T>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 text-amber-500 uppercase tracking-widest ps-4 border-s-4 border-amber-500">
              <T>Newsletter</T>
            </h4>
            <p className="text-gray-400 mb-6 font-medium">
              <T>Get updates on new arrivals and seasonal offers.</T>
            </p>
            <form className="relative group">
              <input
                type="email"
                placeholder={emailPlaceholder}
                className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-4 px-6 focus:border-amber-500 transition-all outline-none pe-14"
              />
              <button className="absolute inset-e-2 top-2 bottom-2 aspect-square bg-amber-500 rounded-xl flex items-center justify-center hover:bg-amber-600 transition-all">
                <HiArrowSmRight className="text-2xl" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 font-bold uppercase tracking-widest text-xs">
          <p>
            © {new Date().getFullYear()}{" "}
            <T>Al Rehman Trunk Store. Excellence in Durability.</T>
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-amber-500 transition-colors">
              <T>Privacy Policy</T>
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              <T>Terms of Service</T>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
