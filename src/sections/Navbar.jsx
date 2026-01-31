import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import axiaLogo from "../assets/axianew.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl z-50 transition-all duration-500 ease-in-out"
      style={{ marginTop: scrolled ? "0rem" : "3.6rem" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-white rounded-3xl">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-30 flex items-center justify-center">
              <img src={axiaLogo} alt="" srcset="" />
            </div>
            {/* <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-purple-400 bg-clip-text text-transparent">
              AXIA DIGITECH
            </span> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Services", "Portfolio", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#FF6600] transition-colors duration-300 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-purple-800 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* <Theme /> */}
            <button className="px-6 py-2.5 bg-gradient-to-r from-orange-600 to-purple-800 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-600/50 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-lg border-t border-purple-800/30">
            <div className="px-4 py-4 space-y-3">
              {["Services", "Portfolio", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-gray-300 hover:text-orange-600 hover:bg-white/5 rounded-lg transition-all duration-300"
                >
                  {item}
                </a>
              ))}
              <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-purple-800 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
