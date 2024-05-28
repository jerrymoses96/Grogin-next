import Image from "next/image";
import renderStars from "../helpers/renderStars";
import { CiHeart } from "react-icons/ci";

const ProductCard = ({ item }) => {
  const {
    product_id,
    category,
    discount,
    isOrganic,
    rating,
    product_name,
    original_price,
    in_stock,
  } = item;
  console.log(item);

  return (
    <div>
      <div className="p-3 h-full border border-[#E5E7EB] xl:border-b xl:border-[#E5E7EB] xl:w-1/3 sm:w-1/2 mobileM:w-full">
        <div>
          <div className="flex items-center justify-between">
            <button className="mt-1 text-white py-1  bg-red-700 uppercase text-xs font-semibold rounded-l-full rounded-r-full z-[1] min-w-[38px]">
              {discount}%
            </button>
            <CiHeart size={20} />
          </div>

          <div className="w-full xl:flex xl:justify-center">
            <Image
              src={`/image/products/${category}${product_id % 10}.png`}
              alt="link1two_one"
              width={170}
              height={170}
              className="  h-[170px] w-[170px] object-center "
            />
          </div>

          <div className="flex items-center justify-between mb-2 ">
            <div>
              {isOrganic && (
                <Image
                  src="/image/span.badge.png"
                  alt="organic"
                  width={70}
                  height={70}
                />
              )}
              {!isOrganic && (
                <div style={{ width: "20px", height: "20px" }}></div>
              )}
            </div>
            <Image
              src="/image/link image.png"
              alt="cold sale"
              width={25}
              height={25}
            />
          </div>
        </div>
        <div>
          {/* average rating */}

          <p className="text-[#030712] text-sm font-semibold mb-1 ">
            {product_name}
          </p>
          <div className="flex items-center gap-1 mb-2">
            {renderStars(rating)}
            <span className="text-[#9CA3AF] text-xs ml-1">{rating}</span>
          </div>
          <div className="flex items-center gap-1 pb-2 ">
            <p className="text-[#DC2626] text-xl font-bold">${discount}</p>
            <p className="text-[#111827] text-sm font-normal line-through">
              ${original_price}
            </p>
          </div>
          <div >
            {in_stock && (
              <div className="flex items-center gap-2">
                <Image
                  src={"/image/cart.png"}
                  alt="cold sale"
                  width={35}
                  height={35}
                />
                <p className="text-[#16A34A] font-bold text-xs">IN STOCK</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
