import { HiOutlineHeart, HiHeart, HiArrowSmRight } from "react-icons/hi";
import { useState } from "react";

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

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-amber-500 font-black uppercase tracking-widest text-sm">
              Best Sellers
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2">
              Featured Products
            </h2>
          </div>
          <button className="flex items-center gap-2 text-amber-600 font-bold hover:gap-3 transition-all whitespace-nowrap">
            View All Products <HiArrowSmRight className="text-xl" />
          </button>
        </div>

        <div className="relative group">
          <div className="flex overflow-x-auto gap-6 sm:gap-8 pb-12 hide-scrollbar snap-x">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="flex-none w-[280px] sm:w-72 snap-start group/card"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50 mb-6 group-hover/card:shadow-2xl transition-all duration-500 border border-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/card:opacity-100 transition-opacity"></div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-4 right-4 h-11 w-11 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 hover:bg-white"
                  >
                    {wishlist[product.id] ? (
                      <HiHeart className="h-6 w-6 text-red-500 scale-110" />
                    ) : (
                      <HiOutlineHeart className="h-6 w-6 text-gray-500 hover:text-red-500" />
                    )}
                  </button>

                  <div className="absolute inset-x-4 bottom-4 translate-y-10 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500">
                    <button className="w-full py-3.5 bg-secondary text-white rounded-2xl font-black text-sm uppercase tracking-wider shadow-xl hover:bg-black transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-secondary mb-2 group-hover/card:text-amber-500 transition-colors uppercase tracking-tight truncate">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-amber-600 font-black text-xl">
                    {product.price}
                  </p>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nav buttons for desktop (visual only for now) */}
          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-6 -right-6 justify-between pointer-events-none">
            <div className="h-12 w-12 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-auto cursor-pointer border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity rotate-180">
              <HiArrowSmRight className="text-xl" />
            </div>
            <div className="h-12 w-12 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-auto cursor-pointer border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
              <HiArrowSmRight className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
