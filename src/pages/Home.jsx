import AboutUs from "../sections/AboutUs";
import ClientsPortfolio from "../sections/ClientsPortfolio";
import ContactUs from "../sections/ContactUs";
import GrowBusiness from "../sections/GrowBusiness";
import Hero from "../sections/Hero";
import Navbar from "../sections/Navbar";
import ServicesSection from "../sections/ServicesSection";

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
