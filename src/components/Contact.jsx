import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-black text-secondary mb-8">
                Visit Our Showroom
              </h3>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 bg-amber-100 p-4 rounded-2xl">
                    <HiLocationMarker className="h-7 w-7 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 text-lg uppercase tracking-tight">
                      Address
                    </h4>
                    <p className="text-gray-600 text-lg mt-1">
                      Main Bazaar, Near Clock Tower, Gujranwala, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 bg-green-100 p-4 rounded-2xl">
                    <FaWhatsapp className="h-7 w-7 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 text-lg uppercase tracking-tight">
                      WhatsApp & Phone
                    </h4>
                    <p className="text-gray-600 text-lg mt-1">
                      +92 300 1234567
                    </p>
                    <p className="text-gray-600 text-lg">+92 321 7654321</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 bg-blue-100 p-4 rounded-2xl">
                    <HiMail className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 text-lg uppercase tracking-tight">
                      Email
                    </h4>
                    <p className="text-gray-600 text-lg mt-1">
                      info@alrehmantrunk.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="group relative w-full h-80 rounded-[2.5rem] overflow-hidden bg-gray-100 border-4 border-gray-50 shadow-2xl transition-all hover:scale-[1.01]">
              <img
                src="https://placehold.co/800x600/e5e7eb/6b7280?text=Interactive+Location+Map"
                alt="Map Placeholder"
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <button className="bg-white text-secondary px-8 py-3 rounded-full font-black shadow-2xl">
                  Open in Google Maps
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-amber-50 p-8 sm:p-12 rounded-[3.5rem] shadow-[0_35px_80px_-15px_rgba(245,158,11,0.15)] border border-amber-100 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-200/20 rounded-full blur-3xl"></div>

            <h3 className="text-3xl font-black text-secondary mb-8 relative">
              Send an Inquiry
            </h3>
            <form className="space-y-6 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-700 uppercase tracking-widest pl-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-amber-400 focus:ring-0 shadow-sm transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-700 uppercase tracking-widest pl-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-amber-400 focus:ring-0 shadow-sm transition-all"
                    placeholder="+92 ..."
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black text-gray-700 uppercase tracking-widest pl-2">
                  Product of Interest
                </label>
                <select className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-amber-400 focus:ring-0 shadow-sm transition-all appearance-none cursor-pointer">
                  <option>Select a category</option>
                  <option>Metal Trunks</option>
                  <option>Furniture Set</option>
                  <option>Fans & Coolers</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black text-gray-700 uppercase tracking-widest pl-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-amber-400 focus:ring-0 shadow-sm transition-all resize-none"
                  placeholder="Tell us what you're looking for..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-black transition-all transform hover:-translate-y-1 active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
