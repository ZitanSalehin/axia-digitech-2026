import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import graphics from "../assets/graphics.webp";

const GraphicsDesign = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-20">
      <div className="">
        {/* Header */}
        <div className="text-start md:text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
            {t("graphicsDesign.title")}
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-lg shadow-md">
            <img
              src={graphics}
              alt="Graphic design sample"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {t("graphicsDesign.description")}
            </p>

            <ul className="list-disc ml-5 space-y-3 text-gray-700 dark:text-gray-300">
              {t("graphicsDesign.features", { returnObjects: true }).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
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

export default GraphicsDesign;
