import React from "react";

// import components
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

// import parts
import Experience from "../parts/HomePage/Experience";
import Hero from "../parts/HomePage/Hero";
import Portfolio from "../parts/HomePage/Portfolio";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Hero />
        <Feature />
        {/* <About /> */}
        <Experience />
        <Portfolio />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Home;
