import aboutUs from "../assets/about-us.webp";

const AboutUs = () => {
  return (
    <div className="py-5 px-2 md:px-12 lg:px-24">
      <div className="mt-16 max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">
        {/* Text Section */}
        <div className="text-left lg:text-right space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We are a passionate team of digital experts helping businesses grow
            through smart digital marketing, design, and web development.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Our Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                At AXIA Digitech, we aim to empower brands with innovative and
                data-driven marketing strategies. We help businesses thrive in
                the ever-evolving digital landscape by delivering measurable
                results.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Why Choose Us?
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Experienced & creative professionals</li>
                <li>Client-focused and result-oriented approach</li>
                <li>Customized strategies for every business</li>
                <li>Transparent reporting & measurable growth</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="rounded-lg h-64 md:h-96 overflow-hidden shadow-lg">
          <img
            src={aboutUs}
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-20">
        <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-10">
          Meet Our Team
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center px-6 md:px-0">
          {/* Team Member 1 */}
          <div className="bg-gray-100 dark:bg-white/10 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              src="https://randomuser.me/api/portraits/men/31.jpg"
              alt="Digital Marketer"
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
              Md. Rokonuzzaman
            </h4>
            <p className="text-gray-600 dark:text-gray-300">Digital Marketer</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-100 dark:bg-white/10 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              src="https://randomuser.me/api/portraits/men/60.jpg"
              alt="Web Developer"
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
              Zitan Salehin
            </h4>
            <p className="text-gray-600 dark:text-gray-300">Web Developer</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-100 dark:bg-white/10 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              src="https://randomuser.me/api/portraits/men/64.jpg"
              alt="Graphics Designer"
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
              Abid Iqbal
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Graphics Designer
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="bg-gray-100 dark:bg-white/10 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/34.jpg"
              alt="Web Developer"
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
              Atiar Rahman
            </h4>
            <p className="text-gray-600 dark:text-gray-300">SEO Specialist</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          Let’s Grow Your Business Together
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Schedule a free consultation with our team and let's discuss how we
          can help you.
        </p>
        <div className="mt-8 flex justify-center md:justify-center">
          <button
            className="px-6 py-3 cursor-pointer rounded-md font-medium transition duration-300
               bg-indigo-600 hover:bg-indigo-700 text-white
               dark:py-3 dark:bg-gradient-to-tl dark:from-purple-600 dark:to-blue-500
               dark:hover:shadow-lg dark:hover:shadow-purple-500/30 dark:transform dark:hover:-translate-y-1"
          >
            Let’s Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
