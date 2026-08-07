import React from "react";

const About = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between mt-16 md:mt-24 px-6 sm:px-8 md:px-12 lg:px-28 gap-10 lg:gap-8">
      <div className="w-full md:w-1/2  md:text-left">
        <div className="flex items-center  md:justify-start gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-red-600"></span>
          <h3 className="text-red-600 text-sm font-medium uppercase tracking-wider">
            Read Our Story
          </h3>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-5">
          <div>We've been Making The</div>
          <div>
            Delicious Foods Since <span className="text-red-600">1999</span>
          </div>
        </h2>

        <div className="flex items-center md:justify-start gap-2 mb-6">
          <div className="w-20 lg:w-32 h-[3px] bg-red-600"></div>
          <span className="w-2 h-2 rounded-full bg-red-600"></span>
        </div>

        <p className="text-gray-500 text-sm sm:text-base leading-7">
          Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae
          malesuada. Proin scelerisque risus et ipsum semper molestie sed in
          nisi. Ut rhoncus congue lectus, rhoncus venenatis leo malesuada id.
          <br />
          <br />
          Sed elementum vel felis sed scelerisque. In arcu diam, sollicitudin eu
          nibh ac, posuere tristique magna. You can use this template for your
          cafe or restaurant website. Please tell your friends about templatemo.
          Thanks.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/about.jpg"
          alt="About"
          className="w-full max-w-md md:max-w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default About;
