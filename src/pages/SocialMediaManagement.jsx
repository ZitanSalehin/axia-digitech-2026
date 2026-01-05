import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import socialMediaImg from "../assets/business-setup.webp";

const SocialMediaManagement = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-20">
      <h1 className="text-start md:text-center text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
        {t("socialMedia.title")}
      </h1>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={socialMediaImg}
            alt="Social Media Management"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            {t("socialMedia.description")}
          </p>

          <ul className="list-disc pl-6 mt-6 space-y-3 text-gray-700 dark:text-gray-300">
            <li>{t("socialMedia.services.0")}</li>
            <li>{t("socialMedia.services.1")}</li>
            <li>{t("socialMedia.services.2")}</li>
            <li>{t("socialMedia.services.3")}</li>
            <li>{t("socialMedia.services.4")}</li>
            <li>{t("socialMedia.services.5")}</li>
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
          {t("socialMedia.button")}
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaManagement;
