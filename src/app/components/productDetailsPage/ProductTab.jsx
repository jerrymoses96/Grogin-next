"use client";
import { FaRegUserCircle } from "react-icons/fa";

import React, { useState } from "react";

const ProductTab = ({ product }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: "Description",
      content: product.long_desc,
    },
    { 
      id: 1, 
      title: "Reviews", 
      content: product.reviews 
    },
  ];

  return (
    <div className="w-full my-10 ">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 text-sm font-medium focus:outline-none transition-colors duration-300 ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id}>
                {Array.isArray(tab.content) ? (
                  tab.content.map((review, index) => (
                    <div key={index} className="mb-4 flex items-center gap-3">
                      <FaRegUserCircle size={35} />

                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-gray-500 text-sm">{review.review}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p  >{tab.content}</p>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default ProductTab;
