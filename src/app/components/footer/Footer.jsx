import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import FooterMid from "./FooterMid";

const Footer = () => {
  return (
    <footer className="flex justify-center  items-center  mt-[60px] pt-12 w-full md:pt-5 bg-gray-100">
      <div className="flex flex-row justify-center wrapper mx-auto ">
        <div className="flex flex-col justify-center w-full">
          {/* footer top  */}
          <FooterTop />
          {/* footer Mid */}
          <FooterMid />
          {/* footer bottom */}
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
