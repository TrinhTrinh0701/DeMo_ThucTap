import React from "react";
import Features3Nav from "../../assets/images/nav/Vector (1).png";
import Features2Nav from "../../assets/images/nav/Vector (2).png";
import Features1Nav from "../../assets/images/nav/Vector.png";
import OpenPoster from "./OpenPoster";

const FeaturesList = () => {
  return (
    <div className="flex gap-[100px] justify-center ">
      <OpenPoster
        src={Features1Nav}
        title="OpenType features Variable fonts"
      ></OpenPoster>
      <OpenPoster src={Features2Nav} title="Design with real data"></OpenPoster>
      <OpenPoster
        src={Features3Nav}
        title="Fastest way to take action"
      ></OpenPoster>
      {/* <DesignPoster></DesignPoster>
      <Fastest></Fastest> */}
    </div>
  );
};

export default FeaturesList;
