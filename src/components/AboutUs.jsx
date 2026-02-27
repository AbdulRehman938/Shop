import { HiCheckBadge, HiShieldCheck, HiTruck } from "react-icons/hi2";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-24 bg-secondary text-white relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div>
              <span className="text-amber-500 font-black tracking-[0.4em] uppercase text-xs mb-4 block">
                Trust & Heritage
              </span>
              <h2 className="text-5xl md:text-7xl font-black leading-[1] tracking-tighter">
                Crafting <span className="text-amber-500">Excellence</span>{" "}
                Since 1994
              </h2>
            </div>

            <p className="text-gray-400 text-xl leading-relaxed font-medium italic border-l-4 border-amber-500/30 pl-8">
              "Our trunks don't just hold belongings; they safeguard generations
              of stories. Our furniture isn't just wood and metal; it's the
              foundation of your home."
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: <HiShieldCheck className="text-4xl text-amber-500" />,
                  title: "Unyielding Durability",
                  desc: "We use high-grade metals and seasoned woods to ensure every product lasts for decades.",
                },
                {
                  icon: <HiCheckBadge className="text-4xl text-amber-500" />,
                  title: "Premium Finish",
                  desc: "Meticulous attention to detail in every weld, stitch, and polish for a truly royal look.",
                },
                {
                  icon: <HiTruck className="text-4xl text-amber-500" />,
                  title: "Nationwide Delivery",
                  desc: "Safe and secure shipping of our heavy-duty essentials straight to your doorstep.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-amber-500/10 group-hover:border-amber-500/50">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2 uppercase tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group lg:pl-10">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border-8 border-white/5 relative z-10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                src="https://placehold.co/800x1000/374151/white?text=Artisan+at+Work"
                alt="Al Rehman Artisan"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>

              {/* Floating Stat */}
              <div className="absolute bottom-12 left-12 right-12 bg-amber-500 p-8 rounded-[2.5rem] shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-secondary font-black text-5xl">100%</p>
                    <p className="text-secondary/80 font-bold uppercase tracking-widest text-sm mt-1">
                      Satisfaction
                    </p>
                  </div>
                  <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center">
                    <HiShieldCheck className="text-3xl text-secondary" />
                  </div>
                </div>
              </div>
            </div>
            {/* Background geometric accents */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-500 blur-[80px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="absolute top-20 -left-10 w-40 h-40 border-2 border-amber-500/20 rounded-full z-0 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
