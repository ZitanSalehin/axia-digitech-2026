import { ArrowRight, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
	return (
		<section className="relative overflow-hidden bg-[#4b0082] text-white flex flex-col items-center w-full">
			<div className="relative mx-auto px-6 py-28">
				<div className="w-full flex flex-col items-center">
					{/* Badge */}

					{/* Heading */}
					<h1 className="text-5xl sm:text-6xl xl:text-7xl text-center font-extrabold leading-tight">
						We Build <span className="text-[#ff6600]">Digital Products</span>
						<br className="hidden sm:block" />
						That Grow Businesses
					</h1>

					{/* Description */}
					<p className="mt-6 text-2xl text-center text-white/80 leading-relaxed">
						Axia Digitech partners with ambitious brands to design, develop, and
						scale high-performance digital experiences that deliver measurable
						results.
					</p>

					{/* CTA */}
					<div className="mt-8 flex flex-wrap gap-4">
						<Link
							to="/contact"
							className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#ff6600] font-semibold hover:scale-105 transition-transform"
						>
							Start a Project
							<ArrowRight className="w-5 h-5" />
						</Link>

						<Link
							to="/services"
							className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/30 hover:bg-white/10 transition"
						>
							Our Services
						</Link>
					</div>

					{/* Trust Indicators */}
					<div className="mt-10 flex flex-wrap gap-6 text-sm text-white/80">
						<div className="flex items-center gap-2">
							<ShieldCheck className="w-5 h-5 text-[#ff6600]" />
							Trusted by 100+ Clients
						</div>
						<div className="flex items-center gap-2">
							<TrendingUp className="w-5 h-5 text-[#ff6600]" />
							ROI-Driven Growth Strategy
						</div>
					</div>
					<div className="inline-flex mx-auto items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm mt-6">
						<Sparkles className="w-4 h-4 text-[#ff6600]" />
						<span>Next-Gen Digital Agency</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
