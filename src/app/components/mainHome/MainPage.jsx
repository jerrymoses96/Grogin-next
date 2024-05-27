import React from "react";
import TopHome from "./TopHome";
import FilterSection from "./FilterSection";
import ProductSection from "./ProductSection";

const MainPage = () => {
  return (
    <div className="">
      <TopHome />
      <div className="flex mt-8 gap-10">
        <FilterSection />
        <ProductSection />
      </div>
    </div>
  );
};

export default MainPage;
