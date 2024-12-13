import React from "react";
import bg from "../../Image/Guarantees.jpg";

const Guarantees = () => {
  return (
    <div className="w-fullh-full flex items-end justify-center bg-[#fff]">
      <div className="xl:w-[1280px] w-[100%] flex [@media(min-width:1125px)]:flex-row flex-col items-end [@media(min-width:1125px)]:justify-start justify-center mx-auto relative [@media(min-width:1125px)]:h-[30rem] h-[100%] ">
        <div className="[@media(min-width:510px)]:w-[500px] w-[97%] h-full z-10 GeologicaFont text-black [@media(min-width:1125px)]:hidden flex flex-col justify-center text-center mx-auto mt-[4rem] mb-[3rem]">
          <h1 className="[@media(min-width:510px)]:text-[35px] text-[25px] tracking-[1px] text-[#000000cc]">
            Our Guarantees
          </h1>
          <div className="w-[100%] text-[#000000b6] [@media(min-width:510px)]:!text-[15px] [@media(min-width:480px)]:text-[14px] [@media(min-width:420px)]:text-[13px] text-[12px] pb-[10px] [@media(min-width:480px)]:px-0 px-[2px]">
            <p className="  [@media(min-width:510px)]:leading-[27px] [@media(min-width:480px)]:leading-[23px] leading-[20px]">
              Maecenas blandit lobortis iaculis. Nullam mauris<br className="[@media(min-width:510px)]:hidden flex" /> mauris, feugiat
              id bibendum quis, aliquam <br className="[@media(min-width:510px)]:hidden flex" />vestibulum ante. Nulla mattis gravida
              metus, <br className="[@media(min-width:510px)]:hidden flex" /> et lacinia mauris semper ut.
            </p>
            <p className="pt-[5px] [@media(min-width:510px)]:leading-[27px] [@media(min-width:480px)]:leading-[23px] leading-[20px]">
              Suspendisse potenti. Vestibulum eget <br className="[@media(min-width:510px)]:hidden flex" />vestibulum nisi. Sed vei quam
              ut quam ullamcorper<br className="[@media(min-width:510px)]:hidden flex" /> varius quis eget ex.
            </p>
          </div>

          <button className="[@media(min-width:510px)]:text-[13px] [@media(min-width:480px)]:text-[12px] text-[11px] [@media(min-width:510px)]:w-[135px] [@media(min-width:480px)]:w-[120px] w-[110px] font-[400] cursor-pointer text-[#fff] bg-[#1677C4] rounded-[50px] border-[2px] border-[#1677C4] flex items-center justify-center relative [@media(min-width:510px)]:py-[9px] [@media(min-width:480px)]:py-[7px] py-[6px] mx-auto">
            Learn More
          </button>
        </div>
        <div className="w-full flex justify-start items-end">
        <div className="[@media(min-width:750px)]:w-[750px] w-[100%] [@media(min-width:1125px)]:mx-0 mx-auto">
          <img src={bg} className="w-full object-bottom" />
        </div>
        </div>
        <div className="w-[422px] h-full z-10 absolute top-0 [@media(min-width:1280px)]:right-[12%] right-[2%] GeologicaFont text-black [@media(min-width:1125px)]:flex hidden flex-col justify-center text-left">
          <h1 className="text-[35px] tracking-[1px] text-[#000000cc]">
            Our Guarantees
          </h1>
          <div className="w-[100%] text-[#000000b6]">
            <p className="text-[15px] pt-[5px] leading-[27px]">
              Maecenas blandit lobortis iaculis. Nullam mauris mauris, feugiat
              id bibendum quis, aliquam vestibulum ante. Nulla mattis gravida
              metus, et lacinia mauris semper ut.
            </p>
            <p className="pt-[10px] pb-[15px] text-[15px] leading-[27px]">
              Suspendisse potenti. Vestibulum eget vestibulum nisi. Sed vei quam
              ut quam ullamcorper varius quis eget ex.
            </p>
          </div>

          <button className="text-[13px] w-[135px] font-[400] cursor-pointer text-[#fff] bg-[#1677C4] rounded-[50px] border-[2px] border-[#1677C4] flex items-center justify-center relative py-[9px]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guarantees;
