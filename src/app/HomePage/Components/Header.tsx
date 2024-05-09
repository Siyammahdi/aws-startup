import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../../public/uqiflow logo 1.png"

const Header = () => {
  return (
    <div className="">
      <div className={`flex justify-between items-center py-5 lg:py-10 my-10 shadow-xl md:px-10 rounded-2xl `}>
      <div className="hidden md:flex items-center gap-10">
        <Image src={Logo} alt="logo" />
      </div>
      <div className="flex justify-center">
      <button className=" px-6 py-3 rounded-full text-sm">
          Services
        </button>
        <button className=" px-6 py-3 rounded-full text-sm ">
          Portfolio
        </button>
        <button className="bg-button text-white px-6 py-3 rounded-full text-sm font-bold">
          Contact
        </button>
      </div>
    </div>
    </div>
  );
};

export default Header;
