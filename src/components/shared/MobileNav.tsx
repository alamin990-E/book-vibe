"use client";

import useMenu from "@/app/hooks/useMenu";
import { RxHamburgerMenu } from "react-icons/rx";
interface navMenuProp {
  navMenu: React.ReactNode;
}

const MobileNav = ({ navMenu }: navMenuProp) => {

    const {open,handleMenu} = useMenu()

 
  return (
    <nav>
      <div className="flex justify-between items-center container mx-auto p-5">
              {/* Hamburger  */}
      <div onClick={handleMenu}>
        <RxHamburgerMenu size={28} />
      </div>
        
        {/* Logo */}
      <div>
        <h2 className="text-2xl text-black font-bold">
          Book
          <span className="bg-linear-to-r from-[#59C6D2] to-[#23BE0A] bg-clip-text text-transparent">
            Vibe
          </span>
        </h2>
      </div>

      {/* Button */}
      <div className="flex items-center gap-1">
          <button className="btn  text-white rounded-2.5 border-none bg-[#23BE0A]">
            Sing In
          </button>
          <button className="btn  text-white rounded-2.5 border-none bg-[#59C6D2]">
            Sing Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
    {open && (
      <ul className=" absolute top-full w-full flex flex-col bg-gray-300 p-2 gap-2.5 text-xs font-medium">
        {navMenu}
      </ul>
    )}
    </nav>
  );
};

export default MobileNav;
