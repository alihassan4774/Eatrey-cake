import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white px-4 sm:px-8 md:px-28 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">

        {/* Box 1: Find Us */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4">Find Us</h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            123 Nulla a cursus rhoncus, <br />
            Augue sem viverra 10870 <br />
            Id ultricies sapien
          </p>
        </div>

        {/* Box 2: Reservation */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4">Reservation</h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            090-080-0650 | 090-070-0430 <br />
            info@company.com <br />
            LINE: eatery247
          </p>
        </div>

        {/* Box 3: Open Hours */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4">Open Hours</h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Monday: Closed <br />
            Tuesday - Friday: 7:00 AM - 9:00 PM <br />
            Saturday - Sunday: 11:00 AM - 10:00 PM
          </p>
        </div>

        {/* Box 4: Social Media + Description */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg sm:text-xl font-bold mb-4">Follow Us</h3>
          <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left mb-4">
            Stay connected with us on social media for updates, offers, and more!
          </p>
          <div className="flex gap-4 text-red-500 text-lg">
            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* Footer bottom */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm sm:text-base">
        &copy; 2025 Eatery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
