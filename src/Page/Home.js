import React from "react";
import Banner from "../Components/Home/Banner";
import Branding from "../Components/Home/Branding";
import WorkProcess from "../Components/Home/WorkProcess";
import Footer from "../Components/Footer/Footer";
import Pricing from "../Components/Home/Pricing";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Banner />
      <Branding />
      <WorkProcess />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
