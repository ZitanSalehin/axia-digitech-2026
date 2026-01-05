import { useTranslation } from 'react-i18next';
import banner from '../assets/banner.webp';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-18 md:pt-20 pb-5 md:pb-12 gap-10">
      
      {/* Left Side - Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-14">
          {t('hero.tagline1')} <br />
          {t('hero.tagline2')}
        </h1>
        <p className="mt-6 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-8">
          {t('hero.intro')}
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2">
        <img
          src={banner}
          alt={t('hero.imageAlt')}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default HeroSection;
