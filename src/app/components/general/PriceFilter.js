"use client";
import { useState, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";
import { usePriceRangeContext } from "../../context/PriceRangeContext";

const MIN = 0;
const MAX = 50;

const PriceFilter = () => {
  const { priceRange, setPriceRange } = usePriceRangeContext();
  const [values, setValues] = useState(priceRange);

  useEffect(() => {
    setValues(priceRange);
  }, [priceRange]);

  const handleFilterClick = () => {
    setPriceRange(values);
  };

  return (
    <div className="max-w-sm mx-auto py-4">
      <h2 className="text-sm font-semibold mb-4">Widget price filter</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <span className="text-xs text-[#6B7280]">Min Price</span>
          <input
            type="number"
            value={values[0]}
            onChange={(e) => setValues([+e.target.value, values[1]])}
            className="border border-gray-300 rounded p-2 w-32"
          />
        </div>
        <span className="mx-2">-</span>
        <div className="flex flex-col">
          <span className="text-xs text-[#6B7280]">Max Price</span>
          <input
            type="number"
            value={values[1]}
            onChange={(e) => setValues([values[0], +e.target.value])}
            className="border border-gray-300 rounded p-2 w-32"
          />
        </div>
      </div>
      <div className="mb-4">
        <Range
          values={values}
          step={1}
          min={MIN}
          max={MAX}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "4px",
                width: "100%",
                background: getTrackBackground({
                  values,
                  colors: ["#111827", "#111827", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="h-4 w-4 bg-[#111827] rounded-full shadow"
            />
          )}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex justify-between items-center">
          <span className="text-gray-700 text-sm">
            Price: ${values[0]} - ${values[1]}
          </span>
        </div>
        <button
          onClick={handleFilterClick}
          className="bg-[#E5E7EB] text-black font-bold px-3 py-2 rounded"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
