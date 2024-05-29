"use client";
import React, { createContext, useState, useContext } from "react";

// Create context
const SortContext = createContext();

// Create provider component
export const SortProvider = ({ children }) => {
  const [selectedSortOption, setSelectedSortOption] = useState("");

  return (
    <SortContext.Provider value={{ selectedSortOption, setSelectedSortOption }}>
      {children}
    </SortContext.Provider>
  );
};

// Custom hook to use the context
export const useSortContext = () => useContext(SortContext);
