import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bcl from "../assets/bcl.png";
import dtl from "../assets/dtl.png";
import lifewave from "../assets/lifewave.png";
import netsoft from "../assets/netsoft.png";
import tripology from "../assets/tripology.png";
import zeron from "../assets/zeron.png";

export default function ClientsPortfolio() {
  const clients = [
    {
      name: "Dhumketu Tech Limited",
      logo: dtl,
      color: "from-purple-700 to-purple-600",
    },
    {
      name: "Netsoft Solution Limited",
      logo: netsoft,
      color: "from-orange-500 to-purple-700",
    },
    {
      name: "Tripology ltd.",
      logo: tripology,
      color: "from-purple-600 to-orange-600",
    },
    {
      name: "Zeron Group",
      logo: zeron,
      color: "from-orange-600 to-orange-500",
    },
    {
      name: "Lifewave Limited",
      logo: lifewave,
      color: "from-orange-600 to-orange-500",
    },
    {
      name: "BCL Internet",
      logo: bcl,
      color: "from-orange-600 to-orange-500",
    },
    {
      name: "Dhumketu Tech Limited",
      logo: dtl,
      color: "from-purple-700 to-purple-600",
    },
    {
      name: "Netsoft Solution Limited",
      logo: netsoft,
      color: "from-orange-500 to-purple-700",
    },
    {
      name: "Tripology ltd.",
      logo: tripology,
      color: "from-purple-600 to-orange-600",
    },
    {
      name: "Zeron Group",
      logo: zeron,
      color: "from-orange-600 to-orange-500",
    },
    {
      name: "Lifewave Limited",
      logo: lifewave,
      color: "from-orange-600 to-orange-500",
    },
    {
      name: "BCL Internet",
      logo: bcl,
      color: "from-orange-600 to-orange-500",
    },
  ];

  return (
    <section id="clients" className="relative overflow-hidden pt-10">
      {/* Glow */}

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center">
          <div
            className="inline-flex items-center space-x-2 px-4 py-2
            bg-gradient-to-r from-[#FF6600]/20 to-[#4B0082]/20
            dark:from-[#FF6600]/10 dark:to-[#FF6600]/5
            border border-[#FF6600]/30 rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#FF6600]" fill="#FF6600" />
            <span className="text-md text-white dark:text-[#FF6600] font-medium">
              Next-Gen Digital Agency
            </span>
          </div>
          <div className="flex justify-center gap-2">
            <h2 className="text-2xl sm:text-5xl font-extrabold text-[#FF6600]">
              Service Taken From
            </h2>
            <h2 className="text-2xl sm:text-5xl font-extrabold text-slate-700">
              Axia Digitech
            </h2>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Navigation */}
          <button className="clients-prev hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-600 to-purple-700">
            <ChevronLeft className="text-white" />
          </button>

          <button className="clients-next hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-700 to-orange-600">
            <ChevronRight className="text-white" />
          </button>

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            spaceBetween={28}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {clients.map((client, idx) => (
              <SwiperSlide key={idx}>
                <div className="group relative h-full">
                  <div
                    className="relative h-full px-10 py-10
                    
                    flex flex-col items-center justify-center text-center"
                  >
                    {/* Logo */}
                    <div
                      className={`w-24 h-24 rounded-2xl ${client.color}
                      flex items-center justify-center mb-5`}
                    >
                      <img src={client.logo} alt="" srcset="" />
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-bold text-slate-800">
                      {client.name}
                    </h3>
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
