import Image from "next/image";
import React from "react";

const FooterTop = () => {
  return (
    <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
      <div className="flex flex-col  justify-start w-[27%] md:w-full gap-[9px]">
        <h1 className="text-xl font-semibold">
          Join our newsletter for £10 offs
        </h1>
        <p className="text-[#6B7280] text-xs ">
          Register now to get latest updates on promotions & coupons.Don’t
          worry, we not spam!
        </p>
      </div>
      <div className="flex flex-row justify-center w-[31%] md:w-full mt-1.5 md:mt-0">
        <div className="flex flex-col items-center justify-start w-full gap-3">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row sm:flex-col justify-center items-center w-full sm:gap-5">
              <input
               
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full sm:w-full gap-[5px] border-blue_gray-100 border border-solid p-2 rounded-lg "
              />
              <button className="ml-[-72px] sm:ml-0 rounded-tr-lg rounded-br-lg bg-[#634C9F] p-2 text-white font-bold min-w-[73px]">
                SEND
              </button>
            </div>
          </div>
          <p className="text-xs">
            <span className="text-gray-600">
              By subscribing you agree to our{" "}
            </span>
            <span className="text-deep_purple-600 font-medium">
              Terms & Conditions and Privacy & Cookies Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
