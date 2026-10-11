import React from "react";
import DeskNav from "./DeskNav";
import MobileNav from "./MobileNav";
import Link from "next/link";

const Navbar = () => {
     const navMenu = () => {
    return (
      <>
        <li>
          <Link href="/"  className="hover:bg-gray-300 px-4 py-1">Home</Link>
        </li>
        <li>
          <Link href="/books"  className="hover:bg-gray-300 px-4 py-1">Books</Link>
        </li>
        <li>
          <Link href="/listedBook"  className="hover:bg-gray-300 px-4 py-1">Listed Book</Link>
        </li>
        <li>
          <Link href="/readbooks"  className="hover:bg-gray-300 px-4 py-1">Read Book</Link>
        </li>
      </>
    );
  };
    
  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-sm ">
      <div className="hidden md:block">
        <DeskNav navMenu={navMenu}></DeskNav>
      </div>

      <div className="block md:hidden">
        <MobileNav navMenu={navMenu()} ></MobileNav>
      </div>
    </div>
  );
};

export default Navbar;
