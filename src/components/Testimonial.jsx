import React from "react";

const Testimonials = () => {
  return (
    <section className="relative h-[430px] flex flex-col justify-center text-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://templatemo.com/templates/templatemo_515_eatery/images/testimonial-bg.jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div> {/* black overlay with 50% opacity */}

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-80">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-6 md:py-10">
          Testimonials
        </h1>

        <div className="mb-4 text-base sm:text-lg md:text-xl">
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          Maecenas faucibus mollis interdum ullamcouper nulla non.
        </div>

        <div className="text-lg sm:text-xl font-bold">
          Digital Carlson
          <div className="text-gray-300 text-xs sm:text-sm">
            pharetra quam sit amel
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
