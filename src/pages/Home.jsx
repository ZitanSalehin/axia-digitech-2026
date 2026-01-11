import AboutUs from "../sections/AboutUs";
import ClientsPortfolio from "../sections/ClientsPortfolio";
import ContactUs from "../sections/ContactUs";
import GrowBusiness from "../sections/GrowBusiness";
import Hero from "../sections/Hero";
import Navbar from "../sections/Navbar";
import OurDirectors from "../sections/OurDirectors";
import OurServices from "../sections/OurServices";
import ServicesSection from "../sections/ServicesSection";
import Testimonials from "../sections/Testimonials";

const Home = () => {
  return (
    <div className="bg-slate-900 dark:bg-white max-w-7xl mx-auto rounded-3xl">
      {/* <HeroSection /> */}
      <Navbar />
      <Hero />
      <OurServices />
      <ServicesSection />

      <GrowBusiness />
      <AboutUs />
      {/* <MeetOurTeam /> */}
      <ClientsPortfolio />
      <OurDirectors />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;
