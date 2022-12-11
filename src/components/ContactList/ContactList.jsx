import React from "react";
import ContactUs1Nav from "../../assets/images/nav/bx_bx-map (1).png";
import ContactUs2Nav from "../../assets/images/nav/Vector (6).png";
import ContactUs3Nav from "../../assets/images/nav/Vector (7).png";
import H6Contact from "./H6Contact";
const ContactList = () => {
  return (
    <div className="flex gap-[20px] h-[150px] ">
      <div className="w-[240px] text-center gap-10">
        <img
          src={ContactUs1Nav}
          alt=""
          className="mb-3 w-[26px] h-[32px] ml-[150px]"
        />
        <H6Contact className="w-[310px]">
          6386 Spring St undefined Anchorage, Georgia 12473 United States
        </H6Contact>
      </div>
      <div className="w-[200px] h-[270px] text-center gap-10">
        <img
          src={ContactUs2Nav}
          alt=""
          className="mb-3 w-[26px] h-[32px] ml-[130px]"
        />
        <H6Contact className="w-[293px]"> (843) 555-0130</H6Contact>
      </div>
      <div className="w-[200px] h-[270px] text-center gap-10">
        <img
          src={ContactUs3Nav}
          alt=""
          className="mb-3 w-[26px] h-[32px] ml-[130px]"
        />
        <H6Contact className="w-[293px]">
          {" "}
          willie.jennings@example.com
        </H6Contact>
      </div>
    </div>
  );
};

export default ContactList;
