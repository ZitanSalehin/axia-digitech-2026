import teamImage from "../assets/meet-our-team.webp";

const OurTeam = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
      {/* Section 1 - Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Meet Our Dedicated Team
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          At AXIA Digitech, our strength lies in our people — a passionate, talented, and results-driven team that believes in innovation, creativity, and integrity.
        </p>
      </div>

      {/* Section 2 - Description 1 */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            A Culture of Excellence
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Every member of our team brings a unique perspective and specialized expertise to the table. Whether it’s creative design, strategic marketing, web development, or SEO, we work in harmony to craft seamless digital solutions.
            <br /><br />
            We foster a collaborative work culture where innovation is encouraged, growth is celebrated, and every idea counts. Our goal is not just to deliver services—but to drive meaningful digital transformation for our clients.
          </p>
        </div>

        {/* Team Image in the middle */}
        <div className="flex-1 rounded-lg overflow-hidden shadow-lg">
          <img
            src={teamImage}
            alt="Our Team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Section 3 - Description 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Driven by Passion & Results
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            From brainstorming to execution, we’re with you every step of the way. Our commitment to timelines, quality, and creativity ensures that you get more than just service—you get a partner dedicated to your growth.
            <br /><br />
            We believe in continuous learning, adapting to trends, and exceeding expectations. Trust us to be the team that listens, innovates, and delivers.
          </p>
        </div>

        {/* Optional secondary image or space for testimonials */}
        <div className="flex-1 hidden md:block"></div>
      </div>
    </div>
  );
};

export default OurTeam;
