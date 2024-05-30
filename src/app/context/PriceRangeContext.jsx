// context/PriceRangeContext.js
"use client";
import React, { createContext, useContext, useState } from "react";

const PriceRangeContext = createContext();

export const PriceRangeProvider = ({ children }) => {
  const [priceRange, setPriceRange] = useState([0, 50]);

  return (
    <PriceRangeContext.Provider value={{ priceRange, setPriceRange }}>
      {children}
    </PriceRangeContext.Provider>
  );
};

export const usePriceRangeContext = () => useContext(PriceRangeContext);
