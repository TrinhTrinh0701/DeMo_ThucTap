import React from "react";
import PropTypes from "prop-types";

const H2 = (props) => {
  const { children, className = "" } = props;
  return (
    <h2 className={`text-5xl font-normal  mb-7 ${className}`}>{children}</h2>
  );
};
H2.propsTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};
export default H2;
