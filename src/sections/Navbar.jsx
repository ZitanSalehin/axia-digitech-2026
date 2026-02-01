import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import axiaLogo from "../assets/axianew.png";

const navItems = [
  { label: "Services", id: "services" },
  { label: "Business Plan", id: "business-plan" },
  { label: "Clients", id: "clients" },
  // { label: "About", id: "about" },
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
      <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-white rounded-3xl">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <img src={axiaLogo} alt="Axia Digitech" className="h-8 w-auto" />
          </div>

          {/* ================= Desktop Nav ================= */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[#FF6600] font-medium relative group transition-colors duration-300"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-purple-800 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            <button className="px-6 py-2.5 bg-[#FF6600] text-white rounded-xl font-semibold hover:shadow-lg cursor-pointer">
              Get Started
            </button>
          </div>

          {/* ================= Mobile Toggle ================= */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ================= Mobile Nav ================= */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-lg border-t border-purple-800/30">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-gray-300 hover:text-orange-600 hover:bg-white/5 rounded-lg transition-all duration-300"
                >
                  {item.label}
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
