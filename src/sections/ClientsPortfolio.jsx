import {
  Building2,
  ChevronLeft,
  ChevronRight,
  Star,
  TrendingUp,
} from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ClientsPortfolio() {
  const clients = [
    {
      name: "ZERON GROUP",
      logo: "ZG",
      industry: "Technology",
      service: "Digital Marketing",
      color: "from-[#FF6600] to-[#FF8840]",
      result: "+250% Growth",
    },
    {
      name: "BCL INTERNET",
      logo: "BI",
      industry: "E-commerce",
      service: "Brand Strategy",
      color: "from-[#4B0082] to-[#6A1BB1]",
      result: "5M+ Reach",
    },
    {
      name: "FinanceHub Pro",
      logo: "FH",
      industry: "Finance",
      service: "Web Development",
      color: "from-[#FF6600] to-[#4B0082]",
      result: "98% Satisfaction",
    },
    {
      name: "HealthPlus Medical",
      logo: "HP",
      industry: "Healthcare",
      service: "SEO Optimization",
      color: "from-[#4B0082] to-[#FF6600]",
      result: "+180% Traffic",
    },
    {
      name: "EduTech Academy",
      logo: "EA",
      industry: "Education",
      service: "Social Media",
      color: "from-[#FF6600] to-[#4B0082]",
      result: "50K+ Students",
    },
    {
      name: "Fashion Forward",
      logo: "FF",
      industry: "Fashion",
      service: "E-commerce",
      color: "from-[#4B0082] to-[#FF6600]",
      result: "$2M Revenue",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#FF6600] rounded-full blur-3xl opacity-10 top-1/3 -left-20" />
        <div className="absolute w-96 h-96 bg-[#4B0082] rounded-full blur-3xl opacity-10 bottom-1/3 -right-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF6600]/20 to-[#4B0082]/20 border border-[#FF6600]/30 rounded-full mb-6">
            <Star className="w-4 h-4 text-[#FF6600]" />
            <span className="text-sm text-white/80">
              Trusted by Industry Leaders
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
            <span className="">Our </span>
            <span className="bg-gradient-to-r from-[#FF6600] to-[#4B0082] bg-clip-text text-transparent">
              Valued Clients
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            We partner with ambitious brands to deliver measurable growth and
            long-term impact.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Navigation */}
          <button className="clients-prev hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6600] to-[#4B0082]">
            <ChevronLeft className="text-white" />
          </button>

          <button className="clients-next hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-gradient-to-br from-[#4B0082] to-[#FF6600]">
            <ChevronRight className="text-white" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            navigation={{
              prevEl: ".clients-prev",
              nextEl: ".clients-next",
            }}
            pagination={{ clickable: true }}
            spaceBetween={28}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {clients.map((client, idx) => (
              <SwiperSlide key={idx}>
                <div className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6600] to-[#4B0082] rounded-3xl blur opacity-0 group-hover:opacity-30 transition" />

                  <div className="relative h-full p-8 bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-3xl border border-purple-700/20 hover:border-[#FF6600]/50 transition">
                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                      <div
                        className={`w-20 h-20 rounded-full bg-gradient-to-br ${client.color} flex items-center justify-center`}
                      >
                        <span className="text-2xl font-bold text-white">
                          {client.logo}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white text-center mb-2">
                      {client.name}
                    </h3>

                    <div className="flex justify-center mb-4">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/10">
                        {client.industry}
                      </span>
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-5">
                      <Building2 className="w-4 h-4 text-[#FF6600]" />
                      <p className="text-sm text-gray-300">{client.service}</p>
                    </div>

                    <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[#FF6600]/20 to-[#4B0082]/20 rounded-xl border border-[#FF6600]/30">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm font-semibold text-white">
                        {client.result}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
