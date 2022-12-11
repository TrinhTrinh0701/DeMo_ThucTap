import React from "react";
import Features3Nav from "../../assets/images/nav/Vector (1).png";
import H3Features from "./H3Features";
import H4Features from "./H4Features";
import ImgList from "./ImgList";

const Fastest = () => {
  return (
    <div className="w-[200px] h-[270px] text-center gap-10">
      <ImgList src={Features3Nav}></ImgList>

      <H3Features>Fastest way to take action</H3Features>
      <H4Features></H4Features>
    </div>
  );
};

export default Fastest;
