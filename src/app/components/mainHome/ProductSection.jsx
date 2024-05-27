import React from "react";
import FiltersAdded from "./FiltersAdded";
import ProductBanner from "./ProductBanner";
import SortSection from "./SortSection";

const ProductSection = () => {
  return (
    <div className="py-4 w-[72%]">
      <FiltersAdded />
      <ProductBanner />
      <SortSection/>
    </div>
  );
};

export default ProductSection;
