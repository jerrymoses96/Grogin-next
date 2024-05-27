import Image from "next/image";
import React from "react";

const FooterMid = () => {
  return (
    <div className="border-blue_gray-100 flex justify-between lg:flex-col lg:gap-10  border-t border-solid mt-[55px] py-[50px]">
      {/* 1st col  */}
      <div className="w-1/5 lg:w-full flex flex-col gap-5 ">
        <h3 className="text-sm font-semibold">Do You Need Help ?</h3>
        <p className="p-[#6B7280] text-sm">
          Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
          Pressa fåmoska.
        </p>
        <div className="flex gap-5 items-center">
          <Image
            src="/image/List → Item.png"
            alt="listitem_one"
            width={28}
            height={28}
            className="h-[28px] w-[28px]"
          />
          <div>
            <p className="p-[#111827] text-xs mb-1">Monday-Friday: 08am-9pm</p>
            <p className="text-xl font-bold">0 800 300-353</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <Image
            src="/image/List → Item2.png"
            alt="listitem_three"
            width={28}
            height={28}
            className="h-[28px] w-[28px]"
          />
          <div>
            <p className="p-[#111827] text-xs mb-1">Need help with your order?</p>
            <p className="text-sm font-semibold">info@example.com</p>
          </div>
        </div>
      </div>
      {/* 2nd col  */}
      <div className="w-1/5 lg:w-full">
        <p className="mb-5 font-semibold text-sm">Make Money with Us</p>
        <ul className="flex flex-col items-start justify-start w-full gap-2">
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Sell on Grogin
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Sell Your Services on Grogin
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Sell on Grogin Business
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p  className="text-[#4B5563] text-sm" >
                Sell Your Apps on Grogin
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Become an Affilate
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Advertise Your Products
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Sell-Publish with Us
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Become an Blowwe Vendor
              </p>
            </a>
          </li>
        </ul>
      </div>
      {/* 3 rd col  */}
      <div className="w-1/5 lg:w-full">
        <p className="mb-5 font-semibold text-sm">Let Us Help You</p>
        <ul className="flex flex-col items-start justify-start w-full gap-2">
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Accessibility Statement
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Your Orders
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Returns & Replacements
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Shipping Rates & Policies
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Refund and Returns Policy
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Privacy Policy
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Terms and Conditions
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Cookie Settings
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Help Center
              </p>
            </a>
          </li>
        </ul>
      </div>
      {/* 4 th col  */}
      <div className="w-1/5 lg:w-full">
        <p className="mb-5 font-semibold text-sm">Get to Know Us</p>
        <ul className="flex flex-col items-start justify-start mb-[35px] gap-2">
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Careers for Grogin
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                About Grogin
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Inverstor Relations
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Grogin Devices
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Customer reviews
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Social Responsibility
              </p>
            </a>
          </li>
          <li>
            <a href="#">
              <p className="text-[#4B5563] text-sm">
                Store Locations
              </p>
            </a>
          </li>
        </ul>
      </div>
      {/* 5th col  */}
      <div className="w-1/5 lg:w-full">
        <p className="mb-5 font-semibold text-sm">Download our app</p>
        <div className="flex items-center gap-5 mb-2">
          <Image
            src="/image/Link → google-play-button-dark.png.png"
            alt="linkgooglep_one"
            width={28}
            height={28}
            className="w-[55%] lg:w-[15%] sm:w-[20%] mobileM:w-[35%]"
          />
          <p className="p-[#6B7280] text-xs">Download App Get -10% Discount</p>
        </div>
        <div className="flex items-center gap-5">
          <Image
            src="/image/Link → google-play-button-dark.png.png"
            alt="linkapplest_one"
            width={28}
            height={28}
            className="w-[55%] lg:w-[15%] sm:w-[20%] mobileM:w-[35%]"
          />
          <p className="p-[#6B7280] text-xs">Download App Get -20% Discount</p>
        </div>
        <div className="mt-10">
          <p className="p-sm font-semibold">Follow us on social media:</p>
          <div className="flex flex-row justify-start gap-1">
            <button size="xl" className="w-[36px]  rounded-md ">
              <Image
                className="mt-2"
                src="/image/List → Item → Link.png"
                width={28}
                height={28}
                alt="social media"
              />
            </button>
            <button size="xl" className="w-[36px] rounded-md">
              <Image
                className="mt-2"
                src="/image/List → Item → Link (1).png"
                width={28}
                height={28}
                alt="social media"
              />
            </button>
            <button size="xl" className="w-[36px] rounded-md">
              <Image
                className="mt-2"
                src="/image/List → Item → Link (2).png"
                width={28}
                height={28}
                alt="social media"
              />
            </button>
            <button size="xl" className="w-[36px] rounded-md">
              <Image
                className="mt-2"
                src="/image/List → Item → Link (3).png"
                width={28}
                height={28}
                alt="social media"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMid;
