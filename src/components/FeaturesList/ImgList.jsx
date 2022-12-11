import React from "react";
import PropTypes from "prop-types";

const ImgList = (props) => {
  const { src = "" } = props;
  return (
    <>
      <img
        src={src}
        alt=""
        className="mb-3 w-[46px] h-[46px] left-1 top-2 ml-[80px]"
      />
    </>
  );
};

ImgList.propsTypes = {
  src: PropTypes.string.isRequired,
};

export default ImgList;
