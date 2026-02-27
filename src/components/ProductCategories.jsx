import { HiArrowRight } from "react-icons/hi";

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

const ProductCategories = () => {
  return (
    <section id="products" className="py-24 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Product Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className="premium-card group bg-white border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold flex items-center gap-2">
                    View Collection <HiArrowRight />
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-black text-secondary mb-3 group-hover:text-amber-500 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {category.description}
                </p>
                <button className="text-amber-600 font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm group-hover:text-amber-700">
                  Shop Now
                  <HiArrowRight className="text-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
