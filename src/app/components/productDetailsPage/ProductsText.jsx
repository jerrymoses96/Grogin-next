import React from "react";
import renderStars from "../helpers/renderStars";
import { IoBagOutline } from "react-icons/io5";
import { LiaCreditCard } from "react-icons/lia";
import { LuShieldCheck } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

const ProductsText = ({ product }) => {
  return (
    <div className="w-[50%]">
      <h2 className="text-4xl font-bold ">{product.product_name}</h2>
      <div className="flex items-center gap-1 mb-2 border-b py-5 border-[#E5E7EB] ">
        {renderStars(product.rating)}
        <span className="border border-gray-300 font-semibold px-2 rounded-md text-xs ml-1">
          {product.rating}
        </span>
        <span className="text-gray-500  text-xs ml-1 pr-3 border-r border-gray-400">
          {product.no_of_person_reviewed}{" "}
        </span>
        <span className="text-gray-500 text-sm pl-3">
          SKU:{" "}
          <small className="text-black font-medium">
            {product.product_code}
          </small>
        </span>
      </div>
      <p className="text-[#4B5563] py-3 text-sm">{product.short_desc}</p>
      <div className="flex items-center gap-1 pb-2">
        <p className="text-[#DC2626] text-2xl font-bold">${product.discount}</p>
        <p className="text-[#111827] text-sm font-normal line-through">
          ${product.original_price}
        </p>
      </div>
      <button className="bg-[#16A34A] text-white text-sm font-medium px-4 py-2 rounded-md">
        Order on Whatsapp
      </button>
      <div className="flex items-center gap-2 py-3">
        <div className="flex items-center rounded-md gap-5 px-3 py-2 border border-[#D1D5DB]">
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </div>
        <button className="bg-[#16A34A] text-white text-sm font-medium px-4 py-2 rounded-md flex items-center gap-2 ">
          <IoBagOutline />
          Add to cart
        </button>
        <button className="bg-[#212529] text-white text-sm font-medium px-4 py-2 rounded-md flex items-center gap-2">
          <IoBagOutline />
          Buy Now
        </button>
      </div>
      <div className="border rounded-md border-[#E5E7EB]">
        <div className="flex gap-7 border-b border-[#E5E7EB] p-2">
          <LiaCreditCard size={38} />
          <p className="text-xs text-[#6B7280]">
            <small className="font-bold text-xs">Payment.</small> Payment upon
            receipt of goods, Payment by card in the department, Google Pay,
            Online card, -5% discount in case of payment
          </p>
        </div>
        <div className="flex gap-7 border-b border-[#E5E7EB] p-2">
          <LuShieldCheck size={30} />
          <p className="text-xs text-[#6B7280]">
            <small className="font-bold text-xs">Warranty.</small> The Consumer
            Protection Act does not provide for the return of this product of
            proper quality.
          </p>
        </div>
      </div>
      <div className="py-5">
        <div  className=" flex items-center gap-2  ">
          <CiHeart size={25} className="border-[#E5E7EB] border rounded-md  " />
          <p className="text-xs ">Add to wishlist</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsText;
