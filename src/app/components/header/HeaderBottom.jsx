import Image from "next/image";
import Link from "next/link";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const HeaderBottom = () => {
  return (
    <div className="wrapper flex items-center py-4 justify-between border-b border-[#E5E7EB
    ]">
      <Link href={"/"} className="mr-5">
        <Image src={"/image/Logo.png"} alt="grogin" width={150} height={40} />
      </Link>
      <Image
        className=""
        src={"/image/lINK.png"}
        alt="grogin"
        width={20}
        height={20}
      />
      <div className="mr-4">
        <p
          className="text-xs font-light text-[#030712
]"
        >
          Deliver to
        </p>
        <p className="text-xs font-semibold">all</p>
      </div>
      <input
        type="search"
        style={{
          width: "60%",
          padding: "12px",
          borderRadius: "4px",
          fontSize: "12px",
          backgroundColor: "#F3F4F6",
        }}
        placeholder="Search for products, categories, or brands.."
      />{" "}
      <div className="flex items-center gap-3 ml-3">
        <div className="flex flex-col items-center gap-1">
          <FaRegUser size={22} />
          <p className="text-xs"> joseph</p>
        </div>
        <div className="flex flex-col items-center gap-1 relative">
          <FaRegHeart size={22} />
          <p className="text-xs">Wishlist</p>
          <div className="w-4 h-4 rounded-full bg-red-500 flex justify-center items-center text-white text-xs absolute top-0 right-1">
            0
          </div>
        </div>
        <div className="flex flex-col items-center relative ">
          <IoCartOutline size={27} />
          <p className="text-xs">Your Cart </p>
          <div className="w-4 h-4 rounded-full bg-red-500 flex justify-center items-center text-white text-xs absolute top-0 right-2">
            0
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
