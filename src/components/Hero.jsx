import { motion } from "framer-motion";
import { HiArrowSmDown, HiPlay } from "react-icons/hi";
import { T, useTranslation } from "../context/TranslationContext";

const Hero = () => {
  const { lang } = useTranslation();

  return (
    <section className="relative h-[100svh] min-h-[700px] flex items-center pt-20 overflow-hidden bg-secondary">
      {/* Background Image Placeholder with premium overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-${lang === "ur" ? "l" : "r"} from-secondary via-secondary/80 to-transparent z-10`}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary z-10"></div>
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          src="https://placehold.co/1920x1080/451a03/white?text=Al+Rehman+Trunk+Store+Hero"
          alt="Hero Banner"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block py-2 px-6 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-black text-sm uppercase tracking-[0.3em] mb-8"
          >
            <T>Est. 1994</T>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter"
          >
            <T>Strength.</T> <br />
            <span className="text-amber-500">
              <T>Style.</T>
            </span>{" "}
            <br />
            <T>Utility.</T>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-12 font-medium text-gray-300 max-w-xl leading-relaxed"
          >
            <T>
              Discover the perfect blend of durability and elegance for your
              home with Al Rehman Trunk Store's premium collection.
            </T>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a
              href="#products"
              className="group bg-amber-500 hover:bg-amber-600 text-white font-black py-5 px-12 rounded-2xl transition-all duration-300 shadow-[0_20px_50px_-15px_rgba(245,158,11,0.4)] flex items-center justify-center gap-3 active:scale-95"
            >
              <T>Explore Products</T>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <HiArrowSmDown className="text-2xl" />
              </motion.div>
            </a>
            <button className="group flex items-center gap-4 text-white font-black py-5 px-8 transition-all hover:text-amber-500">
              <span className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-white/20 group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all">
                <HiPlay className="text-2xl ms-1" />
              </span>
              <T>Watch Story</T>
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-12 right-0 left-0 z-20 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-end gap-12 text-white/40 font-black uppercase tracking-[0.2em] text-xs">
          <span>
            <T>Premium Materials</T>
          </span>
          <span>
            <T>Expert Craftsmanship</T>
          </span>
          <span>
            <T>Lifetime Support</T>
          </span>
        </div>
      </div>

      {/* Decorative radial glows */}
      <div
        className={`absolute -top-40 ${lang === "ur" ? "-right-40" : "-left-40"} w-96 h-96 bg-amber-500/20 blur-[150px] rounded-full z-0`}
      ></div>
      <div
        className={`absolute bottom-0 ${lang === "ur" ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"} w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full z-0 translate-y-1/2`}
      ></div>
    </section>
  );
};

export default Hero;
