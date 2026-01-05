import strategyImage from "../assets/grow-your-business.webp"; // Use your relevant image here

const GrowBusiness = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Strategy to Grow Your Business
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          From vision to victory — we guide, consult, and empower your brand to reach its full digital potential.
        </p>
      </div>

      {/* Flex Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-1 rounded-lg overflow-hidden shadow-lg">
          <img
            src={strategyImage}
            alt="Growth strategy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Empowering Your Vision with Smart Strategy
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            We don’t just offer services—we build strategies that elevate your business. At AXIA Digitech, we begin with **deep understanding**: of your brand, your audience, and your goals. Our expert consultants work side-by-side with you to create a roadmap that’s actionable, measurable, and aligned with your dream.
            <br /><br />
            From brand positioning to performance marketing, we strategize every step—from concept to execution. Whether you need a stunning website, an aggressive SEO plan, or compelling social media, we design scalable systems that work.
            <br /><br />
            Every strategy is customized. No templates, no shortcuts. Just real solutions that work for your niche, industry, and growth stage.
          </p>

          <ul className="list-disc ml-6 space-y-3 text-gray-700 dark:text-gray-300">
            <li>Free consultation to understand your goals and challenges</li>
            <li>Personalized strategy for digital growth & engagement</li>
            <li>Creative, technical, and performance-driven execution</li>
            <li>Continuous optimization & reporting for long-term success</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GrowBusiness;
