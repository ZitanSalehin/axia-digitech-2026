import {
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
      text: "Team Of Expert Professionals",
      color: "from-purple-700 to-purple-600",
    },
    {
      icon: Award,
      text: "Award-Winning Results & Achievement",
      color: "from-orange-600 to-orange-500",
    },
    {
      icon: Sparkles,
      text: "Innovation-Driven Solutions",
      color: "from-orange-500 to-purple-700",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32">
      {/* Glow / Decorative Background */}
      <div className="dark:hidden absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-72 h-72 bg-orange-600 rounded-full blur-3xl opacity-10 top-1/4 left-1/4 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-purple-800 rounded-full blur-3xl opacity-10 top-1/2 right-1/4 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* ================= Grow Your Business Section ================= */}
      <div ref={businessRef} className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Badge */}
          {/* Badge / Small Highlight */}
          <div className="flex justify-center mb-6">
            <div
              className="inline-flex items-center space-x-2 px-4 py-2 
                  bg-gradient-to-r from-[#FF6600]/20 to-[#4B0082]/20 
                  dark:from-[#FF6600]/10 dark:to-[#FF6600]/5 
                  border border-[#FF6600]/30 dark:border-[#FF6600]/40 
                  rounded-full backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-[#FF6600]" fill="#FF6600" />
              <span className="text-sm text-gray-300 dark:text-[#FF6600] font-medium">
                Transform Your Business
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2
              className={`text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold 
                  text-white dark:text-[#FF6600] transition-all duration-1000`}
            >
              <span className="text-white dark:text-[#FF6600]">
                GROW YOUR BUSINESS WITH
                <br />
                <span
                  className="bg-gradient-to-r from-[#FF6600] via-[#4B0082] to-[#4B0082] 
                       bg-clip-text text-transparent 
                       dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 inline-block"
                >
                  AXIA DIGITECH
                </span>
              </span>
            </h2>
            <p className="text-center text-xl text-gray-400 dark:text-slate-700 leading-relaxed mt-2">
              Elevate Your Brand, Accelerate Your Growth
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-12">
            {/* LEFT PART */}
            <div className="space-y-8 transition-all duration-1000 delay-200">
              {/* Description Cards */}
              <div className="space-y-6">
                {[
                  "We craft innovative strategies and solutions to elevate your business to new heights.",
                  "Our expert team provides data-driven guidance, helping you maximize growth and ROI.",
                  "Join a thriving community of successful brands and watch your business scale.",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="group p-6 bg-gradient-to-br from-slate-900/60 to-slate-800/60 dark:from-slate-800/50 dark:to-slate-700/50 
                     backdrop-blur-xl rounded-2xl border border-purple-700/20 dark:border-purple-600/30 
                     hover:border-orange-600/50 dark:hover:border-orange-500/50 
                     transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-900/20"
                  >
                    <p className="text-white dark:text-white text-lg leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Feature Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center py-5 px-2 bg-gradient-to-br from-slate-100/90 to-slate-200/90 dark:from-slate-800/10 dark:to-slate-900/10
  backdrop-blur-sm 
  shadow-sm shadow-slate-400/20 dark:shadow-black/30 
                     rounded-xl border border-white/10 dark:border-slate-300/20 
                     hover:border-orange-600/40 dark:hover:border-orange-500/40 
                     transition-all duration-300 hover:scale-105"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-3 shadow-md`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-slate-800 dark:text-[#FF6600] text-center">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT PART */}
            <div className="space-y-8 transition-all duration-1000 delay-200">
              {/* Description Cards */}
              <div className="space-y-6">
                {[
                  "Our team is made up of experienced professionals committed to driving results for your business.",
                  "We value innovation, collaboration, and delivering measurable growth to our clients.",
                  "Meet the talented individuals who make our agency stand out in the digital space.",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="group p-6 bg-gradient-to-br from-slate-900/60 to-slate-800/60 dark:from-slate-800/50 dark:to-slate-700/50 
                     backdrop-blur-xl rounded-2xl border border-purple-700/20 dark:border-purple-600/30 
                     hover:border-orange-600/50 dark:hover:border-orange-500/50 
                     transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-900/20"
                  >
                    <p className="text-white dark:text-white text-lg leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Team Feature Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {teamFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center py-5 px-2 bg-gradient-to-br from-slate-100/90 to-slate-200/90 dark:from-slate-800/10 dark:to-slate-900/10
  backdrop-blur-sm 
  shadow-sm shadow-slate-400/20 dark:shadow-black/30 
                     rounded-xl border border-white/10 dark:border-slate-300/20 
                     hover:border-orange-600/40 dark:hover:border-orange-500/40 
                     transition-all duration-300 hover:scale-105"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-3 shadow-md`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-slate-800 dark:text-[#FF6600] text-center">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
