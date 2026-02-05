import AboutUs from '../sections/AboutUs';
import ClientsPortfolio from '../sections/ClientsPortfolio';
import ContactUs from '../sections/ContactUs';
import GrowBusiness from '../sections/GrowBusiness';
import Hero from '../sections/Hero';
import Navbar from '../sections/Navbar';
import ServicesSection from '../sections/ServicesSection';

const Home = () => {
	return (
		<div className="bg-red-400 dark:bg-white max-w-7xl mx-auto rounded-3xl">
			{/* <HeroSection /> */}
			<Navbar />
			<Hero />
			{/* <OurServices /> */}
			<ServicesSection />

			<GrowBusiness />
			<AboutUs />
			{/* <MeetOurTeam /> */}
			<ClientsPortfolio />
			{/* <OurDirectors /> */}
			{/* <Testimonials /> */}
			<ContactUs />
		</div>
	);
};

export default Home;

// 1.navbar font size should be larger
// 2. start campaign button will be whatsapp icon
// 3. start campaign under section will be like (who are we)
// 4. Next-Gen Digital Marketing Agency design will be everywhere same
// 5. all subtitle will be removed like "Elevate Your Brand, Accelerate Your Growth"
// 6. six services cards will be 4 cards
// 7. service icon will be relavant
// 8. servicedescription with bullet poin
// 9. Learn More will be take service with whatsapp call
// 10. 95% Retention Rate will be center at cards
// 11. Service Taken From Axia Digitech, our respected clients
// 12. clientsportfolio BCL will be added
// 13. contact number, address in contact section will be changed
// 14. Follow Us -> fb, whatsapp , linkedin with related color
// 15. query form text palceholder text color will be dark
// 16. our team section making
// 17. clinet sectio will be under hero section
// 18. clinet review section making
// 19. footer same logo as navbar
// 20. 2026 will be 2025 footer
