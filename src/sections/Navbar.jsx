import { Menu, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';
// import Theme from '../forms/Theme.jsx';

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [selectedMenu, setSelectedMenu] = useState('home');
	const [scrolled, setScrolled] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		const handleMouseMove = e => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-500 ${
				scrolled
					? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-500/10'
					: 'bg-transparent'
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo with Glow Effect */}
					<a href="#" className="flex items-center gap-3 group relative">
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
							<div className="relative w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
								<Sparkles className="w-6 h-6 text-white" />
							</div>
						</div>
						<div className="flex flex-col">
							<span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
								Axia Digitech
							</span>
							<span className="text-xs text-purple-300/70 -mt-1">
								Digital Excellence
							</span>
						</div>
					</a>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-2">
						{['Home', 'Services', 'About', 'Team', 'Contact'].map(item => (
							<a
								key={item}
								href={`#${item.toLowerCase()}`}
								onClick={() => setSelectedMenu(item.toLowerCase())}
								className={`relative px-6 py-2.5 text-sm font-medium transition-all duration-300 rounded-full group ${
									selectedMenu === item.toLowerCase()
										? 'text-white'
										: 'text-gray-300 hover:text-white'
								}`}
							>
								{selectedMenu === item.toLowerCase() && (
									<span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
								)}
								<span className="relative z-10">{item}</span>
								{selectedMenu !== item.toLowerCase() && (
									<span className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
								)}
							</a>
						))}
						<button className="ml-4 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
							Get Started
						</button>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="md:hidden relative w-10 h-10 flex items-center justify-center text-white bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
					>
						{mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/10">
					<div className="px-4 py-6 space-y-2">
						{['Home', 'Services', 'About', 'Team', 'Contact'].map(
							(item, index) => (
								<a
									key={item}
									href={`#${item.toLowerCase()}`}
									onClick={() => {
										setSelectedMenu(item.toLowerCase());
										setMobileMenuOpen(false);
									}}
									className={`block px-6 py-3 rounded-xl font-medium transition-all ${
										selectedMenu === item.toLowerCase()
											? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
											: 'text-gray-300 hover:bg-white/5'
									}`}
									style={{
										animation: `slideDown 0.3s ease-out forwards ${
											index * 0.1
										}s`,
										opacity: 0,
									}}
								>
									{item}
								</a>
							)
						)}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
