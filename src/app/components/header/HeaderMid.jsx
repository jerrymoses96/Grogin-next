import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const HeaderMid = () => {
  return (
    <div className="wrapper flex justify-between md:hidden  border-b border-[#E5E7EB
    ]">
      <div
        className="flex text-sm gap-4 py-3 border-b border-[#E5E7EB
]"
      >
        <p className="text-[#6B7280]">About Us</p>
        <p className="text-[#6B7280]">My Account</p>
        <p className="text-[#6B7280]">Wishlist</p>
        <p
          className="text-[#6B7280] pl-3 border-l border-[#E5E7EB
]"
        >
          We deliver to you every day from{" "}
          <small className="text-red-600 font-bold ">7:00 to 23:00</small>
        </p>
      </div>
      <div className="flex text-xs gap-2">
        <div className="text-[#6B7280] flex items-center">
          English
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="text-[#6B7280] flex items-center">
          USD
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="text-[#6B7280] flex items-center">
          Order Tracking
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default HeaderMid;
