import React from "react";
import H6 from "../Title/H6";
import PropTypes from "prop-types";

const H6Pricing = (props) => {
  const { className = "" } = props;
  return (
    <div className={`${className}`}>
      <H6></H6>
      <H6></H6>
      <H6></H6>
      <H6></H6>
      <H6></H6>
    </div>
  );
};
H6Pricing.propsTypes = {
  classNam: PropTypes.string,
};
export default H6Pricing;
