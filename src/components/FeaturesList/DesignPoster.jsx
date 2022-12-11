import React from "react";
import Features2Nav from "../../assets/images/nav/Vector (2).png";
import H3Features from "./H3Features";
import H4Features from "./H4Features";
import ImgList from "./ImgList";

const DesignPoster = () => {
  return (
    <div className="w-[200px] h-[270px] text-center gap-10">
      <ImgList src={Features2Nav}></ImgList>
      <H3Features>Design with real data</H3Features>
      <H4Features></H4Features>
    </div>
  );
};

export default DesignPoster;
