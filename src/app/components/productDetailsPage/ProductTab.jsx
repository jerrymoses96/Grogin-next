/* "use client";
import React, { useState } from "react";

const ProductTab = ({ product }) => {
  const [activeTab, setActiveTab] = useState(0);
  console.log(product);

  const tabs = [
    {
      id: 0,
      title: "Description",
      content: product.long_desc,
    },
    { id: 1, title: "Reviews", content:product.reviews },
  ];

  return (
    <div claĀ
      <div cĀy-200">
        {tabĀ
          <bĀ
            Ā
            Ā-medium focus:outline-none ${
            Ā
            Ātext-blue-600"
            Ā
            Ā
            Ā)}
          >
            ĀĀĀĀĀĀĀ
          </Ā
        ))}
      </div>Ā
      <div className="mt-4">
        {tabs.map(
          (tab) => activeTab === tab.id && <div className="text-base text-[#030712] font-light" key={tab.id}>{tab.content}</div>
        )}
      </div>
    </div>
  );
};

export default ProductTab;
 */