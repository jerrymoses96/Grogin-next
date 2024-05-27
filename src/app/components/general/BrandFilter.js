// components/BrandFilter.js
"use client";
import { useState } from 'react';

const brands = [
  { name: 'Nike', id: 'nike' },
  { name: 'Adidas', id: 'adidas' },
  { name: 'Puma', id: 'puma' },
  { name: 'Reebok', id: 'reebok' },
  // Add more brands as needed
];

export default function BrandFilter() {
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <div className="py-4 border-t border-[#E5E7EB] mr-4">
      <h3 className="mb-4 text-sm font-semibold">Brand Filter</h3>
      <ul className="space-y-2">
        {brands.map((brand) => (
          <li key={brand.id}>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedBrand === brand.id}
                onChange={() => setSelectedBrand(brand.id)}
                className="form-checkbox h-4 w-4 text-purple-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2">{brand.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
