import PropTypes from "prop-types";
import React from "react";

const LogoPartnersTop = (props) => {
  const { src = "", className = "" } = props;
  return (
    <>
      <img src={src} alt="" className={className} />
      {/* <ImgLogo src={LogoGoogleNav} className="w-[273px]"></ImgLogo>
        <ImgLogo src={LogoAmazonNav} className="w-[273px]"></ImgLogo>
        <ImgLogo src={LogoMicrosoftNav} className="w-[301px]"></ImgLogo>
        <ImgLogo src={LogoUberNav} className="w-[220px]"></ImgLogo> */}
    </>
  );
};

LogoPartnersTop.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LogoPartnersTop;
