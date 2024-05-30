// components/ColorFilter.js
"use client";
import { useColorContext } from "@/app/context/ColorContext";

const colors = [
  { name: "Red", value: "bg-red-500" },
  { name: "Blue", value: "bg-blue-500" },
  { name: "Green", value: "bg-green-500" },
  { name: "Yellow", value: "bg-yellow-500" },
  { name: "Purple", value: "bg-purple-500" },
  { name: "Orange", value: "bg-orange-500" },
  { name: "Pink", value: "bg-pink-500" },
 
];

export default function ColorFilter() {
  const { selectedColor, setSelectedColor } = useColorContext();

  return (
    <div className="py-4 border-t border-[#E5E7EB] ">
      <h3 className="mb-4 text-sm font-semibold">Color Filter</h3>
      <ul className="space-y-2">
        {colors.map((color) => (
          <li key={color.name}>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedColor === color.value}
                onChange={() => setSelectedColor(color.name)}
                className="form-checkbox h-4 w-4 text-purple-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2 flex items-center text-sm">
                <span
                  className={`inline-block w-4 h-4 mr-2 ${color.value} rounded-full`}
                ></span>
                {color.name}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
