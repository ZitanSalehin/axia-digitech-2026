import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
	return (
		<section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row items-center gap-12">
					{/* Left Content */}
					<div className="flex-1 text-center lg:text-left space-y-8">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
							<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
							<span className="text-sm text-purple-300">
								Now Available for New Projects
							</span>
						</div>

						<h1 className="text-5xl md:text-7xl font-bold leading-tight">
							<span className="block text-white mb-2">Transform Your</span>
							<span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
								Digital Presence
							</span>
						</h1>

						<p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
							We craft stunning digital experiences that captivate audiences and
							drive results. From cutting-edge web development to innovative
							marketing strategies, we bring your vision to life.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
								Start Your Project
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</button>
							<button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all duration-300">
								View Portfolio
							</button>
						</div>

						{/* Stats */}
						<div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
							{[
								{ label: 'Projects', value: '250+' },
								{ label: 'Clients', value: '180+' },
								{ label: 'Satisfaction', value: '99%' },
							].map(stat => (
								<div key={stat.label} className="text-center lg:text-left">
									<div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
										{stat.value}
									</div>
									<div className="text-sm text-gray-400 mt-1">{stat.label}</div>
								</div>
							))}
						</div>
					</div>

					{/* Right Content - 3D Card Effect */}
					<div className="flex-1 relative">
						<div className="relative group">
							{/* Glow Effect */}
							<div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity animate-gradient" />

							{/* Main Image Container */}
							<div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-2 border border-white/10 overflow-hidden">
								<img
									src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
									alt="Digital Analytics Dashboard"
									className="w-full h-auto rounded-2xl shadow-2xl"
								/>

								{/* Floating Elements */}
								<div className="absolute top-8 -right-4 bg-gradient-to-br from-purple-500 to-pink-500 px-6 py-3 rounded-xl shadow-xl backdrop-blur-sm border border-white/20 animate-float">
									<div className="text-white font-bold text-lg">+95% ROI</div>
									<div className="text-white/80 text-xs">Average Growth</div>
								</div>

								<div
									className="absolute bottom-8 -left-4 bg-gradient-to-br from-blue-500 to-purple-500 px-6 py-3 rounded-xl shadow-xl backdrop-blur-sm border border-white/20 animate-float"
									style={{ animationDelay: '1s' }}
								>
									<div className="text-white font-bold text-lg">24/7</div>
									<div className="text-white/80 text-xs">Support</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
