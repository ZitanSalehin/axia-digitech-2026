import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import digitalMarketing from "../assets/digital.webp";

const DigitalMarketing = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-20">
      <div className="">
        {/* Header */}
        <div className="text-start md:text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
            {t("serviceSection.title")}
          </h1>
        </div>

        {/* Content Grid with reversed layout on desktop */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="overflow-hidden rounded-lg shadow-md order-first md:order-last">
            <img
              src={digitalMarketing}
              alt="Digital marketing illustration"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text Content */}
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {t("serviceSection.description")}
            </p>

            <ul className="list-disc ml-5 space-y-3 text-gray-700 dark:text-gray-300">
              <li>{t("serviceSection.paid_advertising")}</li>
              <li>{t("serviceSection.social_media")}</li>
              <li>{t("serviceSection.content_marketing")}</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/contact"
            className="cursor-pointer px-6 py-2 rounded-md font-medium transition duration-300
               bg-indigo-600 hover:bg-indigo-700 text-white
               dark:py-2 dark:bg-gradient-to-tl dark:from-purple-600 dark:to-blue-500
               dark:hover:shadow-lg dark:hover:shadow-purple-500/30 dark:transform dark:hover:-translate-y-1"
          >
            {t("startButton")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
