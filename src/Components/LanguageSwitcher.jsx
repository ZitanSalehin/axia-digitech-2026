import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="inline-flex bg-gray-200 dark:bg-gray-700 rounded-full p-1 select-none">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-4 py-1 rounded-full font-medium transition-colors duration-300 ${
          i18n.language === 'en'
            ? 'bg-amber-400 text-white shadow'
            : 'text-gray-700 dark:text-gray-300 hover:bg-amber-300 hover:text-white'
        }`}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('bn')}
        className={`px-4 py-1 rounded-full font-medium transition-colors duration-300 ${
          i18n.language === 'bn'
            ? 'bg-sky-600 text-white shadow'
            : 'text-gray-700 dark:text-gray-300 hover:bg-sky-500 hover:text-white'
        }`}
      >
        বাংলা
      </button>
    </div>
  );
};

export default LanguageSwitcher;
