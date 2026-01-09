import { Quote, Sparkles, Star } from "lucide-react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    name: "Tanvir Ahmed",
    role: "CEO, StartupX",
    text: "AXIA DIGITECH transformed our online presence completely. Exceptional strategy and execution.",
  },
  {
    name: "Farhana Rahman",
    role: "Marketing Head, Brandly",
    text: "Their team understands growth deeply. Results were visible within weeks.",
  },
  {
    name: "Imran Khan",
    role: "Founder, TechNova",
    text: "Professional, creative, and extremely reliable. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-800/20 blur-3xl rounded-full top-0 left-1/2 -translate-x-1/2 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600/20 to-purple-800/20 border border-orange-600/30 rounded-full backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-300">Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            What Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600">
              Clients Say
            </span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3500 }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="h-full p-8 bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-2xl border border-purple-800/30 hover:border-orange-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-900/30">
                <Quote className="w-8 h-8 text-orange-500 mb-4" />
                <p className="text-gray-300 leading-relaxed mb-6">{t.text}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold">{t.name}</h4>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-orange-500 fill-orange-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
