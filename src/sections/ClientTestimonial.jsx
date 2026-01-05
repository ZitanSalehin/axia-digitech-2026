import React from "react";


const ClientTestimonial = () => {
  return (
    <>
      <div className="bg-indigo-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-xl text-indigo-100 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
                    alt=""
                    srcSet=""
                    className="h-12 w-12 rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Sarah Johnson
                  </h3>
                  <p className="text-gray-600">CEO, TechBase</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "The team at DIGITALEDGE transformed our online presence. Their
                strategic approach to digital marketing has been a game-changer
                for our business."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
                    alt=""
                    srcSet=""
                    className="h-12 w-12 rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Mark Williams
                  </h3>
                  <p className="text-gray-600">Marketing Director, Elevate</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "The ROI we've seen from our campaigns with DIGITALEDGE has been
                exceptional. They truly understand our target audience and how
                to reach them effectively."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
                    alt=""
                    srcSet=""
                    className="h-12 w-12 rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Lisa Chen
                  </h3>
                  <p className="text-gray-600">Founder, NorthStar</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "Working with DIGITALEDGE has been a pleasure. Their data-driven
                approach and creative strategies have helped us achieve our
                business goals ahead of schedule."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientTestimonial;
