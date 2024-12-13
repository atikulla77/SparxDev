import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

function Lodding() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <FadeLoader size={80}  color="#008cff" />
    </div>
  );
}

export default Lodding;
