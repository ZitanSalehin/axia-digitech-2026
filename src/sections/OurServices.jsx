import { ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

import socialMediaImg from "../assets/business-setup.webp";
import digitalMarketingImg from "../assets/digital.webp";
import graphicsDesignImg from "../assets/graphics.webp";
import webDevelopmentImg from "../assets/website-development.webp";

const OurServices = () => {
  const services = [
    {
      title: "Digital Marketing",
      description: "We help your brand reach the right audience.",
      image: digitalMarketingImg,
      link: "/services/digital-marketing",
    },
    {
      title: "Website Development",
      description: "Building responsive and high-performing websites.",
      image: webDevelopmentImg,
      link: "/services/website-development",
    },
    {
      title: "Graphics Design",
      description: "Creative and impactful visual design solutions.",
      image: graphicsDesignImg,
      link: "/services/graphics-design",
    },
    {
      title: "Social Media Management",
      description: "Manage your social media presence.",
      image: socialMediaImg,
      link: "/services/social-media-management",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-16 bg-slate-900 dark:bg-white transition-colors duration-300"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#FF6600]/20 to-[#4B0082]/20 dark:from-[#FF6600]/10 dark:to-[#FF6600]/5 border border-[#FF6600]/30 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-orange-600" fill="#FF6600" />
            <span className="text-sm text-gray-300 dark:text-[#FF6600] font-medium">
              Take Our Featured Services
            </span>
          </div>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 transition-all duration-1000">
            <span className="text-white dark:text-[#FF6600]">
              OUR FEATURED
              <br />
              <span className="bg-gradient-to-r from-[#FF6600] via-[#4B0082] to-[#4B0082] bg-clip-text text-transparent dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                SERVICES
              </span>
            </span>
          </h2>
          <p className="text-center text-xl text-gray-400 dark:text-slate-700 leading-relaxed">
            Explore our range of services that are designed to elevate your
            business.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                className="group relative w-full max-w-sm rounded-3xl overflow-hidden transition-transform duration-300 bg-slate-800/80 dark:bg-white backdrop-blur-xl"
                style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Top Ribbon */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#FF6600]/80 backdrop-blur-sm text-white text-xs rounded-full font-semibold tracking-wide">
                    Featured
                  </div>
                </div>

                {/* Content */}
                <div
                  className="relative p-6 bg-gradient-to-t from-slate-900/80 to-slate-800/60 dark:from-slate-50 dark:to-white backdrop-blur-md transition-shadow duration-300 rounded-b-3xl"
                  style={{ boxShadow: "0 0 15px rgba(0,0,0,0.1)" }}
                >
                  <h3 className="text-xl font-bold text-white dark:text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 dark:text-slate-600 text-sm mb-4">
                    {service.description}
                  </p>

                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-[#FF6600] hover:text-[#FF6600]/80 font-semibold group"
                  >
                    Learn More
                    <ChevronRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  {/* Decorative Glow */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#FF6600]/20 rounded-full blur-2xl pointer-events-none animate-pulse"></div>
                </div>

                {/* Hover Glow */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: "0 0 30px #FF6600",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurServices;
