import { ArrowLeft, ArrowRight } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Nirob Hasan",
    companyName: "Zeron Group",
    message:
      "Axia Digitech transformed our online presence. Their marketing strategy boosted our sales beyond expectations.",
  },
  {
    name: "Md. Nasiruddin",
    companyName: "BCL Internet Founder",
    message:
      "Professional, creative, and result-driven. Axia Digitech truly understands digital growth.",
  },
  {
    name: "Rakib Ahmed",
    companyName: "Dhumketu ltd.",
    message:
      "From design to performance marketing, everything was smooth and effective. Highly recommended!",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF6600] mb-6">
            What Our <span className="text-slate-700">Clients Say</span>
          </h2>
          <p className="mt-8 text-center lg:text-left text-gray-600 text-lg">
            Trusted by brands and businesses, Axia Digitech delivers
            performance-focused digital solutions that drive real growth.
          </p>
        </div>

        {/* Right Slider */}
        <div
          className="relative rounded-2xl
          bg-gradient-to-br from-slate-100/90 to-slate-200/90
          dark:from-slate-800/10 dark:to-slate-900/10
          backdrop-blur-sm
          shadow-sm shadow-slate-400/20 dark:shadow-black/30
          px-[30px] py-[40px]"
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            className="w-full"
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <p className="text-gray-700 text-lg leading-relaxed">
                  “{item.message}”
                </p>

                <div className="mt-6">
                  <h3 className="font-bold text-gray-900 text-xl">
                    {item.name}
                  </h3>
                  <p className="text-md text-slate-600">{item.companyName}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <div className="absolute -bottom-6 right-8 flex gap-3 z-32">
            <button className="testimonial-prev w-12 h-12 rounded-full bg-[#FF6600] text-white flex items-center justify-center hover:bg-[#da6517] transition">
              <ArrowLeft />
            </button>
            <button className="testimonial-next w-12 h-12 rounded-full bg-[#FF6600] text-white flex items-center justify-center hover:bg-[#da6517] transition">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
