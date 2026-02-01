import { Linkedin, Mail, Sparkles } from "lucide-react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const directors = [
  {
    name: "Md. Rahman Hossain",
    role: "Managing Director",
    image: "https://i.pravatar.cc/300?img=12",
    email: "md@axiadigitech.com",
    linkedin: "#",
  },
  {
    name: "Nusrat Jahan",
    role: "Director of Strategy",
    image: "https://i.pravatar.cc/300?img=47",
    email: "strategy@axiadigitech.com",
    linkedin: "#",
  },
  {
    name: "Arif Hasan",
    role: "Technical Director",
    image: "https://i.pravatar.cc/300?img=32",
    email: "tech@axiadigitech.com",
    linkedin: "#",
  },
  {
    name: "Farhan Islam",
    role: "Operations Director",
    image: "https://i.pravatar.cc/300?img=59",
    email: "ops@axiadigitech.com",
    linkedin: "#",
  },
  {
    name: "Md. Rahman Hossain",
    role: "Managing Director",
    image: "https://i.pravatar.cc/300?img=12",
    email: "md@axiadigitech.com",
    linkedin: "#",
  },
  {
    name: "Nusrat Jahan",
    role: "Director of Strategy",
    image: "https://i.pravatar.cc/300?img=47",
    email: "strategy@axiadigitech.com",
    linkedin: "#",
  },
  {
    name: "Arif Hasan",
    role: "Technical Director",
    image: "https://i.pravatar.cc/300?img=32",
    email: "tech@axiadigitech.com",
    linkedin: "#",
  },
  {
    name: "Farhan Islam",
    role: "Operations Director",
    image: "https://i.pravatar.cc/300?img=59",
    email: "ops@axiadigitech.com",
    linkedin: "#",
  },
];

export default function OurDirectors() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-80 h-80 bg-[#FF6600]/20 blur-3xl rounded-full top-20 left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-800/20 blur-3xl rounded-full bottom-0 right-0 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600/20 to-purple-800/20 border border-orange-600/30 rounded-full backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-300">Leadership</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Meet Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600">
              Directors
            </span>
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {directors.map((d, i) => (
            <SwiperSlide key={i}>
              <DirectorCard {...d} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function DirectorCard({ name, role, image, email, linkedin }) {
  return (
    <div className="group h-full p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-2xl border border-purple-800/30 hover:border-orange-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-900/30">
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative mb-5">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-purple-700 blur-md opacity-60" />
          <img
            src={image}
            alt={name}
            className="relative w-28 h-28 rounded-full object-cover border-4 border-slate-900"
          />
        </div>

        {/* Info */}
        <h3 className="text-lg font-bold text-white">{name}</h3>
        <p className="text-sm text-orange-400 mb-4">{role}</p>

        {/* Actions */}
        <div className="flex gap-4 mt-auto">
          <a
            href={`mailto:${email}`}
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center hover:scale-110 transition"
          >
            <Mail className="w-5 h-5 text-white" />
          </a>
          <a
            href={linkedin}
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-700 to-purple-600 flex items-center justify-center hover:scale-110 transition"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
