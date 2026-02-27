import { motion } from "framer-motion";
import { HiCheckBadge, HiShieldCheck, HiTruck } from "react-icons/hi2";
import { T, useTranslation } from "../context/TranslationContext";

const AboutUs = () => {
  const { lang } = useTranslation();

  return (
    <section
      id="about"
      className="py-24 bg-secondary text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: lang === "ur" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <span className="text-amber-500 font-black tracking-[0.4em] uppercase text-xs mb-4 block">
                <T>Trust & Heritage</T>
              </span>
              <h2 className="text-5xl md:text-7xl font-black leading-[1] tracking-tighter">
                <T>Crafting</T>{" "}
                <span className="text-amber-500">
                  <T>Excellence</T>
                </span>{" "}
                <T>Since 1994</T>
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-xl leading-relaxed font-medium italic border-s-4 border-amber-500/30 ps-8"
            >
              <T>
                "Our trunks don't just hold belongings; they safeguard
                generations of stories. Our furniture isn't just wood and metal;
                it's the foundation of your home."
              </T>
            </motion.p>

            <div className="space-y-8">
              {[
                {
                  icon: <HiShieldCheck className="text-4xl text-amber-500" />,
                  title: "Unyielding Durability",
                  desc: "High-grade metals and seasoned woods for longevity.",
                },
                {
                  icon: <HiCheckBadge className="text-4xl text-amber-500" />,
                  title: "Premium Finish",
                  desc: "Meticulous attention to detail in every weld and polish.",
                },
                {
                  icon: <HiTruck className="text-4xl text-amber-500" />,
                  title: "Nationwide Delivery",
                  desc: "Safe and secure shipping to your doorstep.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * idx }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-500/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2 uppercase tracking-wide">
                      <T>{item.title}</T>
                    </h4>
                    <p className="text-gray-400 leading-relaxed font-medium">
                      <T>{item.desc}</T>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: lang === "ur" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group lg:ps-10"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border-8 border-white/5 relative z-10 shadow-2xl">
              <img
                src="https://placehold.co/800x1000/374151/white?text=Artisan+at+Work"
                alt="Al Rehman Artisan"
                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0"
                loading="lazy"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-12 left-12 right-12 bg-amber-500 p-8 rounded-[2.5rem] shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-secondary font-black text-5xl">100%</p>
                    <p className="text-secondary/80 font-bold uppercase tracking-widest text-sm mt-1">
                      <T>Satisfaction</T>
                    </p>
                  </div>
                  <HiShieldCheck className="text-4xl text-secondary" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
