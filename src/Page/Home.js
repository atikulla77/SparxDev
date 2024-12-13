import React from "react";
import Navber from "../Components/Navbar/Navbar";
import bg from "../Image/background.png";

import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="w-full relative flex items-end justify-center overflow-hidden bg-[#d5d5d5] pt-[5rem]">
      <Navber />
      <div className="absolute top-0 left-0 w-full h-full">
        <img src={bg} className="w-full h-full object-cover" />
      </div>
      <div className="container [@media(min-width:650px)]:h-[38rem] [@media(min-width:460px)]:h-[32rem] h-[29rem] w-full flex items-start mx-auto relative ">
        <div className="w-[100%] z-10 GeologicaFont text-black relative flex flex-col justify-center text-center [@media(min-width:460px)]:pt-[7rem] pt-[6rem]">
          <h1 className="[@media(min-width:780px)]:!text-[70px] [@media(min-width:650px)]:!text-[60px] [@media(min-width:460px)]:text-[40px] text-[28px] tracking-[1px]">Filling 83b Tax Forms</h1>
          <p className="[@media(min-width:780px)]:!text-[15px] [@media(min-width:650px)]:text-[14px] [@media(min-width:460px)]:text-[13px] text-[12px] text-[#000000d1] pt-[5px] [@media(min-width:460px)]:pb-[20px] pb-[10px] [@media(min-width:460px)]:mx-0 mx-[10px]">
            We are a company that specializes in fillng 83b tax forms with<br className="[@media(min-width:380px)]:flex hidden" /> the
            IRS on behalf of users.
          </p>
          <button
            className={
              "[@media(min-width:650px)]:!text-[13px] [@media(min-width:460px)]:text-[11px] text-[10px] font-[400] cursor-pointer text-[#fff] bg-[#1677C4] rounded-[50px] border-[2px] border-[#1677C4] flex items-center justify-center mx-auto relative [@media(min-width:650px)]:py-[10px] py-[8px] [@media(min-width:650px)]:px-[30px] px-[25px]"
            }
          >
            <span className="">Start Your Filing</span>
            <HiArrowNarrowRight className="[@media(min-width:460px)]:text-[17px] text-[13px] ml-[5px] [@media(min-width:650px)]:mt-[1px] mt-0" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
