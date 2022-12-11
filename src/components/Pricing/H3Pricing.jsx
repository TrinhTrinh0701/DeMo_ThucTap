import React from "react";
import PropTypes from "prop-types";

const H3Pricing = (props) => {
  const { children, className = "" } = props;
  return (
    <h3 className={`text-xl font-bold h-[28px] ${className}`}>{children}</h3>
  );
};
H3Pricing.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default H3Pricing;
