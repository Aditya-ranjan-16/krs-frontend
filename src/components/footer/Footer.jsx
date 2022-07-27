import React from "react";
import Text from "./Text";
import Useful from "./Useful";
import Social from "./Social";
import News from "./News";

function Footer() {
  return (
    <div id="footer" className="bg-[#111111] px-12 pt-8">
      <div className="p-4 flex flex-col lg:flex-row items-center justify-between ">
        <Text />
        <div className="flex space-x-20">
        <Useful />
        <Social />

        </div>
       
        <News />
        
      </div>

      <h1
        className="text-yellow-500 text-base flex justify-center"
      >
        Copyrights Reserved @2022 | KIIT Robotics Society
      </h1>
    </div>
  );
}
export default Footer;
