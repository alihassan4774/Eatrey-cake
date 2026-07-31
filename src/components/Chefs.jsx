import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const chefs = [
  {
    id: 1,
    name: "New Catherine",
    role: "Kitchen Officer",
    image: "/images/chef1.jpg",
    whatsapp:
      "https://wa.me/923244774074?text=Hello%20I%20want%20to%20reserve%20a%20table",
    instagram: "https://www.instagram.com/ali_hassan_4774/",
    linkedin: "https://www.linkedin.com/in/ali-hassan-324410368/",
  },
  {
    id: 2,
    name: "Lindsay Perlen",
    role: "Owner & Manager",
    image: "/images/chef2.jpg",
    whatsapp:
      "https://wa.me/923244774074?text=Hello%20I%20want%20to%20reserve%20a%20table",
    instagram: "https://www.instagram.com/ali_hassan_4774/",
    linkedin: "https://www.linkedin.com/in/ali-hassan-324410368/",
  },
  {
    id: 3,
    name: "Isabella Grace",
    role: "Pizza Specialist",
    image: "/images/chef3.jpg",
    whatsapp:
      "https://wa.me/923244774074?text=Hello%20I%20want%20to%20reserve%20a%20table",
    instagram: "https://www.instagram.com/ali_hassan_4774/",
    linkedin: "https://www.linkedin.com/in/ali-hassan-324410368/",
  },
];

const ChefCard = ({ chef }) => (
  <div className="group flex justify-center">
    <div className="relative w-full max-w-[360px]">
      <div className="overflow-hidden rounded-3xl shadow-xl">
        <img
          src={chef.image}
          alt={chef.name}
          className="w-full h-[430px] object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 -bottom-14 w-[82%] bg-white rounded-3xl shadow-2xl py-6 px-4 text-center transition duration-500 group-hover:-translate-y-2">
        <h3 className="text-3xl font-bold">{chef.name}</h3>

        <p className="uppercase tracking-[2px] text-red-500 text-xs mt-2">
          {chef.role}
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href={chef.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-full border border-yellow-600 text-yellow-600 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition"
          >
            <FaWhatsapp />
          </a>

          <a
            href={chef.instagram}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-full border border-yellow-600 text-yellow-600 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition"
          >
            <FaInstagram />
          </a>

          <a
            href={chef.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-full border border-yellow-600 text-yellow-600 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Chefs = () => {
  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 bg-white">
      <div className="text-center mb-16">
        <p className="uppercase tracking-[4px] text-red-600 text-sm font-semibold">
          Our Experts
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">Meet our chefs</h2>

        <p className="uppercase text-gray-500 text-xs tracking-[3px] mt-3">
          They are nice & friendly
        </p>
      </div>

      <div className="block md:hidden">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
        >
          {chefs.map((chef) => (
            <SwiperSlide key={chef.id}>
              <div className="pb-20">
                <ChefCard chef={chef} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-16">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef} />
        ))}
      </div>

      <div className="h-16"></div>
    </section>
  );
};

export default Chefs;
