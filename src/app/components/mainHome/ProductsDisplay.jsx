"use client";
// components/ProductsDisplay.js
import React, { useEffect, useState } from "react";
import data from "../../../../public/json/data.json";
import ProductCard from "./ProductCard";
import { useSortContext } from "@/app/context/SortContext";
import { usePriceRangeContext } from "@/app/context/PriceRangeContext";
import { useCategoryContext } from "@/app/context/CategoryContext";
import { useColorContext } from "@/app/context/ColorContext";

const ProductsDisplay = () => {
  const { selectedSortOption } = useSortContext();
  const { priceRange } = usePriceRangeContext();
  const { selectedCategory } = useCategoryContext();
  const { selectedColor } = useColorContext();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    filterAndSortProducts(
      selectedSortOption,
      priceRange,
      selectedCategory,
      selectedColor
    );
  }, [selectedSortOption, priceRange, selectedCategory, selectedColor]);

  const filterAndSortProducts = (sortOption, priceRange, category, color) => {
    let filteredData = data;

    if (category) {
      filteredData = filteredData.filter(
        (product) =>
          product.original_price >= priceRange[0] &&
          product.original_price <= priceRange[1] &&
          product.category.toLowerCase() === category.toLowerCase()
      );
    } else {
      filteredData = filteredData.filter(
        (product) =>
          product.original_price >= priceRange[0] &&
          product.original_price <= priceRange[1]
      );
    }

    if (color) {
      filteredData = filteredData.filter(
        (product) =>
          product.color && product.color.toLowerCase() === color.toLowerCase()
      );
    }

    switch (sortOption) {
      case "popularity":
        filteredData.sort(
          (a, b) => b.no_of_person_reviewed - a.no_of_person_reviewed
        );
        break;
      case "rating":
        filteredData.sort((a, b) => b.rating - a.rating);
        break;
      case "latest":
        filteredData.sort(
          (a, b) => new Date(b.uploaded_date) - new Date(a.uploaded_date)
        );
        break;
      default:
        filteredData.sort((a, b) => a.product_id - b.product_id);
        break;
    }

    setFilteredProducts(filteredData);
  };

  return (
    <div>
      <div className="grid grid-cols-5 ">
        {filteredProducts.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsDisplay;
