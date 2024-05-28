import React from "react";
import data from "../../../../public/json/data.json"
import ProductCard from "./ProductCard";

const ProductsDisplay = () => {
  return (
    <div>
      <div className="grid grid-cols-5 ">
        {data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsDisplay;
