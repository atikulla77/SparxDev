import React from "react";
import PricingImg from "../../Image/Pricing.jpg";
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
  const PricingData = [
    {
      id: 1,
      pricingPack: "Basic",
      price: "$0",
      perState: "$14.99",
      listItem: [
        { id: 1, tittle: "Sed blandit condimentum eros." },
        { id: 2, tittle: "Sed blandit condimentum eros." },
        { id: 3, tittle: "Sed blandit condimentum eros." },
        { id: 4, tittle: "Sed blandit condimentum eros." },
        { id: 5, tittle: "Sed blandit condimentum eros." },
      ],
      isActive: false,
    },
    {
      id: 2,
      pricingPack: "Advance",
      price: "$0",
      perState: "$14.99",
      listItem: [
        { id: 1, tittle: "Sed blandit condimentum eros." },
        { id: 2, tittle: "Sed blandit condimentum eros." },
        { id: 3, tittle: "Sed blandit condimentum eros." },
        { id: 4, tittle: "Sed blandit condimentum eros." },
        { id: 5, tittle: "Sed blandit condimentum eros." },
      ],
      isActive: true,
    },
    {
      id: 3,
      pricingPack: "Premium",
      price: "$0",
      perState: "$14.99",
      listItem: [
        { id: 1, tittle: "Sed blandit condimentum eros." },
        { id: 2, tittle: "Sed blandit condimentum eros." },
        { id: 3, tittle: "Sed blandit condimentum eros." },
        { id: 4, tittle: "Sed blandit condimentum eros." },
        { id: 5, tittle: "Sed blandit condimentum eros." },
      ],
      isActive: false,
    },
  ];
  return (
    <div className="w-full h-full flex flex-col py-[3rem] text-black bg-[#F2F9FF] GeologicaFont">
      <div className="w-full text-center relative z-10">
        <h1 className="[@media(min-width:570px)]:text-[35px] [@media(min-width:450px)]:text-[30px] text-[25px] font-[600]  Poppins">
          Our Pricing
        </h1>
        <p className="text-[#000000bf] [@media(min-width:570px)]:!text-[15px] [@media(min-width:480px)]:text-[14px] text-[12px] font-[400] mx-auto pt-[5px]">
          Maecenas blandit lobortis iaculis. Nullam mauris
          <br className="[@media(min-width:480px)]:hidden flex" /> mauris,
          feugiat id
          <br className="[@media(min-width:480px)]:flex hidden" />
          bibendum quis, aliquam
          <br className="[@media(min-width:480px)]:hidden flex" /> vestibulum
          ante.
        </p>
      </div>

      <div className="xl:w-[1280px] w-[100%] mx-auto flex flex-wrap justify-center items-center pt-[2rem]">
        {PricingData.map((key) => {
          return (
            <div
              key={key.id}
              className={`[@media(min-width:400px)]:w-[360px] w-[300px] [@media(min-width:420px)]:mx-[1rem] mx-0 my-[1rem] [@media(min-width:400px)]:px-[1.5rem] px-[0.9rem] [@media(min-width:400px)]:py-[2rem] py-[1.1rem] flex flex-col justify-center items-center bg-white rounded-[7px] ${key.isActive? "shadow-[0px_0px_4px_0px_#0000003b]":"shadow-[0px_0px_2px_0px_#00000037]"}`}
            >
              <div className="w-full flex flex-col items-center pt-[6px]">
                <div className="w-full flex items-center px-[0.5rem]">
                  <img src={PricingImg} className="[@media(min-width:400px)]:w-[60px] w-[45px] [@media(min-width:400px)]:h-[60px] h-[45px]" />
                  <div className="pl-[10px]">
                    <h1 className="[@media(min-width:400px)]:text-[25px] text-[18px] [@media(min-width:400px)]:leading-[30px] leading-[20px]">
                      {key.pricingPack}
                    </h1>
                    <p className="[@media(min-width:400px)]:text-[14px] text-[13px] text-[#000000ad]">Starter</p>
                  </div>
                </div>
                <div className="w-full [@media(min-width:400px)]:py-[2rem] py-[1rem]">
                  {key.listItem.map((key2) => {
                    return (
                      <div
                        key={key2.id}
                        className="w-full flex items-center py-[0.5rem] px-[1rem]"
                      >
                        <div className="[@media(min-width:400px)]:w-[21px] w-[19px] [@media(min-width:400px)]:h-[21px] h-[19px] flex items-center justify-center rounded-[50%] bg-[#009b00]">
                          <FaCheck className="[@media(min-width:400px)]:text-[13px] text-[12px] text-[#fff]" />
                        </div>
                        <p className="[@media(min-width:400px)]:text-[14px] text-[13px] [@media(min-width:400px)]:ml-[0.8rem] ml-[0.5rem]">{key2.tittle}</p>
                      </div>
                    );
                  })}
                </div>
                <h1 className="[@media(min-width:400px)]:text-[50px] text-[40px] font-[600] text-[#000000df]">
                  {key.price}
                  <span className="text-[13px] font-[400] text-[#000000b4]">
                    /month
                  </span>
                </h1>
                <p className="text-[#000000bd] font-[600] [@media(min-width:400px)]:text-[16px] text-[14px]">
                  + {key.perState} <span className="font-[400]">per state</span>
                </p>
                <button
                  className="w-full [@media(min-width:400px)]:text-[15px] text-[14px] font-[400] cursor-pointer text-[#fff] hover:text-[#1677C4] bg-[#1677C4] hover:bg-transparent border-[2px] border-[#1677C4] rounded-[7px] flex items-center justify-center transition-[0.3s] [@media(min-width:400px)]:py-[11px] py-[8px] [@media(min-width:400px)]:mt-[1.8rem] mt-[1rem]"
                >
                  Choose
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
