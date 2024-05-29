"use client";
import React, { useEffect, useState } from "react";
import data from "../../../../public/json/data.json";
import ProductCard from "./ProductCard";
import { useSortContext } from "@/app/context/SortContext";

const ProductsDisplay = () => {
  const { selectedSortOption } = useSortContext();
  console.log(selectedSortOption);
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    // Sorting logic based on the selected sort option
    sortProducts(selectedSortOption);
  }, [selectedSortOption]);

  const sortProducts = (sortOption) => {
    let sortedData = [...data];

    switch (sortOption) {
      case "popularity":
        console.log("hello poppularity");
        sortedData.sort(
          
          (a, b) => b.no_of_person_reviewed - a.no_of_person_reviewed
        );
        break;
      case "rating":
        sortedData.sort((a, b) => b.rating - a.rating);
        break;
      case "latest":
        sortedData.sort(
          (a, b) => new Date(b.uploaded_date) - new Date(a.uploaded_date)
        );
        break;
      // Add more cases for other sorting options if needed
      default:
        // Default to sorting by relevance or any other default sorting logic
        // For example, here it's sorted by product_id
        sortedData.sort((a, b) => a.product_id - b.product_id);
        break;
    }

    setSortedProducts(sortedData);
    console.log(sortedProducts);
  };

  return (
    <div>
      <div className="grid grid-cols-5 ">
        {sortedProducts.map((item,index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsDisplay;
