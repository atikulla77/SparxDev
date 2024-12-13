import React from "react";
import Banner from "../Components/Home/Banner";
import Branding from "../Components/Home/Branding";
import WorkProcess from "../Components/Home/WorkProcess";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Banner />
      <Branding />
      <WorkProcess />
    </div>
  );
};

export default Home;
