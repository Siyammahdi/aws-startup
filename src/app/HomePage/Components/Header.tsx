"use client"
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/uqiflow logo 1.png";
import Menu from "../../../../public/menu-svgrepo-com.svg";
import Close from "../../../../public/close-bold-svgrepo-com.svg";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl">
      <div className="md:flex justify-between items-center py-5 lg:py-10 my-10 px-10 md:px-20">
        <div className="flex justify-between items-center gap-4 md:gap-10">
          <div className="block">
            <Image src={Logo} alt="logo" />
          </div>
          <div className="md:hidden">
            <button className="px-4 py-2 rounded-full text-sm" onClick={toggleDropdown}>
              {!isDropdownOpen ? <Image src={Menu} alt="menu" width={20} /> : <Image src={Close} alt="menu" width={20} />}
            </button>
          </div>
        </div>
        <div className={`md:flex items-center space-x-4 md:space-x-8 ${isDropdownOpen ? 'block' : 'hidden'}`}>
          <div className="md:flex absolute right-10 top-28 md:static bg-white md:bg-transparent p-4 rounded-lg shadow-xl md:shadow-none z-10">
            <button className="px-4 py-2 rounded-full text-sm block">Services</button>
            <button className="px-4 py-2 rounded-full text-sm block">Portfolio</button>
            <button className="bg-button text-white px-4 py-2 rounded-full text-sm font-bold block">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
