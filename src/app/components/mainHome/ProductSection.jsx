import React from "react";
import FiltersAdded from "./FiltersAdded";
import ProductBanner from "./ProductBanner";
import SortSection from "./SortSection";
import ProductsDisplay from "./ProductsDisplay";

const ProductSection = () => {
  return (
    <div className="py-4 w-[72%] tablet:w-[100%]">
      <FiltersAdded />
      <ProductBanner />
      <SortSection/>
      <ProductsDisplay/>
    </div>
  );
};

export default ProductSection;
