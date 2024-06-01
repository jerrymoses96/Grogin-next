"use client";
import React, { useState } from "react";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const Headerdown = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    { name: "Home", hasDropdown: true },
    { name: "Shop", hasDropdown: true },
    { name: "Fruits & Vegetables" },
    { name: "Beverages" },
    { name: "Blog" },
    { name: "Contact" },
  ];

  const rightMenuItems = [
    { name: "Trending Products", hasDropdown: true },
    { name: "Almost Finished", hasDropdown: true, isSale: true },
  ];

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className="wrapper py-3 flex justify-between border-b border-[#E5E7EB
    ]"
    >
      <div className="flex items-center gap-4 xl:hidden ">
        {menuItems.map((item) => (
          <div key={item.name} className="flex font-medium items-center gap-1">
            <p>{item.name}</p>
            {item.hasDropdown && <BiChevronDown />}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 xl:hidden">
        {rightMenuItems.map((item) => (
          <div key={item.name} className="flex font-medium items-center gap-1">
            <p className={item.isSale ? "text-red-700 font-semibold" : ""}>
              {item.name}
            </p>
            {item.isSale && (
              <div className="text-white bg-red-600 rounded-md py-1 px-2">
                SALE
              </div>
            )}
            {item.hasDropdown && <BiChevronDown />}
          </div>
        ))}
      </div>

      {/* Hamburger Menu Button */}
      <div className="hidden xl:flex items-center">
        <button onClick={handleMenuToggle} className="text-3xl">
          {menuOpen ? <AiOutlineClose /> : <BiMenu />}
        </button>
      </div>

      <Link href="/" className=" hidden mobileM:flex">
        <Image src="/image/Logo.png" alt="grogin" width={110} height={30} />
      </Link>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className=" absolute  top-0 left-0 w-full h-full bg-white z-50 p-4">
          <div className="flex justify-end">
            <button onClick={handleMenuToggle} className="text-3xl">
              <AiOutlineClose />
            </button>
          </div>
          <div>
            
          </div>
          <div className="flex flex-col gap-4 mt-4">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="flex font-medium items-center gap-1"
              >
                <p>{item.name}</p>
                {item.hasDropdown && <BiChevronDown />}
              </div>
            ))}
          </div>
          <div className="flex flex-col  gap-4 mt-4">
            {rightMenuItems.map((item) => (
              <div
                key={item.name}
                className="flex font-medium items-center gap-1"
              >
                <p className={item.isSale ? "text-red-700 font-semibold" : ""}>
                  {item.name}
                </p>
                {item.isSale && (
                  <div className="text-white bg-red-600 rounded-md py-1 px-2">
                    SALE
                  </div>
                )}
                {item.hasDropdown && <BiChevronDown />}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Headerdown;
