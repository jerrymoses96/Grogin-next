import React from "react";
import "../../globals.css";
import Image from "next/image";

const SortSection = () => {
  return (
    <div className="flex rounded-md justify-between items-center mt-2 p-3 bg-[#F3F4F6]">
      <p className="text-xs text-[#6B7280]">Showing all 16 results</p>
      <div className="flex items-center">
        <div className="flex items-center">
          <p className="text-xs text-[#9CA3AF] font-medium">Sort :</p>
          <select class="font-semibold bg-[#F3F4F6] text- text-xs border-none custom-dropdown">
            <option value="">Relevance</option>
            <option value="">Popularity</option>
            <option value="">Average rating</option>
            <option value="">Latest</option>
          </select>
        </div>
        <div className="flex border-l px-3 border-[#D1D5DB] items-center gap-2">
          <p className="text-xs text-[#9CA3AF] font-medium">Show :</p>
          <p className="text-xs font-semibold">20 Items</p>
        </div>
        <div>
          <Image src={"/image/div.product-views-buttons.png"} alt="VIEW" width={55} height={55} />
        </div>
      </div>
    </div>
  );
};

export default SortSection;
