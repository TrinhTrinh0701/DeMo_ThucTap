import React from "react";
import Icon1Footer from "../../assets/images/footer/bx_bx-map.png";
import Icon2Footer from "../../assets/images/footer/Vector (12).png";
import Logo from "../Logo/Logo";
import H3Page from "../RefacetorFooter/H3Page";
import H6Page from "../RefacetorFooter/H6Page";
import Page from "../RefacetorFooter/Page/Page";
const Footer = () => {
  return (
    <footer className="select-none">
      <div className="flex justify-center bg-[#252B42] text-white h-[477px]">
        <div className="flex gap-[100px] ml-20 cursor-pointer justify-center mt-[160px] ">
          <Page>
            <H3Page>Pages</H3Page>
            <H6Page>Home</H6Page>
            <H6Page>Contact</H6Page>
            <H6Page>About</H6Page>
            <H6Page>Pricing</H6Page>
            <H6Page>Product</H6Page>
          </Page>
          <Page>
            <H3Page>Tomothy</H3Page>
            <H6Page>Eleanor Edwards</H6Page>
            <H6Page>Ted Robertson</H6Page>
            <H6Page>Annette Russell</H6Page>
            <H6Page>Jennie Mckinney</H6Page>
            <H6Page>Gloria Richards</H6Page>
          </Page>
          <Page>
            <H3Page>Jane Black</H3Page>
            <H6Page>Philip Jones</H6Page>
            <H6Page>Product</H6Page>
            <H6Page>Colleen Russell</H6Page>
            <H6Page>Marvin Hawkins</H6Page>
            <H6Page>Bruce Simmmons</H6Page>
          </Page>
          {/* <Tomothy></Tomothy>
          <JaneBlack></JaneBlack> */}
        </div>
        <div className="justify-center mt-[160px] ml-28">
          <div className="flex w-[350px] h-[55px] gap-2">
            <img
              src={Icon1Footer}
              alt=""
              className="w-[32px] h-[38px] object-cover "
            />
            <h6 className="mt-3 text-sm font-normal">
              7480 Mockingbird Hill undefined
            </h6>
          </div>
          <div className="flex w-[300px] h-[60px] ml-2 gap-4">
            <img
              src={Icon2Footer}
              alt=""
              className="w-[20px] h-[31px] object-cover "
            />
            <h6 className="text-sm font-normal">(239) 555-0108</h6>
          </div>
          <div className="w-full">
            <Logo className="gap-[20px] h-[150px]"></Logo>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
