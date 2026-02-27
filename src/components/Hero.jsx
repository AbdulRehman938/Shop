import { HiArrowSmDown, HiPlay } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="relative h-[100svh] min-h-[700px] flex items-center pt-20 overflow-hidden bg-secondary">
      {/* Background Image Placeholder with premium overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent z-10 transition-all duration-700"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary z-10"></div>
        <img
          src="https://placehold.co/1920x1080/451a03/white?text=Al+Rehman+Trunk+Store+Hero"
          alt="Hero Banner"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          loading="eager"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <span className="inline-block py-2 px-6 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-black text-sm uppercase tracking-[0.3em] mb-8 animate-fade-in">
            Est. 1994
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter animate-fade-in-up">
            Strength. <br />
            <span className="text-amber-500">Style.</span> <br />
            Utility.
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-medium text-gray-300 max-w-xl leading-relaxed animate-fade-in-up delay-100">
            Discover the perfect blend of durability and elegance for your home
            with Al Rehman Trunk Store's premium collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-200">
            <a
              href="#products"
              className="group bg-amber-500 hover:bg-amber-600 text-white font-black py-5 px-12 rounded-2xl transition-all duration-300 shadow-[0_20px_50px_-15px_rgba(245,158,11,0.4)] flex items-center justify-center gap-3 active:scale-95"
            >
              Explore Products
              <HiArrowSmDown className="text-2xl animate-bounce" />
            </a>
            <button className="group flex items-center gap-4 text-white font-black py-5 px-8 transition-all hover:text-amber-500">
              <span className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-white/20 group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all">
                <HiPlay className="text-2xl ml-1" />
              </span>
              Watch Story
            </button>
          </div>
        </div>
      </div>

      {/* Social proof or short stats */}
      <div className="absolute bottom-12 right-0 left-0 z-20 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-end gap-12 text-white/40 font-black uppercase tracking-[0.2em] text-xs">
          <span>Premium Materials</span>
          <span>Expert Craftsmanship</span>
          <span>Lifetime Support</span>
        </div>
      </div>

      {/* Decorative radial glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/20 blur-[150px] rounded-full z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full z-0 translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default Hero;
