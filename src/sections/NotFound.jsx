import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="fixed inset-0 z-[999] bg-slate-800 flex items-center justify-center px-4 min-h-screen">
      <div className="text-center">
        <h1 className="text-7xl sm:text-8xl font-extrabold text-red-600 mb-4">404</h1>
        <p className="text-xl sm:text-2xl text-white mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 text-sm sm:text-base rounded-md font-semibold transition duration-300
            bg-indigo-600 hover:bg-indigo-700 text-white shadow-md
            dark:bg-gradient-to-tl dark:from-purple-600 dark:to-blue-500
            dark:hover:shadow-lg dark:hover:shadow-purple-500/30"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
