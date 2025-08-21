import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full flex items-center justify-between px-6 md:px-16 py-4 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white text-black shadow-lg"
            : "bg-transparent text-white"
        }`}
      >
        {/* Logo */}
        <div className="text-2xl font-bold">
          Eatery{" "}
          <span className={scrolled ? "text-red-600" : "text-red-400"}>.</span>{" "}
          Cafe
        </div>

        {/* Desktop Menu */}
        <nav
          className={`hidden md:flex gap-8 ${
            scrolled ? "font-normal" : "font-bold"
          }`}
        >
          <Link to="home" smooth duration={500} className="cursor-pointer hover:text-red-500">
            Home
          </Link>
          <Link to="about" smooth duration={500} className="cursor-pointer hover:text-red-500">
            About
          </Link>
          <Link to="chefs" smooth duration={500} className="cursor-pointer hover:text-red-500">
            Chefs
          </Link>
          <Link to="menu" smooth duration={500} className="cursor-pointer hover:text-red-500">
            Menu
          </Link>
          <Link to="testimonials" smooth duration={500} className="cursor-pointer hover:text-red-500">
            Testimonials
          </Link>
          <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-red-500">
            Contact
          </Link>
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <div
            className={`text-sm cursor-pointer hover:text-red-500 ${
              scrolled ? "text-black font-normal" : "text-white font-bold"
            }`}
          >
            CALL NOW : +923244774074
          </div>
          <button
            onClick={() =>
              window.open(
                "https://wa.me/923244774074?text=Hello%20I%20want%20to%20reserve%20a%20table",
                "_blank"
              )
            }
            className={`px-6 py-2 transition-all ${
              scrolled
                ? "bg-red-600 text-white hover:bg-red-700 font-normal"
                : "bg-red-600 text-white hover:bg-gray-800 font-bold"
            }`}
          >
            Reserve a table
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col items-center justify-center gap-8 z-40`}
        >
          <Link to="home" smooth duration={500} onClick={() => setMenuOpen(false)} className="text-lg cursor-pointer hover:text-red-500">
            Home
          </Link>
          <Link to="about" smooth duration={500} onClick={() => setMenuOpen(false)} className="text-lg cursor-pointer hover:text-red-500">
            About
          </Link>
          <Link to="chefs" smooth duration={500} onClick={() => setMenuOpen(false)} className="text-lg cursor-pointer hover:text-red-500">
            Chefs
          </Link>
          <Link to="menu" smooth duration={500} onClick={() => setMenuOpen(false)} className="text-lg cursor-pointer hover:text-red-500">
            Menu
          </Link>
          <Link to="testimonials" smooth duration={500} onClick={() => setMenuOpen(false)} className="text-lg cursor-pointer hover:text-red-500">
            Testimonials
          </Link>
          <Link to="contact" smooth duration={500} onClick={() => setMenuOpen(false)} className="text-lg cursor-pointer hover:text-red-500">
            Contact
          </Link>
          <button
            onClick={() => {
              window.open(
                "https://wa.me/923244774074?text=Hello%20I%20want%20to%20reserve%20a%20table",
                "_blank"
              );
              setMenuOpen(false);
            }}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Reserve a table
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
