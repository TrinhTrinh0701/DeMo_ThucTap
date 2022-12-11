import React from "react";
import PropTypes from "prop-types";

const PricingContent = (props) => {
  const { className = "", number } = props;
  return (
    <div className="flex justify-center">
      <div className=" flex h-[100px] text-center ">
        <h1 className={` w-full h-[84px] font-bold text-7xl ${className}`}>
          {number}
        </h1>
      </div>
      <div className={`mt-2 ${className}`}>
        <h3 className="w-[13px] h-[28px] font-bold text-xl">$</h3>
        <h6 className="w-[90px] h-[23px] font-normal ">Per Month</h6>
      </div>
    </div>
  );
};
PricingContent.propsTypes = {
  classNam: PropTypes.string,
};
export default PricingContent;
