import AboutUs from "../sections/AboutUs";
import ContactUs from "../sections/ContactUs";
import GrowBusiness from "../sections/GrowBusiness";
import Hero from "../sections/Hero";
import MeetOurTeam from "../sections/MeetOurTeam";
import Navbar from "../sections/Navbar";
import OurServices from "../sections/OurServices";

const Home = () => {
  return (
    <div className="bg-white/10 max-w-7xl mx-auto rounded-3xl">
      {/* <HeroSection /> */}
      <Navbar />
      <Hero />
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
