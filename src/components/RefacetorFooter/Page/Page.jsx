import React from "react";
import H3Page from "../H3Page";

const Page = (props) => {
  const { title = "", children, className = "", titleList = "" } = props;
  return (
    <div className={` h-[270px] gap-10 ${className}`}>
      {/* <h3 className="mb-4 text-xl font-bold">{title}</h3> */}
      {/* <H3Page title="Pages"></H3Page> */}
      {children}
      {/* <h6 className="mb-3 text-base font-normal">{titleList}</h6> */}
      {/* <H3Page>Pages</H3Page>
      <H6Page>Home</H6Page>
      <H6Page>Product</H6Page>
      <H6Page>Pricing</H6Page>
      <H6Page>About</H6Page>
      <H6Page>Contact</H6Page> */}
    </div>
  );
};

export default Page;
