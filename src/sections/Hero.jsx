import { ArrowRight, Play, Star, Target, TrendingUp, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { value: "350%", label: "ROI Increase" },
    { value: "10M+", label: "Impressions" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative pt-16 mt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-600/20 to-purple-800/20 border border-orange-600/30 rounded-full backdrop-blur-sm">
            <Star className="w-4 h-4 text-orange-600" fill="#FF6600" />
            <span className="text-sm text-gray-300 font-medium">
              Award-Winning Digital Agency
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">Transform Your</span>
            <br />
            <span className="bg-gradient-to-r from-orange-600 via-purple-500 to-purple-800 bg-clip-text text-transparent">
              Digital Presence
            </span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
            Elevate your brand with data-driven marketing strategies that
            deliver real results. We turn clicks into customers and campaigns
            into conversions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-purple-800 text-white rounded-full font-bold hover:shadow-2xl hover:shadow-orange-600/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Start Your Campaign</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold border-2 border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" fill="white" />
              <span>Watch Demo</span>
            </button>
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
              <div className="absolute w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-[2%] top-30 left-1/4 animate-pulse"></div>
              <div
                className="absolute w-96 h-96 bg-purple-800 rounded-full blur-3xl opacity-[2%] top-1/2 right-1/4 animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className={`text-center p-4 rounded-xl transition-all duration-500 ${
                  activeMetric === idx
                    ? "bg-gradient-to-br from-orange-600/20 to-purple-800/20 border border-orange-600/40 scale-105"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Feature Cards */}
        <div className="relative lg:block hidden">
          <div className="relative z-10 space-y-4">
            {[
              {
                icon: <TrendingUp className="w-6 h-6 text-white" />,
                title: "Growth Marketing",
                desc: "Scale your business with proven strategies that drive sustainable growth.",
                gradient: "from-orange-600 to-purple-800",
                offset: "ml-12",
              },
              {
                icon: <Target className="w-6 h-6 text-white" />,
                title: "Targeted Campaigns",
                desc: "Reach your ideal audience with precision-targeted digital campaigns.",
                gradient: "from-purple-800 to-orange-600",
              },
              {
                icon: <Zap className="w-6 h-6 text-white" />,
                title: "Real-Time Analytics",
                desc: "Track performance and optimize campaigns with powerful insights.",
                gradient: "from-orange-600 to-purple-800",
                offset: "ml-12",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className={`${
                  card.offset || ""
                } p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-purple-800/30 hover:border-orange-600/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/30`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-1/4 -right-4 w-72 h-72 bg-orange-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        </div>
      </div>
      <div className="relative z-10 flex justify-center py-20">
        <div className="w-1 h-24 bg-gradient-to-b from-orange-600 via-purple-700 to-purple-900 rounded-full"></div>
      </div>
    </div>
  );
}
