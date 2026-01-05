import { useTranslation } from "react-i18next";
import growBusiness from "../assets/grow-your-business.webp";

const GrowBusiness = () => {
  const { t } = useTranslation();

  return (
    <div id="grow-business" className="py-10 md:py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="md:mb-4 text-center text-2xl md:text-2xl font-bold text-gray-900 dark:text-white">
          {t("sectionTitles.growWithUs")}
        </h3>

        <div className="md:flex md:items-start md:justify-between md:gap-6">
          {/* Image Section */}
          <div className="mt-5 md:mt-0 md:w-1/2">
            <div className="relative">
              <div className="rounded-lg h-64 md:h-96 overflow-hidden">
                <img
                  src={growBusiness}
                  alt={t("sectionTitles.growWithUs")}
                  className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:-translate-x-4"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-500 dark:text-gray-400">
                {t("growSection.heading")}
              </p>
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2">
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {t("growSection.description")}
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {t("growSection.extended")}
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {t("growSection.cta")}
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
        </div>
      </div>
    </div>
  );
};

export default GrowBusiness;
