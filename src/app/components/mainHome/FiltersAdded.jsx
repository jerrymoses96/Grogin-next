import React from "react";
import { RxCross2 } from "react-icons/rx";

const FiltersAdded = () => {
  return (
    <div className="flex items-center mb-4 gap-2">
      <RxCross2 size={15} />
      <span className="text-sm font-medium text-[#555555]">Clear filters</span>
    </div>
  );
};

export default FiltersAdded;
