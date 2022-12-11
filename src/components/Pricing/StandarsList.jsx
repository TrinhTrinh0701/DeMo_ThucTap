import React from "react";
import Button from "../Button/Button";
import H1Pricing from "./H1Pricing";
import H3Pricing from "./H3Pricing";
import H6Pricing from "./H6Pricing";
import H7Pricing from "./H7Pricing";
import PricingContent from "./PricingContent";

const StandarsList = (props) => {
  const { title = "", children } = props;
  return (
    <div className="flex justify-center ">
      <div className=" flex h-[693px] w-[335px] rounded-[10px] p-[83px] text-center bg-[#2091F9]">
        <div className="w-full text-center ">
          <H3Pricing className="text-white">{title}</H3Pricing>
          <H7Pricing className="ml-2 text-white"></H7Pricing>
          {children}
          <H6Pricing className="text-white"></H6Pricing>
          <div className="flex justify-center">
            <div className=" flex h-[130px] text-center ">
              <Button className=" w-[255px] font-normal bg-white text-[#2091F9]">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandarsList;
