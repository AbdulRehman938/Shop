import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { T } from "../context/TranslationContext";

const categories = [
  {
    name: "Metal Trunks & Storage",
    description:
      "Durable metal trunks, bakse, drummi, and trunk frames for all your storage needs.",
    image: "https://placehold.co/600x400/1f2937/white?text=Metal+Trunks",
  },
  {
    name: "Furniture Sets",
    description:
      "Premium beds, side tables, mattresses, dressing tables, almari, sofas, and more.",
    image: "https://placehold.co/600x400/1f2937/white?text=Furniture+Sets",
  },
  {
    name: "Fans & Air Coolers",
    description:
      "Stay cool with our ceiling fans, table fans, and high-performance air coolers.",
    image: "https://placehold.co/600x400/1f2937/white?text=Fans+and+Coolers",
  },
  {
    name: "Dolliyan & Charpai",
    description:
      "Traditional Dolliyan and sturdy charpai available in wood and metal.",
    image:
      "https://placehold.co/600x400/1f2937/white?text=Dolliyan+and+Charpai",
  },
  {
    name: "Other Home Essentials",
    description:
      "Tables, istri tables, and various household items for everyday utility.",
    image: "https://placehold.co/600x400/1f2937/white?text=Home+Essentials",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ProductCategories = () => {
  return (
    <section id="products" className="py-24 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <T>Product Categories</T>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="premium-card group bg-white border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold flex items-center gap-2">
                    <T>View Collection</T> <HiArrowRight />
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-black text-secondary mb-3 group-hover:text-amber-500 transition-colors uppercase">
                  <T>{category.name}</T>
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  <T>{category.description}</T>
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-amber-600 font-bold flex items-center gap-2 uppercase tracking-widest text-sm group-hover:text-amber-700"
                >
                  <T>Shop Now</T>
                  <HiArrowRight className="text-xl" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
