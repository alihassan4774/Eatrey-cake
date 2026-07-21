import {
  FiCoffee,
  FiHeart,
  FiTag,
} from "react-icons/fi";

import { LuChefHat } from "react-icons/lu";

const features = [
  {
    icon: <FiCoffee />,
    title: "Quality Food",
    description: "We use only the freshest ingredients for you.",
  },
  {
    icon: <LuChefHat />,
    title: "Experienced Chefs",
    description: "Our chefs have years of experience.",
  },
  {
    icon: <FiHeart />,
    title: "Best Service",
    description: "We provide the best service for our customers.",
  },
  {
    icon: <FiTag />,
    title: "Affordable Price",
    description: "Enjoy delicious food at affordable prices.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0a0a0a] border-b border-gray-300">
      <div className="max-w-7xl mx-auto md:ml-40 px-4 ml-4 py-26">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col group"
            >
              <div className="text-red-500 text-4xl mb-4 transition-all duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="text-white font-semibold text-xl mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-md leading-relaxed max-w-[200px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
