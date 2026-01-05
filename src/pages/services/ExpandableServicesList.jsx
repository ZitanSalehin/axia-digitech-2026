import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import socialImg from "../../assets/business-setup.webp";
import digitalImg from "../../assets/digital.webp";
import designImg from "../../assets/graphics.webp";
import seoImg from "../../assets/seo.webp";
import webImg from "../../assets/website-development.webp";

const services = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Our digital marketing service offers a full-suite strategy to increase your brand's visibility across digital platforms. We dive deep into your brand's objectives to design campaigns that convert, combining the power of SEO, social media, email marketing, paid ads, and content strategy. Whether you're launching a product, building brand awareness, or generating leads, our team aligns every touchpoint with measurable goals. Through A/B testing, analytics, and constant refinement, we make sure your marketing dollars go further, driving sustainable growth across channels. With our data-driven approach, we ensure that every campaign not only looks great but performs exceptionally well.",
    image: digitalImg,
  },
  {
    slug: "website-development",
    title: "Web Development",
    description:
      "Our web development service builds high-performance websites using the latest technologies. We focus on both function and form — delivering sites that are lightning-fast, responsive on all devices, and optimized for user experience and SEO. From landing pages to full-scale e-commerce platforms, we tailor development to your specific business needs. Our team works collaboratively through discovery, wireframing, development, and launch — ensuring transparency and alignment at every step. Post-launch, we provide technical support, performance audits, and ongoing optimization to ensure long-term success. Your website isn’t just a digital presence — it’s a business engine, and we make sure it runs at peak performance.",
    image: webImg,
  },
  {
    slug: "graphics-design",
    title: "Graphics Design",
    description:
      "Stand out in a crowded marketplace with design that speaks volumes. Our graphic design services encompass brand identity development, social media creatives, print materials, infographics, presentations, packaging design, and more. We take time to understand your brand’s personality, tone, and visual language — and then craft designs that emotionally connect with your audience. Every color, shape, and element is chosen with purpose. Whether you’re launching a new brand or refreshing an old one, our design work ensures consistency, clarity, and creativity that sets you apart from competitors. Visual storytelling is at the heart of our approach — and we’re here to make your story unforgettable.",
    image: designImg,
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    description:
      "Managing social media is more than just posting regularly. Our social media management service is rooted in strategy, creativity, and analytics. We help brands grow meaningful online communities by crafting content that sparks conversation and engagement. From content calendars to post creation, community engagement, influencer outreach, and performance reporting — we manage everything for you. Our team uses advanced tools and insights to identify trends, optimal post times, and competitor benchmarks. Whether it’s Instagram, Facebook, LinkedIn, or TikTok — we tailor strategies platform-wise and audience-wise to maximize visibility and ROI. With us, your brand won’t just post — it will perform.",
    image: socialImg,
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    description:
      "SEO isn’t a one-time fix — it’s a long-term growth strategy. Our SEO service goes beyond basic keyword stuffing to deliver real, sustainable results. We conduct in-depth audits, keyword research, competitor analysis, and on-page + technical optimization. We also help with content strategy, blog optimization, link building, and schema markup. Whether you're targeting local SEO or global markets, we ensure your site architecture, internal linking, speed, and content quality all contribute to better rankings. Our reporting is transparent, detailed, and actionable. Let us help you appear where it matters most — on the first page of Google.",
    image: seoImg,
  },
];

const ExpandableServicesList = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (slug) => {
    setExpanded((prev) => (prev === slug ? null : slug));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
        Our Services
      </h2>

      <div className="space-y-6">
        {services.map((service) => {
          const isOpen = expanded === service.slug;
          return (
            <div
              key={service.slug}
              className="border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden bg-white dark:bg-white/5 shadow-sm"
            >
              {/* Title Row */}
              <button
                onClick={() => toggleExpand(service.slug)}
                className="cursor-pointer w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none hover:bg-gray-50 dark:hover:bg-white/10 transition"
              >
                <span className="text-lg font-medium text-gray-800 dark:text-white">
                  {service.title}
                </span>
                {isOpen ? (
                  <ChevronUp className="text-gray-600 dark:text-gray-300" />
                ) : (
                  <ChevronDown className="text-gray-600 dark:text-gray-300" />
                )}
              </button>

              {/* Expandable Content */}
              <div
                className={`transition-all duration-700 ease-in-out ${
                  isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-5 pb-5 pt-0 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full overflow-hidden object-contain mx-auto md:mx-0 mt-4 md:mt-2 hidden md:block"
                  />
                  <div className="md:col-span-3 text-gray-700 dark:text-gray-300">
                    <p className="mt-2 text-sm md:text-base text-justify">
                      {service.description}
                    </p>
                    <div className="mt-4">
                      <Link
                        to={`/services/${service.slug}`}
                        className="text-sm md:text-xl inline-flex items-center text-indigo-600 dark:text-purple-300 font-medium border-b"
                      >
                        Click to know in detail for this services <ChevronRight className="ml-1" size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpandableServicesList;
