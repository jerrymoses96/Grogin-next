// components/CategoryFilter.js
"use client";
import { useCategoryContext } from "@/app/context/CategoryContext";

const categories = [
  "fruits",
  "baby",
  "beverages",
  "meats",
  "biscuits",
  "breads",
  "breakfast",
  "frozen",
  "grocery",
  "healthcare",
  "household",
];

export default function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useCategoryContext();

  return (
    <div className="py-4 border-t border-[#E5E7EB]">
      <h3 className="mb-4 text-sm font-semibold">Product Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="form-checkbox h-4 w-4 text-purple-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2 text-sm font-medium capitalize">
                {category}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
