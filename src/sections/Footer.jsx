import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-300 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-orange-600/20 blur-3xl rounded-full -top-24 -left-24" />
        <div className="absolute w-72 h-72 bg-purple-800/20 blur-3xl rounded-full bottom-0 right-0" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-gradient-to-br from-orange-600 to-purple-800 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-purple-400 bg-clip-text text-transparent">
                Axia Digitech
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Your partner for digital growth and success in the modern business
              landscape.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Facebook Boosting",
                "Website Development",
                "Graphics Design",
                "Business Page Setup",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-orange-500 transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Grow Your Business",
                "About Company",
                "Meet Our Team",
                "Contact",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-orange-500 transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-orange-500 transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-purple-700/50 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2026 Axia Digitech. All rights reserved.</p>
          <p className="text-xs">
            Designed with precision & performance in mind
          </p>
        </div>
      </div>
    </footer>
  );
}
