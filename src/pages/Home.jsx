import AboutUs from '../sections/AboutUs';
import ContactUs from '../sections/ContactUs';
import GrowBusiness from '../sections/GrowBusiness';
import HeroSection from '../sections/HeroSection';
import MeetOurTeam from '../sections/MeetOurTeam';
import OurServices from '../sections/OurServices';
import ServiceProvidedBrands from '../sections/ServiceProvidedBrands';

const Home = () => {
	return (
		<div>
			<HeroSection />

			<ServiceProvidedBrands />

			<OurServices />

			<GrowBusiness />
			<hr className="max-w-72 md:max-w-6xl mx-auto" />
			<AboutUs />
			<hr className="max-w-72 md:max-w-6xl mx-auto" />
			<MeetOurTeam />
			<hr className="max-w-72 md:max-w-6xl mx-auto md:hidden" />
			<ContactUs />
		</div>
	);
};

export default Home;
