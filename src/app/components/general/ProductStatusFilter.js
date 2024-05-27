"use client";
// components/ProductStatusFilter.js
import { useState } from 'react';

const statuses = [
  { name: 'In Stock', value: 'inStock' },
  { name: 'On Sale', value: 'onSale' },
];

export default function ProductStatusFilter() {
  const [selectedStatus, setSelectedStatus] = useState([]);

  const handleStatusChange = (status) => {
    setSelectedStatus((prevSelectedStatus) =>
      prevSelectedStatus.includes(status)
        ? prevSelectedStatus.filter((s) => s !== status)
        : [...prevSelectedStatus, status]
    );
  };

  return (
    <div className="py-4 border-t border-[#E5E7EB] mr-4">
      <h3 className="mb-4 text-sm font-semibold">Product Status </h3>
      <ul className="space-y-2">
        {statuses.map((status) => (
          <li key={status.value}>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedStatus.includes(status.value)}
                onChange={() => handleStatusChange(status.value)}
                className="form-checkbox h-4 w-4 text-purple-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2">{status.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
