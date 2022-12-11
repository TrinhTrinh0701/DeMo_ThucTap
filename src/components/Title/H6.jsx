import React from "react";
import PropTypes from "prop-types";

const H6 = (props) => {
  const { className = "" } = props;
  return (
    <h6
      className={`w-[170px] h-[28px] font-normal text-base  text-center mb-5 ${className}`}
    >
      Pricing Feature
    </h6>
  );
};
H6.propsTypes = {
  classNam: PropTypes.string,
};
export default H6;
