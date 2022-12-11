import React from "react";
import PropTypes from "prop-types";
import FeaturesImagesNav from "../../assets/images/nav/screen.png";
import FeaturesClipNav from "../../assets/images/nav/Vector (3).png";

const ImgClip = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1118px] h-[659px] mt-[80px] text-center relative">
        <Img src={FeaturesImagesNav} className="absolute"></Img>

        <Button>
          <Img
            src={FeaturesClipNav}
            className="w-[39px] h-[47px] left-[4px] right-[4px] ml-[60px]"
          ></Img>
        </Button>
      </div>
    </div>
  );
};

function Img(props) {
  const { src = "", className = "" } = props;
  return (
    <>
      <img src={src} alt="" className={` ${className}`} />
    </>
  );
}
function Button(props) {
  const { children } = props;
  return (
    <button className="bg-[#2091F9] w-[150px] h-[150px] rounded-full absolute mt-[250px]">
      {children}
    </button>
  );
}
Img.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.propTypes = {
  children: PropTypes.node,
};
export default ImgClip;
