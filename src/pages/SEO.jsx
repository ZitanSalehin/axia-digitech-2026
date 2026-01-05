import { Link } from "react-router-dom";
import seoImage from "../assets/seo.webp";

const SEO = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-20">
      <h1 className="text-start md:text-center text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
        SEO Services That Drive Results
      </h1>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={seoImage}
            alt="SEO Illustration"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Text Section */}
        <div>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Boost your website’s visibility and reach your ideal audience with
            our proven SEO strategies. From keyword optimization and technical
            audits to content enhancement and backlink building—we provide
            end-to-end solutions tailored to your business goals.
          </p>

          <ul className="list-disc pl-6 mt-6 space-y-3 text-gray-700 dark:text-gray-300">
  <li>On-Page SEO & Keyword Research</li>
  <li>High-Quality Backlink Building</li>
  <li>Local SEO Optimization</li>
  <li>Performance Monitoring & Reporting</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 flex justify-center">
          <Link
            to="/contact"
            className="cursor-pointer px-6 py-2 rounded-md font-medium transition duration-300
               bg-indigo-600 hover:bg-indigo-700 text-white
               dark:py-2 dark:bg-gradient-to-tl dark:from-purple-600 dark:to-blue-500
               dark:hover:shadow-lg dark:hover:shadow-purple-500/30 dark:transform dark:hover:-translate-y-1"
          >
            Let's get started
          </Link>
        </div>
    </div>
  );
};

export default SEO;
