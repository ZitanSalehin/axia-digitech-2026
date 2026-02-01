import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import axiaLogo from "../assets/axianew.png";

const navItems = [
  { label: "Services", id: "services" },
  { label: "Business Plan", id: "business-plan" },
  { label: "Clients", id: "clients" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

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
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500
          ${
            scrolled
              ? "bg-white/10 backdrop-blur-2xl border-b-2 border-orange-400 shadow-lg shadow-black/10"
              : "bg-slate-900 dark:bg-white rounded-3xl"
          }`}
      >
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer lg:px-0">
            <img src={axiaLogo} alt="Axia Digitech" className="h-6 w-auto" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[#FF6600] font-medium relative group transition-colors duration-300"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-purple-800 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#FF6600] p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 rounded-b-3xl">
            <div className="px-0 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-slate-600 hover:text-orange-600 hover:bg-white/5 rounded-lg transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
