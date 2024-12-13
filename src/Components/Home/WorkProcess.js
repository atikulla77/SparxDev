import React from "react";
import WorkProcess1 from "../../Image/Work_1.jpg";
import WorkProcess2 from "../../Image/Work_2.jpg";
import WorkProcess3 from "../../Image/Work_3.jpg";

const WorkProcess = () => {
  const WorkProcessData = [
    {
      id: 1,
      img: WorkProcess1,
      tittle: "Instant Check",
      description: "Morbi quis sodales dolor. Maecenas non tellus elit.",
    },
    {
      id: 2,
      img: WorkProcess2,
      tittle: "Double Check",
      description: "Quisque nec neque auctor, mollis dui nec, suscipit eros.",
    },
    {
      id: 3,
      img: WorkProcess3,
      tittle: "Final Check",
      description:
        "Curabitur volutpat ornare felis, id pharetra eros fringilla sed.",
    },
  ];
  return (
    <div className="w-full h-full py-[3rem] text-black GeologicaFont">
      <div className="w-full text-center relative z-10">
        <h1 className="[@media(min-width:570px)]:text-[35px] [@media(min-width:450px)]:text-[30px] text-[25px] font-[600]  Poppins">
          How It Works
        </h1>
        <p className="text-[#000000bf] [@media(min-width:570px)]:text-[15px] [@media(min-width:480px)]:text-[14px] text-[13px] font-[400] mx-auto pt-[5px]">
          Maecenas blandit lobortis iaculis. Nullam mauris<br className="[@media(min-width:480px)]:hidden flex" /> mauris, feugiat id<br className="[@media(min-width:480px)]:flex hidden" />
          bibendum quis, aliquam<br className="[@media(min-width:480px)]:hidden flex" /> vestibulum ante.
        </p>
      </div>

      <div className="xl:w-[1280px] w-[100%] mx-auto flex flex-wrap justify-center items-center pt-[2rem]">
        {WorkProcessData.map((key) => {
          return (
            <div
              key={key.id}
              className="w-[300px] rounded-[5px] mx-[1rem] my-[1rem] flex flex-col justify-center items-center"
            >
              <img src={key.img} className="[@media(min-width:480px)]:w-[250px] w-[220px]" />
              <div className="text-center pt-[5px]">
                <h1 className="[@media(min-width:480px)]:text-[21px] text-[19px] [@media(min-width:480px)]:pb-[5px] pb-[2px]">{key.tittle}</h1>
                <p className="[@media(min-width:480px)]:text-[14px] text-[13px] text-[#000000cc] w-[240px] mx-auto">
                  {key.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
