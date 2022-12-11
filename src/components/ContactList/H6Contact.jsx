import React from "react";

const H6Contact = ({ children, className }) => {
  return (
    <h6 className={` h-[46px] font-normal text-base ${className}`}>
      {children}
    </h6>
  );
};

export default H6Contact;
