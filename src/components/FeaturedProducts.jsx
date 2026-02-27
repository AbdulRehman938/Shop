import { motion } from "framer-motion";
import { HiOutlineHeart, HiHeart, HiArrowSmRight } from "react-icons/hi";
import { useState } from "react";
import { T } from "../context/TranslationContext";

const featuredProducts = [
  {
    id: 1,
    name: "Classic Metal Trunk",
    price: "PKR 4,500",
    image: "https://placehold.co/400x400/f59e0b/white?text=Metal+Trunk",
  },
  {
    id: 2,
    name: "King Size Metal Bed",
    price: "PKR 25,000",
    image: "https://placehold.co/400x400/1f2937/white?text=Metal+Bed",
  },
  {
    id: 3,
    name: "3-Door Steel Almari",
    price: "PKR 35,000",
    image: "https://placehold.co/400x400/f59e0b/white?text=Steel+Almari",
  },
  {
    id: 4,
    name: "Super Air Cooler",
    price: "PKR 12,000",
    image: "https://placehold.co/400x400/1f2937/white?text=Air+Cooler",
  },
  {
    id: 5,
    name: "Luxury Sofa Set",
    price: "PKR 45,000",
    image: "https://placehold.co/400x400/f59e0b/white?text=Sofa+Set",
  },
  {
    id: 6,
    name: "Heavy Duty Charpai",
    price: "PKR 6,500",
    image: "https://placehold.co/400x400/1f2937/white?text=Charpai",
  },
];

const FeaturedProducts = () => {
  const [wishlist, setWishlist] = useState({});
  const toggleWishlist = (id) =>
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-amber-500 font-black uppercase tracking-widest text-sm">
              <T>Best Sellers</T>
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2">
              <T>Featured Products</T>
            </h2>
          </motion.div>
          <motion.button
            whileHover={{ x: 10 }}
            className="flex items-center gap-2 text-amber-600 font-bold hover:gap-3 transition-all whitespace-nowrap"
          >
            <T>View All Products</T> <HiArrowSmRight className="text-xl" />
          </motion.button>
        </div>

        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex overflow-x-auto gap-6 sm:gap-8 pb-12 hide-scrollbar snap-x"
          >
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                className="flex-none w-[280px] sm:w-72 snap-start group/card"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50 mb-6 group-hover/card:shadow-2xl transition-all duration-500 border border-gray-100">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  <div className="absolute inset-x-4 bottom-4 z-10">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3.5 bg-secondary text-white rounded-2xl font-black text-sm uppercase tracking-wider shadow-xl hover:bg-black transition-colors opacity-0 group-hover/card:opacity-100 translate-y-4 group-hover/card:translate-y-0 duration-300"
                    >
                      <T>Quick View</T>
                    </motion.button>
                  </div>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-4 right-4 h-11 w-11 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg"
                  >
                    {wishlist[product.id] ? (
                      <HiHeart className="h-6 w-6 text-red-500" />
                    ) : (
                      <HiOutlineHeart className="h-6 w-6 text-gray-500" />
                    )}
                  </button>
                </div>

                <h3 className="text-xl font-bold text-secondary mb-2 group-hover/card:text-amber-500 transition-colors uppercase tracking-tight truncate">
                  <T>{product.name}</T>
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-amber-600 font-black text-xl">
                    <T>{product.price}</T>
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
