import Image from "next/image";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";


const ProductBanner = () => {
  return (
    <div className="relative">
      <Image
        src={"/image/banner.jpg.png"}
        alt="grogin"
        className="w-full h-72 object-cover rounded-xl"
        width={300}
        height={300}
      />
      <div className="absolute top-8 left-10">
        <div className="bg-[#FFEDD5] mb-3 w-32 h-10 flex items-center justify-center rounded-full font-semibold text-sm">
          Only This Week
        </div>
        <h2 className="  text-3xl font-bold">Grocery store with different</h2>
        <h2 className=" mb-3 text-3xl font-bold">treasures</h2>
        <p className=" mb-5 text-xs">We have prepared special discounts for you on grocery products...</p>
        <button className="bg-[#FFFFFF] text-black text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-1">Shop Now <BsArrowRightShort /></button>
      </div>
    </div>
  );
};

export default ProductBanner;
