import React from "react";
import { Link } from "react-scroll";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  const FooterData = [
    {
      id: 1,
      listTittle: "Tax Services",
      listItem: [
        { id: 1, name: "Deluxe Service" },
        { id: 2, name: "Extension Tax Filing" },
        { id: 3, name: "Self-Employed Taxes" },
        { id: 4, name: "Military Taxes" },
        { id: 5, name: "State Taxes" },
        { id: 6, name: "1099 Taxes" },
      ],
    },
    {
      id: 2,
      listTittle: "Tools & Help",
      listItem: [
        { id: 1, name: "Account Recovery" },
        { id: 2, name: "Customer Support" },
        { id: 3, name: "Calculate Your Taxes" },
        { id: 4, name: "Deadlines" },
        { id: 5, name: "Help & Tips" },
        { id: 6, name: "Where's My Refund" },
        { id: 7, name: "Unemployment" },
      ],
    },
    {
      id: 3,
      listTittle: "Current Year",
      listItem: [
        { id: 1, name: "2022 Tax Software" },
        { id: 2, name: "Amended Returns" },
        { id: 3, name: "Supported Federal Forms" },
        { id: 4, name: "Supported State Forms" },
      ],
    },
    {
      id: 4,
      listTittle: "Prior Years",
      listItem: [
        { id: 1, name: "All Prior Year Software" },
        { id: 2, name: "Print Prior Year Return" },
        { id: 3, name: "File 2021 Taxes" },
        { id: 4, name: "File 2020 Taxes" },
        { id: 5, name: "File 2019 Taxes" },
      ],
    },
    {
      id: 5,
      listTittle: "About Us",
      listItem: [
        { id: 1, name: "About Us" },
        { id: 2, name: "Contact Us" },
        { id: 3, name: "Security" },
        { id: 4, name: "Customer Reviews" },
        { id: 5, name: "Affiliates" },
        { id: 6, name: "Sitemap" },
      ],
    },
  ];
  const navItems = [
    {
      id: 1,
      name: "How It Work",
      link: "HowItWork",
    },
    {
      id: 2,
      name: "Pricing",
      link: "Pricing",
    },
    {
      id: 3,
      name: "Our Guarantee",
      link: "OurGuarantee",
    },
  ];

  return (
    <footer className="bg-[#020E1E] body-font GeologicaFont">
      <div className="container px-5 pt-[60px] lg:pb-[60px] pb-[20px] mx-auto">
        <div className="flex flex-wrap md:text-left text-center justify-between ">
          {FooterData.map((key) => {
            return (
              <div key={key.id} className="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest [@media(min-width:420px)]:text-[15px] text-[14px] [@media(min-width:420px)]:mb-3 mb-[8px]">
                  {key.listTittle}
                </h2>
                <nav className="list-none lg:mb-0 mb-10">
                  {key.listItem.map((key2) => {
                    return (
                      <li key={key2.id} className="[@media(min-width:420px)]:py-[2px] py-[1px]" >
                        <a className="text-[#ffffffaf] [@media(min-width:420px)]:text-[13px] text-[12px]">
                          {key2.name}
                        </a>
                      </li>
                    );
                  })}
                </nav>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-t-[2px] border-[#e5e7eb24]">
        <div className="container px-5 [@media(min-width:420px)]:py-8 py-[20px] flex md:flex-row flex-col justify-between mx-auto items-center  text-[#ffffffb3]">
          <span className="md:hidden flex md:w-auto w-full justify-center [@media(min-width:420px)]:pb-[1rem] pb-[0.5rem]">
            <a className="w-[20px] h-[20px] flex items-center justify-center">
              <FaFacebookF className=" [@media(min-width:420px)]:text-[15px] text-[14px]" />
            </a>
            <a className="ml-3 w-[20px] h-[20px] flex items-center justify-center">
              <FaTwitter className=" [@media(min-width:420px)]:text-[16px] text-[15px]" />
            </a>
            <a className="ml-3 w-[20px] h-[20px] flex items-center justify-center">
              <IoLogoInstagram className=" [@media(min-width:420px)]:text-[19px] text-[18px]" />
            </a>
            <a className="ml-3 w-[20px] h-[20px] flex items-center justify-center">
              <FaLinkedinIn className=" [@media(min-width:420px)]:text-[15px] text-[14px]" />
            </a>
          </span>
          <div className="flex md:justify-end justify-center md:w-auto w-full">
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
                    "[@media(min-width:424px)]:px-3 px-[5px] [@media(min-width:424px)]:text-[13px] text-[12px] [@media(min-width:500px)]:font-[400] font-[300] cursor-pointer hover:text-[#EA3E76] transition-[0.3s]"
                  }
                  aria-current="page"
                >
                  {key.name}
                </Link>
              );
            })}
          </div>
          <span className="md:flex hidden md:w-auto w-full justify-center">
            <a className="w-[20px] h-[20px] flex items-center justify-center">
              <FaFacebookF className=" text-[17px]" />
            </a>
            <a className="ml-3 w-[20px] h-[20px] flex items-center justify-center">
              <FaTwitter className=" text-[17px]" />
            </a>
            <a className="ml-3 w-[20px] h-[20px] flex items-center justify-center">
              <IoLogoInstagram className=" text-[20px]" />
            </a>
            <a className="ml-3 w-[20px] h-[20px] flex items-center justify-center">
              <FaLinkedinIn className=" text-[16px]" />
            </a>
          </span>
        </div>
      </div>
      <div className="border-t-[2px] border-[#e5e7eb24] flex justify-center px-[10px]">
        <p className="text-[#ffffffb3] [@media(min-width:520px)]:text-[13px] [@media(min-width:420px)]:text-[11px] text-[10px] text-center [@media(min-width:520px)]:py-[1.5rem] py-[0.7rem]">
          © 2002-2022 free83b, a TaxHawk, inc, owned and operated website -
          Torms of Use | Privacy Statement (Updated 11/2/2022) | Accessibility
        </p>
      </div>
    </footer>
  );
};

export default Footer;
