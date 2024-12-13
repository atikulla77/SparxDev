import React, { useState } from "react";
import "./App.css";
import Home from "./Page/Home";
import Lodding from "./Components/Lodding/Lodding";

function App() {
  const [showLodding, setshowLodding] = useState(true);
  setTimeout(() => {
    setshowLodding(false);
  }, 2500);

  return (
    <div className="bg-[#fff] w-full h-full relative">
      {showLodding ? <Lodding /> : <Home />}
    </div>
  );
}

export default App;
