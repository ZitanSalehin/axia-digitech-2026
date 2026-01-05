import { useTranslation } from "react-i18next";
import logo from "../assets/ax2.webp";
import useMediaQuery from "../utils/useMediaQuery.js";

const Footer = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const currentYear = new Date().getFullYear();

const servicesList = t("footer.servicesList", { returnObjects: true });

const companyList = [
  { href: "#grow-business", label: t("footer.companyLinks.growBusiness", "Grow Your Business") },
  { href: "#about", label: t("footer.companyLinks.aboutCompany", "About Company") },
  { href: "#team", label: t("footer.companyLinks.meetTeam", "Meet Our Team") },
  { href: "#contact", label: t("footer.companyLinks.contact", "Contact") }
];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <a href="#">
            <div className="flex gap-2 items-center">
              <img src={logo} alt="Axia Digitech Logo" className="w-9 h-9 mb-1.5" />
              <div className="text-white font-bold text-2xl dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-pink-500 via-purple-700 to-blue-500">
                Axia&nbsp;Digitech
              </div>
            </div>
            <p className="mt-4 text-gray-400">{t("footer.slogan")}</p>
          </a>

          {!isMobile ? (
            <>
              <div>
                <h4 className="text-lg font-medium text-white">{t("footer.services")}</h4>
                <ul className="mt-4 space-y-2">
                  {servicesList.map((service) => (
                    <li key={service}>
                      <a href="#services" className="text-gray-400 hover:text-white">
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
    <h4 className="text-lg font-medium text-white">{t("footer.company")}</h4>
    <ul className="mt-4 space-y-2">
      {companyList.map(({ href, label }) => (
        <li key={label}>
          <a href={href} className="text-gray-400 hover:text-white">
            {label}
          </a>
        </li>
      ))}
    </ul>
  </div>

              <div>
                <h4 className="text-lg font-medium text-white">{t("footer.legal.title", "Legal")}</h4>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#privacy" className="text-gray-400 hover:text-white">
                      {t("footer.legal.privacy")}
                    </a>
                  </li>
                  <li>
                    <a href="#terms" className="text-gray-400 hover:text-white">
                      {t("footer.legal.terms")}
                    </a>
                  </li>
                  <li>
                    <a href="#cookies" className="text-gray-400 hover:text-white">
                      {t("footer.legal.cookies")}
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="flex items-end">
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-lg font-medium text-white">{t("footer.services")}</h4>
                  <ul className="mt-4 space-y-2">
                    {servicesList.map((service) => (
                      <li key={service}>
                        <a href="#services" className="text-gray-400 hover:text-white">
                          {service}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-white">{t("footer.company")}</h4>
                  <ul className="mt-4 space-y-2">
                    {companyList.slice(0, 3).map(({ href, label }) => (
                      <li key={label}>
                        <a href={href} className="text-gray-400 hover:text-white">
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-white">{t("footer.legal.title", "Legal")}</h4>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#privacy" className="text-gray-400 hover:text-white">
                      {t("footer.legal.privacy")}
                    </a>
                  </li>
                  <li>
                    <a href="#terms" className="text-gray-400 hover:text-white">
                      {t("footer.legal.terms")}
                    </a>
                  </li>
                  <li>
                    <a href="#cookies" className="text-gray-400 hover:text-white">
                      {t("footer.legal.cookies")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            {t("footer.copyright", { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
