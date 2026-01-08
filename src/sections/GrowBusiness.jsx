import {
  ArrowRight,
  Award,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function GrowBusinessSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({ business: false, team: false });
  const businessRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check visibility for animations
      const checkVisibility = (ref, key) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight * 0.75;
          setIsVisible((prev) => ({ ...prev, [key]: isInView }));
        }
      };

      checkVisibility(businessRef, "business");
      checkVisibility(teamRef, "team");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: TrendingUp,
      text: "Data-Driven Growth Strategies",
      color: "from-orange-600 to-orange-500",
    },
    {
      icon: Target,
      text: "Precision Targeting & ROI Focus",
      color: "from-purple-700 to-purple-600",
    },
    {
      icon: Rocket,
      text: "Accelerated Business Scaling",
      color: "from-orange-500 to-purple-700",
    },
  ];

  const teamFeatures = [
    {
      icon: Users,
      text: "Expert Professionals",
      color: "from-purple-700 to-purple-600",
    },
    {
      icon: Award,
      text: "Award-Winning Results",
      color: "from-orange-600 to-orange-500",
    },
    {
      icon: Sparkles,
      text: "Innovation-Driven Solutions",
      color: "from-orange-500 to-purple-700",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-10 top-0 left-1/4 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-purple-800 rounded-full blur-3xl opacity-10 top-1/2 right-1/4 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* ================= Grow Your Business Section ================= */}
      <div ref={businessRef} className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-600/20 to-purple-800/20 border border-orange-600/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-sm text-gray-300 font-medium">
                Transform Your Business
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h2
            className={`text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-16 transition-all duration-1000 ${
              isVisible.business
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Grow Your Business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-purple-600 inline-block">
              AXIA DIGITECH
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* ================= LEFT PART ================= */}
            <div
              className="space-y-8 transition-all duration-1000 delay-200"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              {/* Description Cards */}
              <div className="space-y-6">
                <div className="group p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl border border-purple-800/30 hover:border-orange-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-900/30">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We craft{" "}
                    <span className="text-orange-500 font-semibold">
                      innovative strategies
                    </span>{" "}
                    and solutions to elevate your business to new heights.
                  </p>
                </div>

                <div className="group p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl border border-purple-800/30 hover:border-orange-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900/30">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Our expert team provides{" "}
                    <span className="text-purple-400 font-semibold">
                      data-driven guidance
                    </span>
                    , helping you maximize growth and ROI.
                  </p>
                </div>

                <div className="group p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl border border-purple-800/30 hover:border-orange-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-900/30">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Join a thriving community of{" "}
                    <span className="text-orange-500 font-semibold">
                      successful brands
                    </span>{" "}
                    and watch your business scale.
                  </p>
                </div>
              </div>

              {/* Feature Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center py-5 px-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-orange-600/40 transition-all duration-300 hover:scale-105"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-3`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs text-gray-400 text-center">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-purple-800 text-white rounded-full font-bold hover:shadow-2xl hover:shadow-orange-600/50 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* ================= RIGHT PART ================= */}
            <div
              className="space-y-8 transition-all duration-1000 delay-200"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              {/* Description Cards */}
              <div className="space-y-6">
                <div className="group p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl border border-orange-800/30 hover:border-purple-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900/30">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Our team is made up of{" "}
                    <span className="text-purple-400 font-semibold">
                      experienced professionals
                    </span>{" "}
                    committed to driving results for your business.
                  </p>
                </div>

                <div className="group p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl border border-orange-800/30 hover:border-purple-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-900/30">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We value{" "}
                    <span className="text-orange-500 font-semibold">
                      innovation, collaboration
                    </span>
                    , and delivering measurable growth to our clients.
                  </p>
                </div>

                <div className="group p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl border border-orange-800/30 hover:border-purple-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900/30">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Meet the{" "}
                    <span className="text-purple-400 font-semibold">
                      talented individuals
                    </span>{" "}
                    who make our agency stand out in the digital space.
                  </p>
                </div>
              </div>

              {/* Team Feature Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {teamFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center py-5 px-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-600/40 transition-all duration-300 hover:scale-105"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-3`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs text-gray-400 text-center">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-700 to-orange-600 text-white rounded-full font-bold hover:shadow-2xl hover:shadow-purple-600/50 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider with Icon */}
      <div className="relative z-10 flex justify-center py-8">
        <div className="w-1 h-24 bg-gradient-to-b from-orange-600 via-purple-700 to-purple-900 rounded-full"></div>
      </div>

      {/* ================= Meet Our Team Section ================= */}
      <div ref={teamRef} className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Badge */}

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side (Left on Desktop) */}

            {/* Content Side (Right on Desktop) */}
          </div>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-600/50 to-transparent"></div>
    </section>
  );
}
