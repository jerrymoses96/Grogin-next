import Image from "next/image";
import React from "react";

const FooterBottom = () => {
  return (
    <div className="flex justify-between py-[50px] border-blue_gray-100 border-t border-solid sm:flex-col sm:gap-5">
      <div className="w-1/2">
        <div className="text-xs  mb-5 ">
          <span className="text-gray-600">
            Copyright 2024 © Grogin WooCommerce WordPress Theme. All right
            reserved. Powered by{" "}
          </span>
          <span className="text-deep_purple-600 font-semibold">KLBTheme.</span>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/image/List → Item → SVG.png"
            alt="listitemsvg_one"
            className="w-[40px] "
            width={15}
            height={15}
          />
          <Image
            src="/image/List → Item → SVG (1).png"
            alt="listitemsvg"
            className="w-[40px] "
            width={15}
            height={15}
          />
          <Image
            src="/image/List → Item → SVG (2).png"
            alt="listitemsvg"
            className="w-[40px] "
            height={15}
            width={15}
          />
          <Image
            src="/image/List → Item → SVG (3).png"
            alt="listitemsvg"
            className="w-[40px] "
            width={15}
            height={15}
          />
          <Image
            src="/image/List → Item → SVG (4).png"
            alt="listitemsvg"
            className="w-[40px] "
            width={15}
            height={15}
          />
        </div>
      </div>
      <div>
        <ul className="text-xs text-[#111827] underline flex gap-2 mobileM:flex-col">
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Order Tracking</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterBottom;
