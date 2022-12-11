import React from "react";
import InstagramNavBlue from "../../assets/images/nav/Vector (10).png";
import TwitterNavBlue from "../../assets/images/nav/Vector (8).png";
import FacebookNavBlue from "../../assets/images/nav/Vector (9).png";
import PropTypes from "prop-types";

const LogoBlue = () => {
  return (
    <div className="w-full mt-20">
      <div className="flex gap-[20px] h-[150px]">
        <ImgLogo src={TwitterNavBlue}></ImgLogo>
        <ImgLogo src={FacebookNavBlue}></ImgLogo>
        <ImgLogo src={InstagramNavBlue}></ImgLogo>
      </div>
    </div>
  );
};

function ImgLogo(props) {
  const { src = "" } = props;
  return (
    <>
      <img src={src} alt="" className="w-[34px] h-[27px] object-cover" />
    </>
  );
}
ImgLogo.propTypes = {
  src: PropTypes.string.isRequired,
};
export default LogoBlue;
