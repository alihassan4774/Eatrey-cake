import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Chefs from "./components/Chefs";
import Menu from "./components/Menu";
import Testimonials from "./components/testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {


  return (
    <div className="font-poppins">
      <Navbar />
      
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="chefs"><Chefs /></div>
      <div id="menu"><Menu /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="contact"><Contact /></div>
      
      <Footer />

    </div>
  );
}

export default App;
