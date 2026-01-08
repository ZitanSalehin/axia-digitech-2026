import { Route, Routes } from "react-router-dom";
import DesignConceptShowcase from "./pages/DesignConceptShowcase.jsx";
import {
  AboutUs,
  DigitalMarketing,
  GraphicsDesign,
  GrowBusinessPage,
  Home,
  OurTeam,
  SEO,
  SocialMediaManagement,
  WebsiteDevelopment,
} from "./pages/index.jsx";
import ExpandableServicesList from "./pages/services/ExpandableServicesList.jsx";
import ContactUs from "./sections/ContactUs.jsx";
import Footer from "./sections/Footer.jsx";
import { default as DigitalMarketingHero } from "./sections/Hero.jsx";
import NotFound from "./sections/NotFound.jsx";
import ServiceProvidedBrands from "./sections/ServiceProvidedBrands.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* <GlobalBackground /> */}
      <ScrollToTop />
      {/* <Navbar /> */}
      <ServiceProvidedBrands />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<ExpandableServicesList />} />
        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketing />}
        />
        <Route
          path="/services/website-development"
          element={<WebsiteDevelopment />}
        />
        <Route path="/test" element={<DigitalMarketingHero />} />
        <Route path="/design" element={<DesignConceptShowcase />} />
        <Route path="/services/graphics-design" element={<GraphicsDesign />} />
        <Route
          path="/services/social-media-management"
          element={<SocialMediaManagement />}
        />
        <Route path="/services/seo" element={<SEO />} />

        <Route path="/company/about-us" element={<AboutUs />} />
        <Route path="/company/our-team" element={<OurTeam />} />
        <Route
          path="/company/business-srategy"
          element={<GrowBusinessPage />}
        />

        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

// <div className="flex justify-center mb-6">
//   <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-800/20 to-orange-600/20 border border-purple-600/30 rounded-full backdrop-blur-sm">
//     <Users className="w-4 h-4 text-purple-500" />
//     <span className="text-sm text-gray-300 font-medium">
//       Expert Team
//     </span>
//   </div>
// </div>

// {/* Heading */}
// <h3
//   className={`text-center text-4xl md:text-5xl font-bold text-white mb-16 transition-all duration-1000 ${
//     isVisible.team
//       ? "opacity-100 translate-y-0"
//       : "opacity-0 translate-y-10"
//   }`}
// >
//   Meet Our{" "}
//   <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-600 to-orange-600">
//     Dream Team
//   </span>
// </h3>
