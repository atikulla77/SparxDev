import { useState } from "react";
import logo from "../../Image/logo.png";

import { HiOutlineMenuAlt3, HiOutlineMenu } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";

import { Link } from "react-scroll";

function Navber() {
  //      ``````````````````
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 24) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const [nevMobileVButton, setNevMobileVButton] = useState(false);

  const navItems = [
    {
      id: 1,
      name: "How It Work",
      link: "How It Work",
    },
    {
      id: 2,
      name: "Pricing",
      link: "Pricing",
    },
    {
      id: 3,
      name: "Our Guarantee",
      link: "Our Guarantee",
    },
  ];

  return (
    <div className={` w-full flex fixed top-[0px] z-50`}>
      <nav
        className={`text-[#000] w-full relative z-10 ${
          color ? "bg-[#fff] shadow-[0px_0px_3px_0px_#0003]" : "bg-transparent"
        }`}
        style={{ transition: ".1s ease-in" }}
      >
        <div
          className="mx-auto xl:!w-[1230px] [@media(min-width:715px)]:w-[96%] w-[90%] relative z-10"
          // data-aos="fade-down"
        >
          <div className="h-[4.5rem] w-full flex items-center justify-between Poppins">
            <Link to="" className=" z-[2] relative">
              <img
                src={logo}
                className="[@media(min-width:500px)]:w-[105px] w-[80px] select-none cursor-pointer"
              />
            </Link>

            {/* ---------------Web Nav Item--------------- */}
            <div className="md:flex hidden items-center justify-center text-[#000] mt-[5px]">
              <div className="flex sm:space-x-4 space-x-1">
                {navItems.map((key) => {
                  return (
                    <Link
                      key={key.id}
                      to={key.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className={
                        "hover:text-[#1677C4] [@media(min-width:1024px)]:px-3 px-[5px] py-2 text-[15px] font-[400] cursor-pointer transition-[0.3s]"
                      }
                      aria-current="page"
                    >
                      <p className="">{key.name}</p>
                    </Link>
                  );
                })}
                <button
                  className={
                    "w-[130px] h-[38px] text-[14px] font-[400] cursor-pointer text-[#fff] hover:text-[#1677C4] bg-[#1677C4] hover:bg-transparent rounded-[50px] border-[2px] border-[#1677C4] transition-[0.3s] sm:ml-[16px] ml-[4px] flex items-center justify-center"
                  }
                >
                  <MdLockOutline className="text-[17px] mr-[4px]" />
                  <span>Sign In</span>
                </button>
              </div>
            </div>

            {/* ---------------Mobile Nav Button--------------- */}
            <div className={`flex md:hidden items-center`}>
              <button
                  className={
                    "w-[120px] h-[35px] text-[13px] font-[400] cursor-pointer text-[#fff] bg-[#1677C4] rounded-[50px] transition-[0.3s] mr-[16px] flex items-center justify-center"
                  }
                >
                  <MdLockOutline className="text-[15px] mr-[4px]" />
                  <span>Sign In</span>
                </button>

              {nevMobileVButton ? (
                <div
                  className="flex items-center justify-center w-[22px] h-[22px]"
                  onClick={() => setNevMobileVButton(false)}
                >
                  <p
                    className={`[@media(min-width:420px)]:text-[36px] text-[33px] flex rotate-[45deg] text-black`}
                  >
                    +
                  </p>
                </div>
              ) : (
                <div
                  className="w-[22px] h-[22px] flex items-center justify-center relative"
                  onClick={() => setNevMobileVButton(true)}
                >
                  <HiOutlineMenuAlt3
                    className={`[@media(min-width:420px)]:text-[25px] text-[22px] ${
                      nevMobileVButton ? "hidden" : "flex"
                    } text-black`}
                  />
                </div>
              )}
            </div>
            {/* ---------------Mobile Nav Item--------------- */}
            <div
              className={`absolute top-[4.6rem] right-0 w-[165px] h-[8.6rem] bg-white shadow-[0px_1px_3px_0px_#0000002b] rounded-b-[3px] z-0 flex md:hidden ${
                nevMobileVButton
                  ? `NavberMViewAnimationLeft`
                  : `NavberMViewAnimationRight`
              }`}
            >
              <div className="w-full h-full flex flex-col justify-start pl-[1.5rem] py-[1rem] text-black">
                {navItems.map((key) => {
                  return (
                    <Link
                      key={key.id}
                      to={key.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className={
                        "sm:px-3 px-[5px] py-2 text-[13px] font-medium cursor-pointer block"
                      }
                      aria-current="page"
                      onClick={() => setNevMobileVButton(false)}
                    >
                      {key.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navber;
