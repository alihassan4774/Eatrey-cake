import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-scroll";

const quickLinks = [
  { name: "Home", to: "home" },
  { name: "Feature", to: "featuresection" },
  { name: "About", to: "about" },
  { name: "Chefs", to: "chefs" },
  { name: "Menu", to: "menu" },
  { name: "Testimonials", to: "testimonials" },
  { name: "Contact", to: "contact" },
];

const socialLinks = [
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/923244774074?text=Hello%20I%20want%20to%20reserve%20a%20table",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/ali_hassan_4774/",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/alihassan4774/Eatrey-cake/",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/ali-hassan-324410368/",
  },
];

const Footer = () => {
  return (
    <footer className="mt-24 bg-[#0B0B0B] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-500">
              Eatery <span className="text-white">.</span> Cafe
            </h2>

            <p className="mt-5 text-gray-400 leading-7 text-sm md:text-base">
              Experience exceptional dining with freshly prepared meals, premium
              ingredients, and warm hospitality. Every visit is crafted to
              create memorable moments for you and your loved ones.
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    className="inline-block cursor-pointer text-gray-400 hover:text-red-500 hover:translate-x-2 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5 text-gray-400">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-red-500 text-lg mt-1 shrink-0" />
                <p>Kot Murad Khan, Kasur, Punjab, Pakistan</p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-red-500 text-lg shrink-0" />
                <p>+92 324 4774074</p>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-red-500 text-lg shrink-0" />
                <p className="break-all">alihassan56827745@gmail.com</p>
              </div>

              <div className="flex items-start gap-4">
                <FaClock className="text-red-500 text-lg mt-1 shrink-0" />

                <p>
                  Mon – Fri : 7:00 AM – 9:00 PM
                  <br />
                  Sat – Sun : 11:00 AM – 10:00 PM
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              Stay Connected
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              Follow us for delicious updates, seasonal menus and exclusive
              restaurant offers.
            </p>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center text-lg hover:bg-red-500 hover:border-red-500 hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

       

        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Eatery Restaurant. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-gray-500 hover:text-red-500 transition">
              Privacy Policy
            </a>

            <a href="#" className="text-gray-500 hover:text-red-500 transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
