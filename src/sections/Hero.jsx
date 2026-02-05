import { ArrowRight, Star, Target, TrendingUp, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import banner from '../assets/banner.jpg';

import socialMediaImg from '../assets/business-setup.webp';
import digitalMarketingImg from '../assets/digital.webp';
import graphicsDesignImg from '../assets/graphics.webp';
import webDevelopmentImg from '../assets/website-development.webp';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Hero() {
	const [activeMetric, setActiveMetric] = useState(0);

	const metrics = [
		{ value: '350%', label: 'ROI Increase' },
		{ value: '10M+', label: 'Impressions' },
		{ value: '98%', label: 'Client Satisfaction' },
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveMetric(prev => (prev + 1) % metrics.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative pt-8 mt-28 pb-20 px-4 sm:px-6 lg:px-8">
			{/* Image + Slider Section */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
				{/* Slider */}
				<div className="w-full aspect-[16/9] lg:aspect-auto lg:h-[390px]">
					<Swiper
						modules={[Autoplay]}
						autoplay={{ delay: 2500 }}
						loop
						className="w-full lg:h-full rounded-2xl overflow-hidden"
					>
						<SwiperSlide>
							<img
								src={socialMediaImg}
								alt="Social Media"
								className="w-full h-full object-cover"
							/>
						</SwiperSlide>

						<SwiperSlide>
							<img
								src={digitalMarketingImg}
								alt="Digital Marketing"
								className="w-full h-full object-cover"
							/>
						</SwiperSlide>

						<SwiperSlide>
							<img
								src={graphicsDesignImg}
								alt="Graphics Design"
								className="w-full h-full object-cover"
							/>
						</SwiperSlide>

						<SwiperSlide>
							<img
								src={webDevelopmentImg}
								alt="Web Development"
								className="w-full h-full object-cover"
							/>
						</SwiperSlide>
					</Swiper>
				</div>

				{/* Main Image */}
				<div className="lg:col-span-2 w-full aspect-[16/9] lg:aspect-auto lg:h-[390px]">
					<img
						src={banner}
						alt="Banner"
						className="w-full h-full object-cover object-[90%_center] rounded-2xl"
					/>
				</div>
			</div>

			<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
				{/* Left Content */}
				<div className="space-y-8 animate-fade-in mt-10">
					<div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#FF6600]/20 to-[#4B0082]/20 dark:from-[#FF6600]/10 dark:to-[#FF6600]/5 border border-[#FF6600]/30 rounded-full backdrop-blur-sm">
						<Star className="w-5 h-5 text-slate-900" fill="#0f172b" />
						<span className="text-md text-gray-300 dark:text-slate-900 font-medium">
							Next-Gen Digital Marketing Agency
						</span>
					</div>

					<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
						<span className="text-white dark:text-[#FF6600]">
							Transform Your
						</span>
						<br />
						<span className="bg-gradient-to-r from-[#FF6600] via-[#4B0082] to-[#4B0082] bg-clip-text text-transparent dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
							Digital Presence
						</span>
					</h1>

					<p className="text-xl text-gray-400 dark:text-slate-700 leading-relaxed max-w-xl">
						Elevate your brand with data-driven marketing strategies that
						deliver real results. We turn clicks into customers and campaigns
						into conversions.
					</p>

					<div className="flex flex-col sm:flex-row gap-4">
						<button className="group px-8 py-4 bg-[#FF6600] text-white rounded-full font-bold hover:shadow-2xl hover:shadow-[#FF6600]/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
							<span>Start Your Campaign</span>
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</button>

						{/* <button className="group px-8 py-4 bg-white/10 dark:bg-slate-100 backdrop-blur-sm text-white dark:text-slate-900 rounded-full font-bold border-2 border-white/20 dark:border-slate-300 hover:bg-white/20 dark:hover:bg-slate-200 transition-all duration-300 flex items-center justify-center space-x-2">
              <Play className="w-5 h-5 fill-white dark:fill-slate-900" />
              <span>Watch Demo</span>
            </button> */}
					</div>

					{/* Glow Effects */}
					<div className="dark:hidden absolute inset-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-20">
						<div className="absolute w-96 h-96 bg-[#FF6600] rounded-full blur-3xl opacity-[2%] top-30 left-1/4 animate-pulse"></div>
						<div
							className="absolute w-96 h-96 bg-[#4B0082] rounded-full blur-3xl opacity-[2%] top-[50%] right-1/4 animate-pulse"
							style={{ animationDelay: '1.5s' }}
						></div>
					</div>

					{/* Metrics */}
					<div className="grid grid-cols-3 gap-4 pt-8">
						{metrics.map((metric, idx) => (
							<div
								key={idx}
								className={`text-center p-4 rounded-xl transition-all duration-500 ${
									activeMetric === idx
										? 'bg-gradient-to-br from-[#FF6600]/20 to-[#4B0082]/20 border border-[#FF6600]/40 scale-105'
										: 'bg-white/5 dark:bg-slate-50 border border-white/10 dark:border-slate-200'
								}`}
							>
								<div className="text-2xl sm:text-3xl font-bold text-white dark:text-[#FF6600]">
									{metric.value}
								</div>
								<div className="text-xs sm:text-sm text-gray-400 dark:text-slate-800 mt-1">
									{metric.label}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Right Cards */}
				<div className="relative lg:block hidden">
					<div className="relative z-10 space-y-4">
						{[
							{
								icon: <TrendingUp className="w-6 h-6 text-white" />,
								title: 'Growth Marketing',
								desc: 'Scale your business with proven strategies.',
								offset: 'ml-12',
							},
							{
								icon: <Target className="w-6 h-6 text-white" />,
								title: 'Targeted Campaigns',
								desc: 'Reach the right audience with precision.',
							},
							{
								icon: <Zap className="w-6 h-6 text-white" />,
								title: 'Real-Time Analytics',
								desc: 'Track and optimize in real time.',
								offset: 'ml-12',
							},
						].map((card, idx) => (
							<div
								key={idx}
								className={`${
									card.offset || ''
								} p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 dark:from-slate-50 dark:to-white backdrop-blur-xl rounded-2xl border border-[#4B0082]/30 hover:border-[#FF6600]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl`}
							>
								<div className="flex items-start space-x-4">
									{/* ICON BG ONLY CHANGED */}
									<div className="w-12 h-12 bg-[#FF6600] rounded-xl flex items-center justify-center">
										{card.icon}
									</div>

									<div>
										<h3 className="text-lg font-bold text-white dark:text-slate-900 mb-2">
											{card.title}
										</h3>
										<p className="text-gray-400 dark:text-slate-600 text-sm">
											{card.desc}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="dark:hidden absolute top-1/4 right-30 w-72 h-72 bg-[#FF6600] rounded-full blur-3xl opacity-20 animate-pulse"></div>
				</div>
			</div>
		</div>
	);
}
