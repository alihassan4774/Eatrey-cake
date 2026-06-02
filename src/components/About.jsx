import React from "react";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center mt-16 md:mt-24 px-4 sm:px-8 md:px-28 gap-6 md:gap-8 text-center md:text-left">
      
      <div className="md:w-1/2">
        <h3 className="text-gray-500 text-xs sm:text-sm mb-2">
          READ OUR STORY
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4 leading-snug">
          <div>We've been Making The</div>
          <div>Delicious Foods Since 1999</div>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae
          malesuada. Proin scelerisque risus et ipsum semper molestie sed in
          nisi. Ut rhoncus congue lectus, rhoncus venenatis leo malesuada id.
          <br />
          <br />
          Sed elementum vel felis sed scelerisque. In arcu diam, sollicitudin eu
          nibh ac, posuere tristique magna. You can use this template for your
          cafe or restaurant website. Please tell your friends about templatemo.
          Thanks
        </p>
      </div>

      
      <div className="md:w-1/2">
        <img
          src="IMAGES/bg2.jpg"
          alt="About"
          className="w-full h-auto rounded"
        />
      </div>
    </section>
  );
};

export default About;
