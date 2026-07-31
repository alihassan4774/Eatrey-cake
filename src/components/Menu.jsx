import React from "react";

const Menu = () => {
  return (
    <section className="mt-24">
      {/* Section Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Menus</h2>
        <h4 className="text-gray-400 text-xs">TEA TIME & DINING</h4>
      </div>

      {/* Menu Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "/images/Menu1.jpg",
          "/images/Menu2.jpg",
          "/images/Menu3.jpg",
          "/images/Menu4.jpg",
          "/images/Menu5.jpg",
          "/images/Menu6.jpg",
        ].map((src, index) => (
          <div
            key={index}
            className="overflow-hidden group"
          >
            <img
              src={src}
              alt={`Menu ${index + 1}`}
              className="w-full h-60 sm:h-72 md:h-80 object-cover transform group-hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
