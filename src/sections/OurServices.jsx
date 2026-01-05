import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import digitalMarketingImg from "../assets/digital.webp";
import graphicsDesignImg from "../assets/graphics.webp";
// import seoImg from "../assets/seo.webp";
import socialMediaImg from "../assets/business-setup.webp";
import webDevelopmentImg from "../assets/website-development.webp";
import useMediaQuery from "../utils/useMediaQuery.js";

const OurServices = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const services = [
    {
      title: t("services.digitalMarketing"),
      description: t("services.digitalMarketingDesc"),
      image: digitalMarketingImg,
      link: "/services/digital-marketing",
    },
    {
      title: t("services.websiteDevelopment"),
      description: t("services.websiteDevelopmentDesc"),
      image: webDevelopmentImg,
      link: "/services/website-development",
    },
    {
      title: t("services.graphicsDesign"),
      description: t("services.graphicsDesignDesc"),
      image: graphicsDesignImg,
      link: "/services/graphics-design",
    },
    {
      title: t("services.socialMediaManagement"),
      description: t("services.socialMediaManagementDesc"),
      image: socialMediaImg,
      link: "/services/social-media-management",
    },
    // {
    //   title: t("services.seo"),
    //   description: t("services.seoDesc"),
    //   image: seoImg,
    //   link: "/services/seo",
    // },
  ];

  return (
    <div id="services" className="py-5 md:py-2 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Link to="/services" className="text-2xl font-bold text-gray-900 dark:text-white">
            {t("sectionTitles.ourServices")}
          </Link>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("services.servicesIntro")}
          </p>
        </div>
{/* !isMobile ? ( */}
        {
          <div className="mt-10 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Link
                to={service.link}
                key={index}
                className="bg-sky-50 hover:bg-sky-100 dark:bg-white/10 hover:dark:bg-white/20 border border-white/30 dark:border-white/20 rounded-lg shadow-sm hover:shadow-md flex flex-col transition-transform duration-300 hover:-translate-y-3"
              >
                <div className="w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain rounded-tr-md rounded-tl-md"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-300 text-center">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <p className="inline-flex items-center text-indigo-600 dark:text-purple-300 font-medium">
                      {t("services.learnMore")} <ChevronRight size={16} className="ml-1" />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        // ) : (
        //   <div className="mt-16 grid gap-6">
        //     {services.map((service, index) => (
        //       <Link
        //         to={service.link}
        //         key={index}
        //         className="flex h-44 bg-gray-100 hover:bg-slate-200 dark:bg-white/10 hover:dark:bg-white/20 border border-white/30 dark:border-white/20 rounded-lg shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-3"
        //       >
        //         <div className="w-1/2 h-full">
        //           <img
        //             src={service.image}
        //             alt={service.title}
        //             className="w-full h-full object-fill rounded-l-lg"
        //           />
        //         </div>
        //         <div className="w-1/2 flex flex-col justify-between p-2 h-full">
        //           <p className="mt-3 text-gray-600 dark:text-gray-300 text-center">
        //             {service.description}
        //           </p>
        //         </div>
        //       </Link>
        //     ))}
        //   </div>
        // )
        }
      </div>
    </div>
  );
};

export default OurServices;
