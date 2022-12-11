import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { children, className = "" } = props;
  return (
    <button
      className={`bg-[#2091F9] box-border p-4 h-[60px] text-xl
          text-white rounded-[35px] ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
