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
    <section className="relative py-[115px] pb-[120px] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-[2%] top-0 left-1/4 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-purple-800 rounded-full blur-3xl opacity-[2%] top-1/2 right-1/4 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 text-white">
        {/* Header */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-600/20 to-purple-800/20 border border-orange-600/30 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm text-gray-300 font-medium">
              Boost Up Your Business
            </span>
          </div>
        </div>
        <div className="text-center max-w-2xl mx-auto mb-[34px]">
          <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-16 transition-all duration-1000">
            TAKE OUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-purple-600 inline-block">
              PREMIUM SERVICES
            </span>
          </h2>
          <p className="text-[14px] text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            malesuada fermentum purus, eu volutpat nisi laoreet id.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-[30px] gap-x-[24px]">
          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="relative group rounded-[16px] overflow-hidden
                bg-gradient-to-br from-slate-800/60 to-slate-900/60
                backdrop-blur-xl border border-white/10
                shadow-xl shadow-black/30
                px-[30px] py-[40px]"
              >
                {/* Hover Gradient Expansion */}
                <span
                  className="
                  absolute top-[-50px] right-[-50px]
                  w-[150px] h-[150px]
                  bg-[#FF6600]
                  rounded-full
                  transition-all duration-[500ms] ease-in-out
                  group-hover:scale-[6]
                  group-hover:rounded-none
                  group-hover:opacity-100
                "
                />

                {/* Content */}
                <div className="relative z-20">
                  {/* Icon Box */}
                  <div
                    className="w-[70px] h-[70px] mb-[26px]
                    bg-gradient-to-br from-orange-600 to-purple-700
                    text-white flex items-center justify-center
                    rounded-[8px]
                    transition-all duration-700
                    group-hover:bg-white group-hover:text-white group-hover:rotate-360"
                  >
                    <Icon size={30} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[23px] font-bold mb-[18px]
                    transition-colors duration-300
                    group-hover:text-white"
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[14px] mb-[20px] text-gray-300
                    transition-colors duration-300
                    group-hover:text-white"
                  >
                    Mauris volutpat urna tristique finibus iaculis. Morbi
                    facilisis, justo eu vulputate elementum.
                  </p>

                  {/* Link */}
                  <a
                    href="#"
                    className="relative text-[18px] font-medium
                    transition-colors duration-300
                    group-hover:text-white"
                  >
                    Learn More
                    <span
                      className="absolute left-0 right-0 bottom-0 h-[1px]
                      bg-orange-500 transition-colors duration-300
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
