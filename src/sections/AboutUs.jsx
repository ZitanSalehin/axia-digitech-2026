import { useTranslation } from "react-i18next";
import aboutUs from "../assets/about-us.webp";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="py-10 md:py-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="md:mb-5 text-center text-2xl md:text-2xl font-bold text-gray-900 dark:text-white">
          {t("sectionTitles.aboutCompany")}
        </h3>

        <div className="md:flex md:items-start md:justify-between md:gap-4">
          {/* Mobile Image Section */}
          <div className="mt-5 md:mt-0 md:w-1/2 md:hidden block">
            <div className="relative">
              <div className="rounded-lg h-64 md:h-96 overflow-hidden">
                <img
                  src={aboutUs}
                  alt={t("sectionTitles.aboutCompany")}
                  className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:translate-4"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-500 dark:text-gray-400">
                {t("about.years")}
              </p>
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2">
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {t("about.subheading")}
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {t("about.overview")}
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {t("about.strength")}
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {t("about.mission")}
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 rounded-md font-medium transition duration-300
                  bg-indigo-600 hover:bg-indigo-700 text-white
                  dark:py-3 dark:bg-gradient-to-tl dark:from-purple-600 dark:to-blue-500
                  dark:hover:shadow-lg dark:hover:shadow-purple-500/30 dark:transform dark:hover:-translate-y-1"
              >
                {t("growSection.getStarted")}
              </a>
            </div>
          </div>

          {/* Desktop Image Section */}
          <div className="mt-10 md:mt-0 md:w-1/2 hidden md:block">
            <div className="relative">
              <div className="rounded-lg h-64 md:h-96 overflow-hidden">
                <img
                  src={aboutUs}
                  alt={t("sectionTitles.aboutCompany")}
                  className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:translate-4"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-500 dark:text-gray-400">
                {t("about.years")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
