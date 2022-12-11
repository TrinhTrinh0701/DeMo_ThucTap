import React from "react";
import PropTypes from "prop-types";

const H7Pricing = (props) => {
  const { className } = props;
  return (
    <h6
      className={`w-[155px] h-[46px] font-normal text-center  mb-5 ${className}`}
    >
      Organize across all apps by hand
    </h6>
  );
};
H7Pricing.propsTypes = {
  classNam: PropTypes.string,
};

export default H7Pricing;
