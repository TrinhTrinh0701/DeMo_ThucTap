import React from "react";
import Features1Nav from "../../assets/images/nav/Vector.png";
import H3Features from "./H3Features";
import H4Features from "./H4Features";
import ImgList from "./ImgList";

const OpenPoster = (props) => {
  const { src = "", title = "" } = props;
  return (
    <div className="w-[200px] h-[270px] text-center gap-10">
      {/* <ImgList src={Features1Nav}></ImgList> */}
      <img
        src={src}
        alt=""
        className="mb-3 w-[46px] h-[46px] left-1 top-2 ml-[80px]"
      />
      <h3 className="mb-3 text-xl font-bold">{title}</h3>

      {/* <H3Features>OpenType features Variable fonts</H3Features> */}
      <h4 className="text-lg font-normal">
        Slate helps you see how many more days you need to work to reach your
        financial goal.
      </h4>
    </div>
  );
};

export default OpenPoster;
