import React from "react";
import PropTypes from "prop-types";

const H4 = (props) => {
  const { className = "" } = props;
  return (
    <div className="flex justify-center">
      <div className=" flex h-[130px] text-center ">
        <h4 className={` z-10 text-2xl  w-[480px]  text-center ${className}`}>
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </h4>
      </div>
    </div>
  );
};
H4.propTypes = {
  className: PropTypes.string,
};

export default H4;
