import {
  Building2,
  ChevronLeft,
  ChevronRight,
  Star,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function ClientsPortfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Client companies data
  const clients = [
    {
      name: "TechCorp Solutions",
      logo: "TC",
      industry: "Technology",
      service: "Digital Marketing",
      color: "from-blue-500 to-blue-600",
      result: "+250% Growth",
    },
    {
      name: "GreenLeaf Organics",
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
    {
      name: "BuildRight Construction",
      logo: "BR",
      industry: "Construction",
      service: "Lead Generation",
      color: "from-orange-500 to-orange-600",
      result: "300+ Leads",
    },
    {
      name: "FoodieDelight",
      logo: "FD",
      industry: "Food & Beverage",
      service: "Brand Design",
      color: "from-yellow-500 to-yellow-600",
      result: "10 Locations",
    },
    {
      name: "AutoDrive Motors",
      logo: "AD",
      industry: "Automotive",
      service: "PPC Campaigns",
      color: "from-gray-600 to-gray-700",
      result: "+400% ROI",
    },
  ];

  const itemsPerView = 3;
  const maxSlide = Math.ceil(clients.length / itemsPerView) - 1;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900 py-20 md:py-32">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-10 -top-48 right-0 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-purple-800 rounded-full blur-3xl opacity-10 bottom-0 -left-48 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-600/20 to-purple-800/20 border border-orange-600/30 rounded-full backdrop-blur-sm mb-6">
            <Star className="w-4 h-4 text-orange-600" fill="#FF6600" />
            <span className="text-sm text-gray-300 font-medium">
              Trusted by Industry Leaders
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
              Valued Clients
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're proud to partner with innovative companies across diverse
            industries, delivering exceptional results that drive real business
            growth.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-4 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-xl border border-purple-800/30 text-center">
            <div className="text-3xl font-bold text-orange-500 mb-1">500+</div>
            <div className="text-xs text-gray-400">Projects Completed</div>
          </div>
          <div className="p-4 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-xl border border-purple-800/30 text-center">
            <div className="text-3xl font-bold text-purple-500 mb-1">200+</div>
            <div className="text-xs text-gray-400">Happy Clients</div>
          </div>
          <div className="p-4 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-xl border border-purple-800/30 text-center">
            <div className="text-3xl font-bold text-orange-500 mb-1">15+</div>
            <div className="text-xs text-gray-400">Industries Served</div>
          </div>
          <div className="p-4 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-xl border border-purple-800/30 text-center">
            <div className="text-3xl font-bold text-purple-500 mb-1">98%</div>
            <div className="text-xs text-gray-400">Client Retention</div>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 w-12 h-12 items-center justify-center bg-gradient-to-br from-orange-600 to-purple-800 rounded-full hover:scale-110 hover:shadow-2xl hover:shadow-orange-600/50 transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 w-12 h-12 items-center justify-center bg-gradient-to-br from-purple-800 to-orange-600 rounded-full hover:scale-110 hover:shadow-2xl hover:shadow-purple-600/50 transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Slider Track - Desktop (3 items) */}
          <div className="hidden lg:block overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-8"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / itemsPerView)
                }%)`,
              }}
            >
              {clients.map((client, idx) => (
                <div
                  key={idx}
                  className="min-w-[calc(33.333%-1.333rem)] flex-shrink-0"
                >
                  <div className="group relative h-full">
                    {/* Glowing Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-purple-800 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                    {/* Card */}
                    <div className="relative p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-purple-800/30 hover:border-orange-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900/30 h-full">
                      {/* Logo Circle */}
                      <div className="flex justify-center mb-6">
                        <div
                          className={`w-20 h-20 bg-gradient-to-br ${client.color} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                        >
                          <span className="text-2xl font-bold text-white">
                            {client.logo}
                          </span>
                        </div>
                      </div>

                      {/* Company Name */}
                      <h3 className="text-xl font-bold text-white text-center mb-2">
                        {client.name}
                      </h3>

                      {/* Industry Tag */}
                      <div className="flex justify-center mb-4">
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-400 border border-white/10">
                          {client.industry}
                        </span>
                      </div>

                      {/* Service */}
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Building2 className="w-4 h-4 text-orange-500" />
                        <p className="text-sm text-gray-300">
                          {client.service}
                        </p>
                      </div>

                      {/* Result Badge */}
                      <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-orange-600/20 to-purple-800/20 rounded-xl border border-orange-600/30">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-semibold text-white">
                          {client.result}
                        </span>
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute top-3 right-3 w-2 h-2 bg-orange-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Track - Tablet (2 items) */}
          <div className="hidden md:block lg:hidden overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentSlide * 50}%)` }}
            >
              {clients.map((client, idx) => (
                <div
                  key={idx}
                  className="min-w-[calc(50%-0.75rem)] flex-shrink-0"
                >
                  <div className="group relative h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-purple-800 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                    <div className="relative p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-purple-800/30 hover:border-orange-600/50 transition-all duration-500 h-full">
                      <div className="flex justify-center mb-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${client.color} rounded-full flex items-center justify-center shadow-xl`}
                        >
                          <span className="text-xl font-bold text-white">
                            {client.logo}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white text-center mb-2">
                        {client.name}
                      </h3>

                      <div className="flex justify-center mb-3">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-400 border border-white/10">
                          {client.industry}
                        </span>
                      </div>

                      <div className="flex items-center justify-center gap-2 mb-3">
                        <Building2 className="w-4 h-4 text-orange-500" />
                        <p className="text-sm text-gray-300">
                          {client.service}
                        </p>
                      </div>

                      <div className="flex items-center justify-center gap-2 p-2 bg-gradient-to-r from-orange-600/20 to-purple-800/20 rounded-xl border border-orange-600/30">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-xs font-semibold text-white">
                          {client.result}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Grid (No Slider) */}
          <div className="md:hidden grid grid-cols-1 gap-6">
            {clients.map((client, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-purple-800 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                <div className="relative p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-purple-800/30 hover:border-orange-600/50 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${client.color} rounded-full flex items-center justify-center shadow-xl flex-shrink-0`}
                    >
                      <span className="text-xl font-bold text-white">
                        {client.logo}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {client.name}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-gray-400 border border-white/10">
                        {client.industry}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-4 h-4 text-orange-500" />
                    <p className="text-sm text-gray-300">{client.service}</p>
                  </div>

                  <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-orange-600/20 to-purple-800/20 rounded-xl border border-orange-600/30">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-semibold text-white">
                      {client.result}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx
                  ? "bg-gradient-to-r from-orange-600 to-purple-700 w-8"
                  : "bg-slate-700 hover:bg-slate-600 w-3"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex lg:hidden justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-orange-600 to-purple-800 rounded-full hover:scale-110 hover:shadow-2xl hover:shadow-orange-600/50 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-800 to-orange-600 rounded-full hover:scale-110 hover:shadow-2xl hover:shadow-purple-600/50 transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-600/50 to-transparent"></div>
    </section>
  );
}
