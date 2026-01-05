import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import webDevImage from "../assets/website-development.webp";

const WebsiteDevelopment = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-20">
      {/* Page Header */}
      <div className="text-start md:text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
          {t("webDevelopment.title")}
        </h1>
      </div>

      {/* Section 1: General Website Development */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src={webDevImage}
            alt="Website Development"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {t("webDevelopment.description")}
          </p>
          <ul className="list-disc ml-5 space-y-3 text-gray-700 dark:text-gray-300">
            {t("webDevelopment.features", { returnObjects: true }).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
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
  );
};

export default WebsiteDevelopment;
