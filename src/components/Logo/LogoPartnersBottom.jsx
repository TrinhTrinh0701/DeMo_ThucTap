import React from "react";
import LogoAmazonNav from "../../assets/images/nav/@ partner-style-2 (1).png";
import LogoUberNav from "../../assets/images/nav/@ partner-style-2 (3).png";
import LogoDropboxNav from "../../assets/images/nav/@ partner-style-2 (4).png";
import LogoGoogleNav from "../../assets/images/nav/@ partner-style-2.png";
import PropTypes from "prop-types";

const LogoPartnersBottom = () => {
  return (
    <div className="flex justify-center ">
      <div className=" flex h-[230px] text-center ">
        <ImgLogo src={LogoDropboxNav} className="w-[300px]"></ImgLogo>
        <ImgLogo src={LogoGoogleNav} className="w-[273px]"></ImgLogo>
        <ImgLogo src={LogoUberNav} className="w-[220px]"></ImgLogo>
        <ImgLogo src={LogoAmazonNav} className="w-[273px]"></ImgLogo>
      </div>
    </div>
  );
};
function ImgLogo(props) {
  const { src = "", className = "" } = props;
  return (
    <>
      <img src={src} alt="" className={`h-[163px] ${className} `} />
    </>
  );
}
ImgLogo.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default LogoPartnersBottom;
