"use client";
import React, { createContext, useContext, useState } from "react";

const ProductStatusContext = createContext();

export const ProductStatusProvider = ({ children }) => {
  const [selectedStatus, setSelectedStatus] = useState([]);

  return (
    <ProductStatusContext.Provider
      value={{ selectedStatus, setSelectedStatus }}
    >
      {children}
    </ProductStatusContext.Provider>
  );
};

export const useProductStatusContext = () => useContext(ProductStatusContext);
