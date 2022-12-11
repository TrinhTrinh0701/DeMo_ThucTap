import React from "react";
import PropTypes from "prop-types";

const H1Pricing = (props) => {
  const { className = "", children } = props;
  return (
    <div className=" flex h-[100px] text-center ">
      <h1 className={` w-full h-[84px] font-bold text-7xl ${className}`}>
        {children}
      </h1>
    </div>
  );
};
H1Pricing.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default H1Pricing;
