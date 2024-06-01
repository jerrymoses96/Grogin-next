import Image from "next/image";
import React from "react";

const ProductImage = ({ product }) => {
  return (
    <div className="w-[50%] md:w-full">
      <div>
        <button className="mt-1 mb-1 text-white py-1 bg-red-700 uppercase text-xs font-semibold rounded-l-full rounded-r-full z-[1] min-w-[38px]">
          {product.discount}%
        </button>
        {product.isOrganic && (
          <Image
            src="/image/span.badge.png"
            alt="organic"
            width={70}
            height={70}
          />
        )}
        <Image
          src={`/image/products/${product.category}${
            product.product_id % 10
          }.png`}
          alt="product"
          width={500}
          height={500}
          className="object-cover h-[450px] w-full"
        />
      </div>
      <Image
        src={"/image/magnifier.png"}
        alt="magnifier"
        width={25}
        height={25}
      />
      <div className="flex justify-center gap-3">
        <Image
          src={`/image/products/${product.category}${
            product.product_id % 10
          }.png`}
          alt="heart"
          width={50}
          height={50}
          className="cursor-pointer border border-black rounded-lg"
        />
        <Image
          src={`/image/products/${product.category}${
            product.product_id % 10
          }.png`}
          alt="heart"
          width={50}
          height={50}
        />
        <Image
          src={`/image/products/${product.category}${
            product.product_id % 10
          }.png`}
          alt="heart"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default ProductImage;
