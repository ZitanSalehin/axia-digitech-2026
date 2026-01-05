import { useTranslation } from "react-i18next";
import teamImage from "../assets/meet-our-team.webp";

const MeetOurTeam = () => {
  const { t } = useTranslation();

  return (
    <div id="team" className="py-6 md:py-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="md:mb-5 text-center text-2xl md:text-2xl font-bold text-gray-900 dark:text-white">
          {t("sectionTitles.meetTeam")}
        </h3>
        <div className="md:flex md:items-start md:justify-between md:gap-4">
          {/* Image Section */}
          <div className="mt-5 md:mt-0 md:w-1/2">
            <div className="relative">
              <div className="rounded-lg h-64 md:h-96 overflow-hidden">
                <img
                  src={teamImage}
                  alt={t("sectionTitles.meetTeam")}
                  className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:translate-y-5"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-500 dark:text-gray-400">
                {t("team.intro")}
              </p>
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 leading-6.5">
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {t("team.description")}
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {t("team.values")}
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-1 rounded-md font-medium transition duration-300
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

export default MeetOurTeam;
