import React from "react";

const IconContent = (props) => {
  const { src = "", title = "", className = "" } = props;
  return (
    <div className="w-[240px] text-center gap-10">
      <img src={src} alt="" className={`mb-3 w-[26px] h-[32px] ${className}`} />
      <h6 className="w-[310px] h-[46px] font-normal text-base">{title}</h6>
    </div>
  );
};

export default IconContent;
