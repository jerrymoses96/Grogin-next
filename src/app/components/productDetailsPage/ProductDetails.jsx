import React from "react";
import data from "../../../../public/json/data.json";
import { GoChevronRight } from "react-icons/go";
import ProductsDescription from "./ProductsDescription";

const ProductDetails = ({ id }) => {
  const product = data.find((item) => item.product_id == id);

  return (
    <div className="wrapper">
      <div className="flex items-center gap-3 my-5 ">
        <div className="flex items-center ">
          <p className="text-xs text-[#9CA3AF]">Home</p>
          <GoChevronRight className="text-[#9CA3AF]" size={12} />
        </div>
        <div className="flex items-center">
          <p className="text-xs text-[#9CA3AF]"> Fruits & Vegetables</p>
          <GoChevronRight className="text-[#9CA3AF]" size={12} />
        </div>

        <p className="text-xs"> {product.product_name}</p>
      </div>
      <ProductsDescription product={product}/>
    </div>
  );
};

export default ProductDetails;
