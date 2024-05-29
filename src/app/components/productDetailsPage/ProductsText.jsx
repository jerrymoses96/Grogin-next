"use client"; // Ensure this is a Client Component

import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { LiaCreditCard } from "react-icons/lia";
import { LuShieldCheck } from "react-icons/lu";
import { MdIosShare } from "react-icons/md";
import renderStars from "../helpers/renderStars";
import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../general/calculateTimeLeft";

const ProductsText = ({ product }) => {
  const [timeLeft, setTimeLeft] = useState({});

  // Effect to update the time left every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="w-1/2">
      <h2 className="text-4xl font-bold">{product.product_name}</h2>
      <div className="flex items-center gap-1 mb-2 border-b py-5 border-gray-300">
        {renderStars(product.rating)}
        <span className="border border-gray-300 font-semibold px-2 rounded-md text-xs ml-1">
          {product.rating}
        </span>
        <span className="text-gray-500 text-xs ml-1 pr-3 border-r border-gray-400">
          {product.no_of_person_reviewed}
        </span>
        <span className="text-gray-500 text-sm pl-3">
          SKU: <small className="text-black font-medium">{product.product_code}</small>
        </span>
      </div>
      <p className="text-gray-600 py-3 text-sm">{product.short_desc}</p>
      <div className="flex items-center gap-1 pb-2">
        <p className="text-red-600 text-2xl font-bold">${product.discount}</p>
        <p className="text-gray-900 text-sm font-normal line-through">
          ${product.original_price}
        </p>
      </div>
      <button className="bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md">
        Order on Whatsapp
      </button>
      <div className="bg-orange-100 rounded-md flex items-center gap-4 p-3 mt-3 border border-orange-200">
        <p className="text-orange-700 font-bold text-sm">Special offer:</p>
        <div className="flex items-center gap-2">
          <small className="text-orange-700 border bg-orange-300 border-orange-300 rounded-md p-1 font-bold text-sm">
            {timeLeft.days}
          </small>
          <small className="text-orange-700 border bg-orange-300 border-orange-300 rounded-md p-1 font-bold text-sm">
            {timeLeft.hours}
          </small>
          <small className="text-orange-700 border bg-orange-300 border-orange-300 rounded-md p-1 font-bold text-sm">
            {timeLeft.minutes}
          </small>
          <small className="text-orange-700 font-bold text-sm">:</small>
          <small className="text-orange-700 border bg-orange-300 border-orange-300 rounded-md p-1 font-bold text-sm">
            {timeLeft.seconds}
          </small>
        </div>
        <p className="text-gray-600 text-xs">Remains until the end of the offer.</p>
      </div>
      <div className="flex items-center gap-2 py-3">
        <div className="flex items-center rounded-md gap-5 px-3 py-2 border border-gray-300">
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </div>
        <button className="bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md flex items-center gap-2">
          <IoBagOutline />
          Add to cart
        </button>
        <button className="bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-md flex items-center gap-2">
          <IoBagOutline />
          Buy Now
        </button>
      </div>
      <div className="border rounded-md border-gray-300">
        <div className="flex gap-7 border-b border-gray-300 p-2">
          <LiaCreditCard size={38} />
          <p className="text-xs text-gray-600">
            <small className="font-bold">Payment.</small> Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card, -5% discount in case of payment
          </p>
        </div>
        <div className="flex gap-7 border-b border-gray-300 p-2">
          <LuShieldCheck size={30} />
          <p className="text-xs text-gray-600">
            <small className="font-bold">Warranty.</small> The Consumer Protection Act does not provide for the return of this product of proper quality.
          </p>
        </div>
      </div>
      <div className="py-5 flex items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="border-gray-300 border rounded-md p-1">
            <FaRegHeart size={22} />
          </div>
          <p className="text-xs font-medium">Add to wishlist</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="border-gray-300 border rounded-md p-1">
            <MdIosShare size={22} />
          </div>
          <p className="text-xs font-medium">Share this Product</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="border-gray-300 border rounded-md p-1">
            <IoIosGitCompare size={22} />
          </div>
          <p className="text-xs font-medium">Compare</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsText;
