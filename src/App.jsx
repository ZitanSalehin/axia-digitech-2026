import { Route, Routes } from 'react-router-dom';
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
} from './pages/index.jsx';
import ExpandableServicesList from './pages/services/ExpandableServicesList.jsx';
import ContactUs from './sections/ContactUs.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import NotFound from './sections/NotFound.jsx';
import ScrollToTop from './utils/ScrollToTop.jsx';

export default function App() {
	return (
		<div className="min-h-screen bg-[#4B0082] text-[#FF6600]">
			<ScrollToTop />
			<Navbar />
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
