import {
  Award,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ModernAboutSection() {
  // Stats data
  const stats = [
    {
      value: 100,
      suffix: "+",
      label: "Projects Delivered",
      icon: Target,
      color: "from-orange-600 to-orange-500",
    },
    {
      value: 7,
      suffix: "+",
      label: "Years Experience",
      icon: Award,
      color: "from-purple-700 to-purple-600",
    },
    {
      value: 95,
      suffix: "%",
      label: "Retention Rate",
      icon: TrendingUp,
      color: "from-orange-500 to-purple-700",
    },
    {
      value: 50,
      suffix: "+",
      label: "Global Clients",
      icon: Users,
      color: "from-purple-600 to-orange-600",
    },
  ];

  // Journey steps
  const journeySteps = [
    {
      icon: ShieldCheck,
      title: "Strategy First",
      text: "We start with business understanding, not pixels or code.",
      color: "from-orange-600 to-orange-500",
    },
    {
      icon: Users,
      title: "Built Together",
      text: "Transparent collaboration with founders and teams.",
      color: "from-purple-700 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Designed to Grow",
      text: "Every decision is measured by real-world impact.",
      color: "from-orange-500 to-purple-700",
    },
    {
      icon: Zap,
      title: "Fast Execution",
      text: "Rapid development without compromising quality.",
      color: "from-purple-600 to-orange-600",
    },
    {
      icon: Award,
      title: "Excellence Driven",
      text: "Committed to delivering outstanding results every time.",
      color: "from-orange-600 to-purple-700",
    },
    {
      icon: Target,
      title: "Goal Oriented",
      text: "Every project aligned with your business objectives.",
      color: "from-purple-700 to-orange-500",
    },
  ];

  // Count-up animation for stats
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          stats.forEach((stat, idx) => {
            let start = 0;
            const end = Number(stat.value);
            const stepTime = 1500 / end || 20;
            const timer = setInterval(() => {
              start += 1;
              if (start > end) {
                clearInterval(timer);
                start = end;
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[idx] = start;
                return newCounts;
              });
            }, stepTime);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, [isVisible]);

  // Auto-slide for journey cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % Math.max(1, journeySteps.length - 2)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-10 top-1/4 left-0 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-purple-800 rounded-full blur-3xl opacity-10 bottom-1/4 right-0 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute w-64 h-64 bg-orange-600 rounded-full blur-2xl opacity-5 top-1/2 left-1/2 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Intro + Stats Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Intro */}
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group relative p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl border border-purple-800/30 hover:border-orange-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-900/30 cursor-pointer"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                {/* Count */}
                <div className="text-4xl font-bold text-white mb-2">
                  {counts[i]}
                  {stat.suffix}
                </div>

                {/* Label */}
                <p className="text-gray-400 text-sm">{stat.label}</p>

                {/* Decorative Corner */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          {/* Right: Stats Grid */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-600/20 to-purple-800/20 border border-orange-600/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-sm text-gray-300 font-medium">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Building Digital Systems{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
                That Scale Businesses
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                Axia Digitech is not just an agency. We are a{" "}
                <span className="text-orange-500 font-semibold">
                  long-term digital partner
                </span>{" "}
                that helps brands design, build, and grow digital products with
                clarity, speed, and purpose.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-xl border border-purple-800/30 hover:border-orange-600/50 transition-all duration-300">
                  <div className="text-2xl font-bold text-orange-500 mb-1">
                    10M+
                  </div>
                  <div className="text-xs text-gray-400">Digital Reach</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-xl border border-purple-800/30 hover:border-orange-600/50 transition-all duration-300">
                  <div className="text-2xl font-bold text-purple-500 mb-1">
                    350%
                  </div>
                  <div className="text-xs text-gray-400">Avg ROI Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-32">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-800/20 to-orange-600/20 border border-purple-600/30 rounded-full backdrop-blur-sm mb-6">
            <TrendingUp className="w-4 h-4 text-purple-500" />
            <span className="text-sm text-gray-300 font-medium">
              Our Process
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-600">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A proven methodology that transforms ideas into successful digital
            products
          </p>
        </div>

        {/* Journey Cards - Desktop Carousel */}
        <div className="hidden lg:block relative">
          <div className="">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-8"
              style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
            >
              {journeySteps.map((step, i) => (
                <div
                  key={i}
                  className="min-w-[calc(33.333%-1.333rem)] flex-shrink-0"
                >
                  <div className="relative h-full group">
                    {/* Card */}
                    <div
                      className="relative p-10 pt-16
  bg-gradient-to-br from-slate-800/80 to-slate-900/80
  backdrop-blur-xl rounded-3xl
  border border-purple-800/30
  hover:border-orange-600/50
  transition-all duration-500
  hover:scale-105
  hover:shadow-2xl hover:shadow-purple-900/30"
                    >
                      {/* Top Icon - Positioned Outside Card */}
                      <div
                        className={`absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {step.text}
                        </p>
                      </div>

                      {/* Decorative Element */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-orange-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: Math.max(1, journeySteps.length - 2) }).map(
              (_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? "bg-gradient-to-r from-orange-600 to-purple-700 w-8"
                      : "bg-slate-700 hover:bg-slate-600"
                  }`}
                />
              )
            )}
          </div>
        </div>

        {/* Journey Cards - Mobile Grid */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-8">
          {journeySteps.map((step, i) => (
            <div key={i} className="relative">
              {/* Card */}
              <div className="relative p-8 pt-16 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl border border-purple-800/30 hover:border-orange-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900/30">
                {/* Top Icon */}
                <div
                  className={`absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl`}
                >
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-600/50 to-transparent"></div>
    </section>
  );
}
