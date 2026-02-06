import axiaLogo from "../assets/axianew.png";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl mt-10 text-slate-700 mb-5">
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img src={axiaLogo} alt="" srcset="" className="w-28" />

              {/* <h2 className="text-2xl font-bold text-slate-700 uppercase">
                Axia Digitech
              </h2> */}
            </div>
            <p className="text-slate-600 leading-relaxed max-w-md">
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
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-orange-600/50 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2025 Axia Digitech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
