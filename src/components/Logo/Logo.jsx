import React from "react";
import TwitterHeaderWhite from "../../assets/images/header/Vector (14).png";
import FacebookHeaderWhite from "../../assets/images/header/Vector (15).png";
import InstagramHeaderWhite from "../../assets/images/header/Vector (16).png";
import PropTypes from "prop-types";

const Logo = (props) => {
  const { className } = props;
  return (
    <div className={`flex  ${className}`}>
      <ImgLogo src={TwitterHeaderWhite}></ImgLogo>
      <ImgLogo src={FacebookHeaderWhite}></ImgLogo>
      <ImgLogo src={InstagramHeaderWhite}></ImgLogo>
    </div>
  );
};

function ImgLogo(props) {
  const { src = "" } = props;
  return (
    <>
      <img src={src} alt="" className="w-[33px] h-[27px]" />
    </>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};
ImgLogo.propTypes = {
  src: PropTypes.string.isRequired,
};
export default Logo;
