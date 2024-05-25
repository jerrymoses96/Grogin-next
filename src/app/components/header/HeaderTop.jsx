"use client"; // Ensure this is a Client Component

import React, { useState, useEffect } from "react";
import { calculateTimeLeft } from "../general/calculateTimeLeft";

const HeaderTop = ({ initialTimeLeft }) => {
  // State to store the time left
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);

  // Effect to update the time left every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="bg-[#634C9F]">
      <div className="bg-[#634C9F] text-white text-xs flex justify-center items-center h-10 gap-[80px]">
        <p>
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order
          now.
        </p>
        <div className="flex items-center gap-2">
          <p className="opacity-70 font-medium">Until the end of the Sale:</p>
          <div className="flex items-center gap-1">
            <small className="text-xl font-bold">{timeLeft.days}</small> days
          </div>
          <div className="flex items-center gap-1">
            <small className="text-xl font-bold">{timeLeft.hours}</small> hours
          </div>
          <div className="flex items-center gap-1">
            <small className="text-xl font-bold">{timeLeft.minutes}</small>{" "}
            minutes
          </div>
          <div className="flex items-center gap-1">
            <small className="text-xl font-bold">{timeLeft.seconds}</small> sec
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
