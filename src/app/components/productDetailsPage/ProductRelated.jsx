"use client";
import React, { useState } from "react";
import data from "../../../../public/json/data.json";
import ProductCard from "../mainHome/ProductCard";

const ProductRelated = ({ product }) => {
  const [showAll, setShowAll] = useState(false);

  const { category } = product;
  const relatedProducts = data.filter((item) => item.category === category);

  const visibleProducts = showAll
    ? relatedProducts
    : relatedProducts.slice(0, 6);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-bold ">Related products</p>
        <div className="mt-4">
          {!showAll && relatedProducts.length > 6 && (
            <button
              className="px-2 py-1 bg-slate-600 text-white rounded mr-2"
              onClick={() => setShowAll(true)}
            >
              Load More
            </button>
          )}
          {showAll && (
            <button
              className="px-2 py-1 bg-slate-600 text-white rounded"
              onClick={() => setShowAll(false)}
            >
              Show Less
            </button>
          )}
        </div>
      </div>

      <div
        className="grid grid-cols-6 md:grid-cols-4 sm:grid-cols-3 tablet:grid-cols-2 mobileS:grid-cols-1"
      >
        {visibleProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductRelated;
