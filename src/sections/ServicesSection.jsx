import {
  Brush,
  Code2,
  Globe,
  Laptop,
  PieChart,
  Settings,
  Sparkles,
} from "lucide-react";

const services = [
  { title: "Global Coverage", icon: Globe },
  { title: "IT Management", icon: Settings },
  { title: "Software Development", icon: Code2 },
  { title: "Brand Strategy", icon: Brush },
  { title: "Business Consulting", icon: PieChart },
  { title: "Website Design", icon: Laptop },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-5 overflow-hidden">
      {/* Background Glow */}
      <div className="dark:hidden absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute w-96 h-96 bg-[#FF6600] rounded-full blur-3xl opacity-[2%] top-50 left-1/4 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-purple-800 rounded-full blur-3xl opacity-[2%] top-1/2 right-1/4 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 text-white">
        {/* Header */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#FF6600]/20 to-[#4B0082]/20 dark:from-[#FF6600]/10 dark:to-[#FF6600]/5 border border-[#FF6600]/30 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-orange-600" fill="#FF6600" />
            <span className="text-sm text-gray-300 dark:text-[#FF6600] font-medium">
              Boost Up Your Business
            </span>
          </div>
        </div>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 transition-all duration-1000">
            <span className="text-white dark:text-[#FF6600]">
              TAKE OUR
              <br />
              <span className="bg-gradient-to-r from-[#FF6600] via-[#4B0082] to-[#4B0082] bg-clip-text text-transparent dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                PREMIUM SERVICES
              </span>
            </span>
          </h2>
          <p className="text-center text-xl text-gray-400 dark:text-slate-700 leading-relaxed">
            Boost Your Business with Premium Solutions, Grow Faster
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-[30px] gap-x-[24px]">
          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="relative group rounded-2xl overflow-hidden
  bg-linear-to-br from-slate-100/90 to-slate-200/90 dark:from-slate-800/10 dark:to-slate-900/10
  backdrop-blur-lg 
  shadow-sm shadow-slate-400/20 dark:shadow-black/30
  px-[30px] py-[40px]
  transition-all duration-300"
              >
                {/* Hover Gradient Expansion */}
                <span
                  className="
    absolute top-[-50px] right-[-50px]
    w-[150px] h-[150px]
    bg-[#4B0082] dark:bg-[#FF6600]
    rounded-full
    group-hover:opacity-100
    transition-all duration-[500ms] ease-in-out
    group-hover:scale-[6]
    group-hover:rounded-none
                "
                />

                {/* Content */}
                <div className="relative z-20">
                  {/* Icon Box */}
                  <div
                    className="w-[70px] h-[70px] mb-[26px]
      bg-gradient-to-br dark:from-[#4B0082] dark:to-purple-700 from-orange-600 to-[#FF6600]
      text-white flex items-center justify-center
      rounded-[8px]
      shadow-lg dark:shadow-purple-500/30 shadow-orange-500/30
      transition-all duration-700
      dark:group-hover:bg-white group-hover:bg-white 
      dark:group-hover:text-white group-hover:text-white
      group-hover:rotate-[360deg] group-hover:scale-110
      group-hover:shadow-2xl group-hover:shadow-white/40"
                  >
                    <Icon size={30} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[23px] font-bold mb-[18px]
      text-slate-900
      transition-colors duration-300
      group-hover:text-white"
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[14px] mb-[20px] 
      text-slate-800
      transition-colors duration-300
      group-hover:text-white/95"
                  >
                    Mauris volutpat urna tristique finibus iaculis. Morbi
                    facilisis, justo eu vulputate elementum.
                  </p>

                  {/* Link */}
                  <a
                    href="#"
                    className="relative inline-block text-[18px] font-medium
      text-[#4B0082] dark:text-orange-500
      transition-colors duration-300
      group-hover:text-white"
                  >
                    Learn More
                    <span
                      className="absolute left-0 right-0 bottom-0 h-[1px]
        bg-[#4B0082] dark:bg-orange-500
        transition-colors duration-300
        group-hover:bg-white"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
