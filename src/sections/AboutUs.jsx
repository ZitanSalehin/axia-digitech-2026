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
      { threshold: 0.3 },
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, [isVisible]);

  // Auto-slide for journey cards

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Decorative Glow (same style as previous) */}
      <div className="dark:hidden absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-10 top-1/4 left-0 animate-pulse" />
        <div
          className="absolute w-96 h-96 bg-purple-800 rounded-full blur-3xl opacity-10 bottom-1/4 right-0 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Intro + Stats */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="relative group rounded-2xl overflow-hidden 
         bg-gradient-to-br from-slate-100/90 to-slate-200/90
         dark:from-slate-800/10 dark:to-slate-900/10
         backdrop-blur-sm
         shadow-sm shadow-slate-400/20 dark:shadow-black/30
         px-[30px] py-[40px]
         transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${stat.color}
                rounded-xl flex items-center justify-center mb-4`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                <div className="text-4xl font-bold text-slate-700 dark:text-slate-600">
                  {counts[i]}
                  {stat.suffix}
                </div>

                <p className="text-slate-700 dark:text-slate-500 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div
              className="inline-flex items-center space-x-2 px-4 py-2
            bg-gradient-to-r from-[#FF6600]/20 to-[#4B0082]/20
            dark:from-[#FF6600]/10 dark:to-[#FF6600]/5
            border border-[#FF6600]/30 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-[#FF6600]" />
              <span className="text-sm text-white dark:text-[#FF6600]">
                Who We Are
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white dark:text-[#FF6600]">
              Building Digital Systems
              <div
                className="bg-gradient-to-r from-[#FF6600] via-[#4B0082] to-[#4B0082] 
                       bg-clip-text text-transparent 
                       dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 inline-block mt-2"
              >
                That Scale Businesses
              </div>
            </h2>

            <p className="text-lg text-gray-400 dark:text-slate-700 leading-relaxed">
              Axia Digitech is a long-term digital partner helping brands grow
              with clarity, speed, and purpose.
            </p>
          </div>
        </div>
      </div>

      {/* Journey */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center space-x-2 px-4 py-2
            bg-gradient-to-r from-[#FF6600]/20 to-[#4B0082]/20
            dark:from-[#FF6600]/10 dark:to-[#FF6600]/5
            border border-[#FF6600]/30 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-[#FF6600]" />
            <span className="text-sm text-white dark:text-[#FF6600]">
              Our Process
            </span>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <h2 className="flex flex-col text-4xl sm:text-5xl font-extrabold text-white dark:text-[#FF6600]">
              Building Digital Systems
              <div
                className="bg-gradient-to-r from-[#FF6600] via-[#4B0082] to-[#4B0082] 
                       bg-clip-text text-transparent 
                       dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 inline-block mt-2"
              >
                That Scale Businesses
              </div>
            </h2>

            <p className="text-lg text-gray-400 dark:text-slate-700 leading-relaxed">
              Axia Digitech is a long-term digital partner helping brands grow
              with clarity, speed, and purpose.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 py-2">
          {journeySteps.map((step, i) => (
            <div
              key={i}
              className="relative group rounded-2xl overflow-hidden 
         bg-gradient-to-br from-slate-100/90 to-slate-200/90
         dark:from-slate-800/10 dark:to-slate-900/10
         backdrop-blur-sm
         shadow-sm shadow-slate-400/20 dark:shadow-black/30
         px-[30px] py-[40px]
         transition-all duration-300"
            >
              {/* <div
                className={`absolute -top-8 left-1/2 -translate-x-1/2
              w-16 h-16 bg-gradient-to-br ${step.color}
              rounded-full flex items-center justify-center`}
              >
                <step.icon className="w-7 h-7 text-white" />
              </div> */}

              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-700 text-center mb-3">
                {step.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-600 text-center">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
