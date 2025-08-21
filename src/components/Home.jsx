import React from "react";

const Home = () => {
  return (
    <section
      className="h-[700px] bg-cover bg-left md:bg-center text-white flex flex-col justify-center pl-6 md:pl-28 text-center md:text-left"
      style={{ backgroundImage: "url('/IMAGES/bg4.jpg.jpg')" }}
    >
      <h3 className="text-xs md:text-sm font-extrabold mb-2">
        NEW RESTAURANT IN TOWN
      </h3>
      <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
        <div>Enjoy our special menus every</div>
        <div className="py-2 md:py-4">Sunday and Friday</div>
      </h1>
      <div className="flex md:justify-start justify-center">
        <button
          onClick={() => {
            window.open(
              "https://wa.me/923244774074?text=Hello%20I%20want%20to%20reserve%20a%20table",
              "_blank"
            );
          }}
          className="border w-32 md:w-40 border-white px-6 md:px-8 py-2 md:py-3 hover:bg-red-600 transition-all"
        >
          Reservation
        </button>
      </div>
    </section>
  );
};

export default Home;
