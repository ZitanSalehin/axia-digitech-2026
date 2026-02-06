import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const teamMembers = [
  {
    name: "Nirob Hasan",
    role: "CEO & Founder",
    image: "/team/nirob.jpg",
  },
  {
    name: "Md. Nasiruddin",
    role: "CTO",
    image: "/team/nasir.jpg",
  },
  {
    name: "Rakib Ahmed",
    role: "Marketing Strategist",
    image: "/team/rakib.jpg",
  },
  {
    name: "Nusrat Jahan",
    role: "UI/UX Designer",
    image: "/team/nusrat.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#FF6600]">
            Meet Our Team
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            A team of strategists, designers, and engineers dedicated to
            building powerful digital experiences.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            loop
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {teamMembers.map((member, i) => (
              <SwiperSlide key={i}>
                <div
                  className="group bg-gradient-to-br from-slate-100/90 to-slate-200/90
          dark:from-slate-800/10 dark:to-slate-900/10
          backdrop-blur-sm
           rounded-2xl p-8 text-center"
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-[#FF6600]/20"
                    />
                  </div>

                  <h4 className="mt-6 text-xl font-bold text-gray-900">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
