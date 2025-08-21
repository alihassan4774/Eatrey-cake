import React from "react";

const Chefs = () => {
  return (
    <section className="mt-24 px-6 md:px-28">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Meet our chefs</h2>
        <h4 className="text-gray-400 text-xs">THEY ARE NICE & FRIENDLY</h4>
      </div>

      {/* Chefs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {/* Chef 1 */}
        <div className="text-center group transition-transform duration-300 hover:scale-105">
          <img
            src="/IMAGES/bg10.jpg"
            alt="Chef 1"
            className="w-72 md:w-80 h-80 md:h-96 object-cover rounded-lg mb-4 shadow-lg"
          />
          <h3 className="text-3xl font-bold">New Catherine</h3>
          <p className="text-gray-500 uppercase text-xs mt-1">KITCHEN OFFICER</p>
        </div>

        {/* Chef 2 */}
        <div className="text-center group transition-transform duration-300 hover:scale-105">
          <img
            src="/IMAGES/bg12.jpg"
            alt="Chef 2"
            className="w-72 md:w-80 h-80 md:h-96 object-cover rounded-lg mb-4 shadow-lg"
          />
          <h3 className="text-3xl font-bold">Lindsay Perlen</h3>
          <p className="text-gray-500 uppercase text-xs mt-1">OWNER & MANAGER</p>
        </div>

        {/* Chef 3 */}
        <div className="text-center group transition-transform duration-300 hover:scale-105">
          <img
            src="/IMAGES/bg11.jpg"
            alt="Chef 3"
            className="w-72 md:w-80 h-80 md:h-96 object-cover rounded-lg mb-4 shadow-lg"
          />
          <h3 className="text-3xl font-bold">Isabella Grace</h3>
          <p className="text-gray-500 uppercase text-xs mt-1">PIZZA SPECIALIST</p>
        </div>
      </div>
    </section>
  );
};

export default Chefs;
