import { Menu, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import ServiceProvidedBrands from './ServiceProvidedBrands';

const PRIMARY = '#4b0082';
const SECONDARY = '#ff6600';

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [selectedMenu, setSelectedMenu] = useState('home');
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const menuItems = ['Home', 'Services', 'Projects', 'About', 'Contact'];

	return (
		<div className="fixed top-0 w-full z-50">
			{/* Top Brand Strip */}
			<div className={scrolled ? 'hidden' : ''}>
				<ServiceProvidedBrands />
			</div>

			<nav
				className={`transition-all duration-500 ${
					scrolled ? 'bg-[#3c214f]' : 'bg-[#32243d]'
				}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						{/* Logo */}
						<a href="#" className="flex items-center gap-3 group">
							<div className="relative">
								<div className="absolute inset-0 bg-[#ff6600] blur-lg opacity-70 group-hover:opacity-100 transition-opacity rounded-full" />
								<div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#4b0082] to-[#ff6600] flex items-center justify-center shadow-xl">
									<Sparkles className="w-6 h-6 text-white" />
								</div>
							</div>
							<div className="leading-tight">
								<span className="text-2xl font-bold text-white">
									Axia Digitech
								</span>
								<span className="block text-xs text-orange-200">
									Digital Excellence
								</span>
							</div>
						</a>

						{/* Desktop Menu */}
						<div className="hidden md:flex items-center gap-2">
							{menuItems.map(item => {
								const key = item.toLowerCase();
								return (
									<a
										key={item}
										href={`#${key}`}
										onClick={() => setSelectedMenu(key)}
										className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
											selectedMenu === key
												? 'text-white'
												: 'text-white/80 hover:text-white'
										}`}
									>
										{selectedMenu === key && (
											<span className="absolute inset-0 bg-[#ff6600] rounded-full shadow-lg" />
										)}
										<span className="relative z-10">{item}</span>
									</a>
								);
							})}
						</div>

						{/* Mobile Button */}
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
						>
							{mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<div className="md:hidden absolute top-full left-0 w-full bg-[#4b0082]/95 backdrop-blur-xl border-t border-white/10">
						<div className="px-4 py-6 space-y-2">
							{menuItems.map((item, index) => {
								const key = item.toLowerCase();
								return (
									<a
										key={item}
										href={`#${key}`}
										onClick={() => {
											setSelectedMenu(key);
											setMobileMenuOpen(false);
										}}
										className={`block px-6 py-3 rounded-xl text-base font-medium transition-all ${
											selectedMenu === key
												? 'bg-[#ff6600] text-white shadow-lg'
												: 'text-white/80 hover:bg-white/10'
										}`}
										style={{
											animation: `fadeSlide 0.3s ease forwards`,
											animationDelay: `${index * 0.08}s`,
											opacity: 0,
										}}
									>
										{item}
									</a>
								);
							})}
						</div>
					</div>
				)}
			</nav>

			{/* Mobile Animation */}
			<style>{`
				@keyframes fadeSlide {
					from {
						opacity: 0;
						transform: translateY(-10px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</div>
	);
};

export default Navbar;
