import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';

import socialMediaImg from '../assets/business-setup.webp';
import digitalMarketingImg from '../assets/digital.webp';
import graphicsDesignImg from '../assets/graphics.webp';
import webDevelopmentImg from '../assets/website-development.webp';
import useMediaQuery from '../utils/useMediaQuery.js';

const OurServices = () => {
	const isMobile = useMediaQuery('(max-width: 768px)');

	const services = [
		{
			title: 'Digital Marketing',
			description: 'We help your brand reach the right audience.',
			image: digitalMarketingImg,
			link: '/services/digital-marketing',
		},
		{
			title: 'Website Development',
			description: 'Building responsive and high-performing websites.',
			image: webDevelopmentImg,
			link: '/services/website-development',
		},
		{
			title: 'Graphics Design',
			description: 'Creative and impactful visual design solutions.',
			image: graphicsDesignImg,
			link: '/services/graphics-design',
		},
		{
			title: 'Social Media Management',
			description: 'Manage your social media presence effectively.',
			image: socialMediaImg,
			link: '/services/social-media-management',
		},
	];

	return (
		<section
			id="services"
			className="max-w-7xl py-5 border-y-2 border-[#ff6600] border-max-w-2xl mx-auto"
		>
			<div className="py-10 mx-auto px-4 sm:px-6 lg:px-8">
				{/* Heading */}
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
						Our Services
					</h2>
					<p className="text-xl text-purple-200 max-w-2xl mx-auto">
						Check out our range of services designed to help your business grow.
					</p>
				</motion.div>

				{/* Slider */}
				<Swiper
					modules={[Autoplay]}
					spaceBetween={30}
					slidesPerView={isMobile ? 1 : 2}
					loop={true}
					autoplay={{ delay: 2500, disableOnInteraction: false }}
					breakpoints={{
						640: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
				>
					{services.map((service, index) => (
						<SwiperSlide key={index} className="flex justify-center px-2">
							<motion.div
								whileHover={{ scale: 1.05, rotate: 1 }}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.15 }}
								className="w-full max-w-sm bg-gradient-to-tr from-purple-800/80 to-purple-700/50 rounded-3xl shadow-2xl overflow-hidden border border-purple-500 hover:border-purple-300 cursor-pointer"
							>
								{/* Image */}
								<div className="w-full h-88 relative overflow-hidden rounded-t-3xl">
									<img
										src={service.image}
										alt={service.title}
										className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
								</div>

								{/* Content */}
								<div className="p-6 flex flex-col justify-between bg-[#FF6600]">
									<div className="text-center">
										<h3 className="text-xl font-bold text-white mb-2">
											{service.title}
										</h3>
										<p className="text-purple-200 text-sm">
											{service.description}
										</p>
									</div>
									<div className="mt-4 flex justify-center">
										<Link
											to={service.link}
											className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium"
										>
											Learn More <ChevronRight size={16} className="ml-1" />
										</Link>
									</div>
								</div>
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default OurServices;
