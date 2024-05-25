import React from "react";
import { BiChevronDown } from "react-icons/bi";

const Headerdown = () => {
  const menuItems = [
    { name: "Home", hasDropdown: true },
    { name: "Shop", hasDropdown: true },
    { name: "Fruits & Vegetables" },
    { name: "Beverages" },
    { name: "Blog" },
    { name: "Contact" },
  ];

  const rightMenuItems = [
    { name: "Trending Products", hasDropdown: true },
    { name: "Almost Finished", hasDropdown: true, isSale: true },
  ];

  return (
    <div className="wrapper py-3 flex justify-between">
      <div className="flex items-center gap-4">
        {menuItems.map((item) => (
          <div key={item.name} className="flex font-medium items-center gap-1">
            <p>{item.name}</p>
            {item.hasDropdown && <BiChevronDown />}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {rightMenuItems.map((item) => (
          <div key={item.name} className="flex font-medium items-center gap-1">
            <p className={item.isSale ? "text-red-700 font-semibold" : ""}>
              {item.name}
            </p>
            {item.isSale && (
              <div className="text-white bg-red-600 rounded-md py-1 px-2">
                SALE
              </div>
            )}
            {item.hasDropdown && <BiChevronDown />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headerdown;
