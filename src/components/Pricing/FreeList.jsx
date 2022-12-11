import React from "react";
import Button from "../Button/Button";
import H1Pricing from "./H1Pricing";
import H3Pricing from "./H3Pricing";
import H6Pricing from "./H6Pricing";
import H7Pricing from "./H7Pricing";
import PricingContent from "./PricingContent";

const FreeList = (props) => {
  const { title = "", children } = props;
  return (
    <div className="flex justify-center mt-11 ">
      <div className=" flex h-[607px] w-[335px] rounded-[10px] p-[40px] text-center text-black bg-white">
        <div className="w-full text-center ">
          <H3Pricing>{title}</H3Pricing>
          <H7Pricing className="ml-12"></H7Pricing>
          {children}

          <H6Pricing className="ml-10"></H6Pricing>
          <div className="flex justify-center">
            <div className=" flex h-[130px] text-center ">
              <Button className=" w-[255px] font-normal">Order Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeList;
