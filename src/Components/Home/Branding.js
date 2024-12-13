import React from "react";
import brand1 from "../../Image/Brand_1.jpg";
import brand2 from "../../Image/Brand_2.jpg";
import brand3 from "../../Image/Brand_3.jpg";
import brand4 from "../../Image/Brand_4.jpg";
import brand5 from "../../Image/Brand_5.jpg";

const Branding = () => {
  const brandingData = [
    { id: 1, img: brand1 },
    { id: 2, img: brand2 },
    { id: 3, img: brand3 },
    { id: 4, img: brand4 },
    { id: 5, img: brand5 },
  ];
  return (
    <div className="w-full h-full">
      <div className="xl:w-[1280px] w-[100%] mx-auto flex flex-wrap justify-center items-center [@media(min-width:365px)]:py-[2rem] py-[1.2rem]">
        {brandingData.map((key) => {
          return (
            <div key={key.id} className="[@media(min-width:820px)]:!w-[100px] [@media(min-width:640px)]:w-[80px] w-[65px] h-[55px] [@media(min-width:820px)]:!mx-[2rem] [@media(min-width:640px)]:mx-[1.5rem] mx-[1rem] flex justify-center items-center">
              <img src={key.img} className="w-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Branding;
