import { motion } from "framer-motion";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { T, useTranslation } from "../context/TranslationContext";
import { useState, useEffect } from "react";

const Contact = () => {
  const { t } = useTranslation();
  const [placeholders, setPlaceholders] = useState({
    name: "Your Name",
    phone: "Phone Number",
    message: "Message",
    select: "Select Category",
    metalTrunks: "Metal Trunks",
    furnitureSet: "Furniture Set",
  });

  useEffect(() => {
    t("Your Name").then((val) => setPlaceholders((p) => ({ ...p, name: val })));
    t("Phone Number").then((val) =>
      setPlaceholders((p) => ({ ...p, phone: val })),
    );
    t("Message").then((val) =>
      setPlaceholders((p) => ({ ...p, message: val })),
    );
    t("Select Category").then((val) =>
      setPlaceholders((p) => ({ ...p, select: val })),
    );
    t("Metal Trunks").then((val) =>
      setPlaceholders((p) => ({ ...p, metalTrunks: val })),
    );
    t("Furniture Set").then((val) =>
      setPlaceholders((p) => ({ ...p, furnitureSet: val })),
    );
  }, [t]);

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          <T>Get In Touch</T>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl font-black text-secondary mb-8">
                <T>Visit Our Showroom</T>
              </h3>
              <div className="space-y-8">
                {[
                  {
                    icon: <HiLocationMarker />,
                    title: "Address",
                    content:
                      "Main Bazaar, Near Clock Tower, Gujranwala, Pakistan",
                    color: "bg-amber-100 text-amber-600",
                  },
                  {
                    icon: <FaWhatsapp />,
                    title: "WhatsApp & Phone",
                    content: "+92 300 1234567",
                    color: "bg-green-100 text-green-600",
                  },
                  {
                    icon: <HiMail />,
                    title: "Email",
                    content: "info@alrehmantrunk.com",
                    color: "bg-blue-100 text-blue-600",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-5 cursor-default"
                  >
                    <div
                      className={`flex-shrink-0 p-4 rounded-2xl ${item.color} text-2xl`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 text-lg uppercase tracking-tight">
                        <T>{item.title}</T>
                      </h4>
                      <p className="text-gray-600 text-lg mt-1">
                        <T>{item.content}</T>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-amber-50 p-8 sm:p-12 rounded-[3.5rem] shadow-2xl border border-amber-100 relative overflow-hidden"
          >
            <h3 className="text-3xl font-black text-secondary mb-8">
              <T>Send an Inquiry</T>
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-amber-400 focus:ring-0 shadow-sm transition-all"
                  placeholder={placeholders.name}
                />
                <input
                  type="text"
                  className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-amber-400 focus:ring-0 shadow-sm transition-all"
                  placeholder={placeholders.phone}
                />
              </div>
              <select className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-amber-400 focus:ring-0 shadow-sm transition-all appearance-none">
                <option value="">{placeholders.select}</option>
                <option value="metal">{placeholders.metalTrunks}</option>
                <option value="furniture">{placeholders.furnitureSet}</option>
              </select>
              <textarea
                rows="4"
                className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-amber-400 focus:ring-0 shadow-sm transition-all resize-none"
                placeholder={placeholders.message}
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-secondary text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-black transition-all"
              >
                <T>Send Message</T>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
