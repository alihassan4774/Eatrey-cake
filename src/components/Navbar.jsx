import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-10 py-4 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-lg text-black"
            : "bg-transparent text-white"
        }`}
      >
     
        <div className="text-2xl font-bold">
          Eatery{" "}
          <span className={scrolled ? "text-red-600" : "text-red-400"}>.</span>{" "}
          Cafe
        </div>

        
        <div
          className={`hidden md:flex gap-4 lg:gap-8 ${
            scrolled ? "font-normal" : "font-bold"
          }`}
        >
          <Link to="home" smooth duration={500} className="cursor-pointer hover:text-red-500">
            Home
          </Link>

          <Link
            to="featuresection"
            smooth
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            Feature
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

          <Link
            to="testimonials"
            smooth
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            Testimonials
          </Link>

          <Link
            to="contact"
            smooth
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            Contact
          </Link>
        </div>

       
        <div className="hidden lg:flex items-center gap-4">
          <div
            className={`hidden lg:block text-sm ${
              scrolled ? "font-normal" : "font-bold"
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
            className={`px-6 py-2 transition ${
              scrolled
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-red-600 hover:bg-gray-800 text-white font-bold"
            }`}
          >
            Reserve a table
          </button>
        </div>

       






        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden"
        >
          <Menu size={30} />
        </button>
      </nav>

      
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-white z-50 shadow-2xl transform transition-transform duration-300 md:hidden ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
       
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold">
            Eatery
            <span className="text-red-600">.</span>
            Cafe
          </h2>

          <button onClick={closeMenu}>
            <X size={28} />
          </button>
        </div>

      
        <div className="flex flex-col p-6 gap-6 text-lg font-medium">

          <Link to="home" smooth duration={500} onClick={closeMenu}>
            Home
          </Link>

          <Link to="featuresection" smooth duration={500} onClick={closeMenu}>
            Feature
          </Link>

          <Link to="about" smooth duration={500} onClick={closeMenu}>
            About
          </Link>

          <Link to="chefs" smooth duration={500} onClick={closeMenu}>
            Chefs
          </Link>

          <Link to="menu" smooth duration={500} onClick={closeMenu}>
            Menu
          </Link>

          <Link to="testimonials" smooth duration={500} onClick={closeMenu}>
            Testimonials
          </Link>

          <Link to="contact" smooth duration={500} onClick={closeMenu}>
            Contact
          </Link>

          <button
            onClick={() => {
              window.open(
                "https://wa.me/923244774074?text=Hello%20I%20want%20to%20reserve%20a%20table",
                "_blank"
              );
              closeMenu();
            }}
            className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition"
          >
            Reserve a table
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;