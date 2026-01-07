import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, TrendingUp, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const AboutSection = () => {
	// Stats data
	const stats = [
		{ value: 100, suffix: '+', label: 'Projects Delivered' },
		{ value: 7, suffix: '+', label: 'Years Experience' },
		{ value: 95, suffix: '%', label: 'Retention Rate' },
		{ value: 1, suffix: '', label: 'Global Clients' },
	];

	// Journey steps
	const journeySteps = [
		{
			icon: ShieldCheck,
			title: 'Strategy First',
			text: 'We start with business understanding, not pixels or code.',
		},
		{
			icon: Users,
			title: 'Built Together',
			text: 'Transparent collaboration with founders and teams.',
		},
		{
			icon: TrendingUp,
			title: 'Designed to Grow',
			text: 'Every decision is measured by real-world impact.',
		},
		{
			icon: ShieldCheck,
			title: 'Strategy First',
			text: 'We start with business understanding, not pixels or code.',
		},
		{
			icon: Users,
			title: 'Built Together',
			text: 'Transparent collaboration with founders and teams.',
		},
		{
			icon: TrendingUp,
			title: 'Designed to Grow',
			text: 'Every decision is measured by real-world impact.',
		},
	];

	// Count-up animation for stats
	const [counts, setCounts] = useState(stats.map(() => 0));
	const statsRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					stats.forEach((stat, idx) => {
						let start = 0;
						const end = Number(stat.value);
						const stepTime = 1500 / end || 20; // 1.5s duration
						const timer = setInterval(() => {
							start += 1;
							if (start > end) {
								clearInterval(timer);
								start = end;
							}
							setCounts(prev => {
								const newCounts = [...prev];
								newCounts[idx] = start;
								return newCounts;
							});
						}, stepTime);
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.5 }
		);

		if (statsRef.current) observer.observe(statsRef.current);
	}, []);

	return (
		<section
			id="about"
			className="relative bg-[#4b0082] text-white overflow-hidden"
		>
			{/* Intro + Stats */}
			<div className="mx-auto max-w-7xl px-6 py-16 flex flex-col lg:flex-row gap-12">
				{/* Left: Intro */}
				<motion.div
					className="lg:w-1/2"
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
				>
					<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm mb-6">
						<Sparkles className="w-4 h-4 text-[#ff6600]" />
						<span>Who We Are</span>
					</div>

					<h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
						Building digital systems
						<br />
						<span className="text-[#ff6600]">that scale businesses</span>
					</h2>

					<p className="mt-6 text-lg text-white/80 leading-relaxed">
						Axia Digitech is not just an agency. We are a long-term digital
						partner that helps brands design, build, and grow digital products
						with clarity, speed, and purpose.
					</p>
				</motion.div>

				{/* Right: Stats 2x2 grid */}
				<motion.div
					className="lg:w-1/2 grid grid-cols-2 gap-6"
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					ref={statsRef}
				>
					{stats.map((stat, i) => (
						<motion.div
							key={i}
							className="flex flex-col items-center justify-center w-full h-40 rounded-xl bg-gradient-to-br from-[#ff6600]/30 to-[#ff6600]/10 shadow-lg hover:shadow-[0_0_25px_rgba(255,102,0,0.7)] transition-all duration-300 cursor-pointer"
							whileHover={{ scale: 1.05 }}
						>
							<h1 className="text-3xl font-bold text-white">
								{counts[i]}
								{stat.suffix}
							</h1>
							<p className="text-white/80 mt-2 text-center">{stat.label}</p>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Journey Section as Swiper */}
			<div className="px-6 lg:px-20 pb-16">
				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-white mb-12">
					Our Journey
				</h2>

				<Swiper
					modules={[Autoplay]}
					spaceBetween={30}
					slidesPerView={1}
					loop={true}
					autoplay={{ delay: 2500, disableOnInteraction: false }}
					breakpoints={{
						640: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					className="!overflow-visible" // allow icon to overflow a bit
				>
					{journeySteps.map((step, i) => (
						<SwiperSlide key={i} className="flex justify-center px-4">
							<div className="relative w-full max-w-sm bg-gradient-to-br from-[#ff6600]/25 to-[#ff6600]/10 p-8 rounded-3xl shadow-xl hover:shadow-[0_10px_30px_rgba(255,102,0,0.5)] transition-all duration-500 cursor-pointer">
								{/* Top Icon */}
								<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#ff6600] flex items-center justify-center shadow-2xl">
									<step.icon className="w-7 h-7 text-white" />
								</div>

								{/* Content */}
								<div className="mt-12 text-center">
									<h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
										{step.title}
									</h3>
									<p className="text-white/80 text-sm sm:text-base leading-relaxed">
										{step.text}
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default AboutSection;
