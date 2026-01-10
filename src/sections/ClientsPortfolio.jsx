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
      logo: "TC",
      industry: "Technology",
      service: "Digital Marketing",
      color: "from-blue-500 to-blue-600",
      result: "+250% Growth",
    },
    {
      name: "BCL INTERNET",
      logo: "GL",
      industry: "E-commerce",
      service: "Brand Strategy",
      color: "from-green-500 to-green-600",
      result: "5M+ Reach",
    },
    {
      name: "FinanceHub Pro",
      logo: "FH",
      industry: "Finance",
      service: "Web Development",
      color: "from-indigo-500 to-indigo-600",
      result: "98% Satisfaction",
    },
    {
      name: "HealthPlus Medical",
      logo: "HP",
      industry: "Healthcare",
      service: "SEO Optimization",
      color: "from-red-500 to-red-600",
      result: "+180% Traffic",
    },
    {
      name: "EduTech Academy",
      logo: "EA",
      industry: "Education",
      service: "Social Media",
      color: "from-purple-500 to-purple-600",
      result: "50K+ Students",
    },
    {
      name: "Fashion Forward",
      logo: "FF",
      industry: "Fashion",
      service: "E-commerce",
      color: "from-pink-500 to-pink-600",
      result: "$2M Revenue",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600/20 to-purple-800/20 border border-orange-600/30 rounded-full mb-6">
            <Star className="w-4 h-4 text-orange-500" fill="#FF6600" />
            <span className="text-sm text-gray-300">
              Trusted by Industry Leaders
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
              Valued Clients
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We partner with innovative companies to deliver real, measurable
            business growth.
          </p>
        </div>

        {/* Swiper */}
        <div className="relative">
          {/* Custom Navigation */}
          <button className="clients-prev hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-600 to-purple-800">
            <ChevronLeft className="text-white" />
          </button>

          <button className="clients-next hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-800 to-orange-600">
            <ChevronRight className="text-white" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            navigation={{
              prevEl: ".clients-prev",
              nextEl: ".clients-next",
            }}
            pagination={{
              clickable: true,
            }}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {clients.map((client, idx) => (
              <SwiperSlide key={idx}>
                <div className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-purple-800 rounded-2xl blur opacity-0 group-hover:opacity-30 transition" />

                  <div className="relative p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-purple-800/30 hover:border-orange-600/50 transition h-full">
                    <div className="flex justify-center mb-6">
                      <div
                        className={`w-20 h-20 rounded-full bg-gradient-to-br ${client.color} flex items-center justify-center shadow-xl`}
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
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-400 border border-white/10">
                        {client.industry}
                      </span>
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Building2 className="w-4 h-4 text-orange-500" />
                      <p className="text-sm text-gray-300">{client.service}</p>
                    </div>

                    <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-orange-600/20 to-purple-800/20 rounded-xl border border-orange-600/30">
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
