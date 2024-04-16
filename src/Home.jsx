import React from "react";
import "./index.css";
import HeroSection from "./components/css/HeroSection";
import Accordion from "./components/css/Accordion";
import Navbar from "./components/css/Navbar";
import Stats from "./components/css/Stats";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Stats />
      <Accordion />
    </>
  );
};

export default Home;
