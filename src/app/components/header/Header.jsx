import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMid from "./HeaderMid";
import { calculateTimeLeft } from "../general/calculateTimeLeft";
import HeaderBottom from "./HeaderBottom";
import Headerdown from "./Headerdown";

const Header = () => {
  // Calculate initialTimeLeft synchronously during server-side rendering
  const initialTimeLeft = calculateTimeLeft();
  return (
    <div>
      {/* Pass initialTimeLeft as a prop to HeaderTop */}
      <HeaderTop initialTimeLeft={initialTimeLeft} />
      <HeaderMid />
      <HeaderBottom />
      <Headerdown />
    </div>
  );
};

export default Header;
