import React from "react";
import {
    ChevronRight,
    ArrowRight
  } from "lucide-react";

const OurWorkList = () => {
  return (
    <>
      <div id="work" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Work</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our successful projects and campaigns that
              have driven results for our clients.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Case Study 1 */}
            <div className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <img
                src="https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                srcSet=""
                className="h-56 w-full"
              />
              <div className="p-6">
                <div className="text-sm text-indigo-600 font-medium">
                  Social Media Campaign
                </div>
                <h3 className="mt-1 text-xl font-medium text-gray-900">
                  TechBase Audience Growth
                </h3>
                <p className="mt-2 text-gray-600">
                  Increased social media following by 200% and engagement by
                  150% in just 3 months.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-indigo-600 font-medium"
                >
                  View Case Study <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                srcSet=""
                className="h-56 w-full"
              />
              <div className="p-6">
                <div className="text-sm text-indigo-600 font-medium">
                  SEO Strategy
                </div>
                <h3 className="mt-1 text-xl font-medium text-gray-900">
                  Elevate Organic Traffic
                </h3>
                <p className="mt-2 text-gray-600">
                  Boosted organic search traffic by 127% and first-page rankings
                  for 50+ keywords.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-indigo-600 font-medium"
                >
                  View Case Study <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <img
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                srcSet=""
                className="h-56 w-full"
              />
              <div className="p-6">
                <div className="text-sm text-indigo-600 font-medium">
                  Content Marketing
                </div>
                <h3 className="mt-1 text-xl font-medium text-gray-900">
                  ACME Lead Generation
                </h3>
                <p className="mt-2 text-gray-600">
                  Generated 500+ qualified leads through strategic content
                  marketing and sales funnel optimization.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-indigo-600 font-medium"
                >
                  View Case Study <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition duration-300"
            >
              View All Projects <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWorkList;
