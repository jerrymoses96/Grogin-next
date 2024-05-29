"use client";
import React, { useState } from "react";
import "../../globals.css";
import Image from "next/image";
import { useSortContext } from "@/app/context/SortContext";

const SortSection = () => {
  const { selectedSortOption, setSelectedSortOption } = useSortContext();
  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedSortOption(selectedOption);
    
  };

  return (
    <div className="flex rounded-md justify-between items-center mt-2 p-3 bg-[#F3F4F6]">
      <p className="text-xs text-[#6B7280]">Showing all 16 results</p>
      <div className="flex items-center">
        <div className="flex items-center">
          <p className="text-xs text-[#9CA3AF] font-medium">Sort :</p>
          <select
            className="font-semibold bg-[#F3F4F6] text- text-xs border-none custom-dropdown"
            value={selectedSortOption}
            onChange={handleSortChange}
          >
            <option value="relevance">Relevance</option>
            <option value="popularity">Popularity</option>
            <option value="rating">Average rating</option>
            <option value="latest">Latest</option>
          </select>
        </div>
        <div className="flex border-l px-3 border-[#D1D5DB] items-center gap-2">
          <p className="text-xs text-[#9CA3AF] font-medium">Show :</p>
          <p className="text-xs font-semibold">20 Items</p>
        </div>
        <div>
          <Image
            src={"/image/div.product-views-buttons.png"}
            alt="VIEW"
            width={55}
            height={55}
          />
        </div>
      </div>
    </div>
  );
};

export default SortSection;
