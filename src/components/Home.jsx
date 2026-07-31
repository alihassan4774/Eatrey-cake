import React from "react";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <>
      <section
        className="relative z-0 min-h-screen bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/h1.png')" }}
      >
        <div
          className="
          max-w-[1400px]
          mx-auto

          flex
          flex-col-reverse
          md:flex-row

          items-center
          justify-center

          gap-10
          md:gap-6
          lg:gap-20

          px-6
          sm:px-8
          md:px-10
          lg:px-20

          pt-40
          md:pt-24
          lg:pt-40

          pb-12
        "
        >
        
          <div className="w-full md:w-1/2 flex flex-col">

           
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>

              <h3
                className="
                text-red-600
                font-bold
                tracking-[0.2em]

                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
              "
              >
                WELCOME TO
              </h3>
            </div>

           
            <h1
              className="
              font-bold
              leading-none
              text-white
              text-[58px]
              sm:text-[70px]
              md:text-[70px]
              lg:text-[100px]

              mb-6
            "
            >
              Eatery
              <span className="text-red-600">.</span>
              Cafe
            </h1>

           
            <div
              className="
              flex
              items-center
              flex-wrap

              gap-3

              font-bold
              tracking-widest

              text-base
              sm:text-lg
              md:text-lg
              lg:text-2xl
              text-white

              mb-5
            "
            >
              <span>GOOD FOOD</span>

              <span className="w-2 h-2 rounded-full bg-red-600"></span>

              <span>GOOD MOOD</span>
            </div>

            
            <div className="w-20 lg:w-24 h-[3px] bg-red-600 mb-6"></div>

           
            <p
              className="
              text-gray-300

              text-base
              sm:text-lg
              lg:text-xl

              leading-8

              max-w-md

              mb-8
            "
            >
              Discover delicious food, amazing chefs, and a memorable dining
              experience.
            </p>

            
            <button
              onClick={() => {
                window.open(
                  "https://wa.me/923244774074?text=Hello%20I%20want%20to%20reserve%20a%20table",
                  "_blank"
                );
              }}
              className="
                flex
                items-center
                justify-center
                gap-3

                bg-red-600
                hover:bg-red-700

                transition-all

                text-white
                font-bold

                w-full
                sm:w-fit

                px-8
                py-4

                rounded

                cursor-pointer
              "
            >
              Reserve a Table
              <ArrowRight size={20} />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
            w-full
            md:w-1/2

            flex
            justify-center
            items-center
          "
          >
            <img
              src="/images/Dish.png"
              alt="Dish"
              className="
                animate-float
                
                w-[260px]
                sm:w-[340px]
                md:w-[420px]
                lg:w-[800px]

                h-auto
              "
            />
          </div>
        </div>
      </section>

      
      <a
        href="https://wa.me/923244774074?text=Hello%20I%20want%20to%20reserve%20a%20table"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/whatsapp1.png"
          alt="Whatsapp"
          className="
          fixed

          bottom-5
          right-4

          sm:right-5
          lg:right-6

          w-14
          sm:w-16
          lg:w-20

          h-auto

          z-50

          cursor-pointer

          hover:scale-110

          transition-all
          duration-300
        "
        />
      </a>
    </>
  );
};

export default Home;