"use client";
import React, { useState } from "react";
import PriceFilter from "../general/PriceFilter";
import CategoryFilter from "../general/categoryFilter";
import ColorFilter from "../general/colorFilter";
import BrandFilter from "../general/BrandFilter";
import ProductStatusFilter from "../general/ProductStatusFilter";

const FilterSection = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  return (
    <div className="tablet:relative ">
     <button
        className="hidden tablet:absolute tablet:top-3 tablet:left-0 z-50 text-xl font-bold rounded tablet:block"
        onClick={toggleFilterVisibility}
      >
        {isFilterVisible ? "✖" : "☰"}
      </button>

      <div
        className={`tablet:absolute ${
          isFilterVisible ? "tablet:block" : "tablet:hidden"
        } tablet:top-0 tablet:left-0 tablet:z-40 tablet:bg-white tablet:p-5 tablet:shadow-2xl tablet:rounded-md`}
      >
        <PriceFilter />
        <CategoryFilter />
        <ColorFilter />
        <BrandFilter />
        <ProductStatusFilter />
      </div>
    </div>
  );
};

export default FilterSection;
