import React from "react";
import MapNav from "../../assets/images/nav/@ map screen.png";
import LogoAmazonNav from "../../assets/images/nav/@ partner-style-2 (1).png";
import LogoUberNav from "../../assets/images/nav/@ partner-style-2 (3).png";
import LogoDropboxNav from "../../assets/images/nav/@ partner-style-2 (4).png";
import LogoGoogleNav from "../../assets/images/nav/@ partner-style-2.png";
import ContactUs1Nav from "../../assets/images/nav/bx_bx-map (1).png";
import AvatarNav from "../../assets/images/nav/Ellipse 2.png";
import LaptopNav from "../../assets/images/nav/laptop.png";
import TitleNav from "../../assets/images/nav/title.png";
import LogoIBMNav from "../../assets/images/nav/Vector (4).png";
import ContactUs2Nav from "../../assets/images/nav/Vector (6).png";
import ContactUs3Nav from "../../assets/images/nav/Vector (7).png";
import Button from "../Button/Button";
import FeaturesList from "../FeaturesList/FeaturesList";
import ContactUsHook from "../Form/ContactUsHook";
import InputFormHook from "../Form/InputFormHook";
import IconContent from "../IconContent/IconContent";
import ImgClip from "../ImgClip/ImgClip";
import LogoBlue from "../Logo/LogoBlue";
import LogoPartnersTop from "../Logo/LogoPartnersTop";
import FreeList from "../Pricing/FreeList";
import PricingContent from "../Pricing/PricingContent";
import StandarsList from "../Pricing/StandarsList";
import H2 from "../Title/H2";
import H4 from "../Title/H4";

const Nav = () => {
  return (
    <nav className="select-none">
      <div className="flex flex-col w-full h-[1370px]">
        <H2 className="text-center">Features</H2>
        <H4></H4>
        <FeaturesList></FeaturesList>
        <ImgClip></ImgClip>
      </div>
      <div className="flex gap-[180px] justify-center h-[530px]">
        <d iv className=" w-[350px]">
          <H2 className="w-[350px] h-[110px] mb-2">Fastest way to organize</H2>
          <h4 className="text-2xl font-normal w-[532px] h-[80px] mb-9">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </h4>
          <Button className=" w-[236px] font-bold">Try For Free</Button>
        </d>
        <div className="w-[525px] h-[300px]">
          <img src={LaptopNav} alt="" />
        </div>
      </div>
      <div className="flex gap-[50px] justify-center h-[625px]">
        <div className="w-[600px]">
          <img src={TitleNav} alt="" className="ml-3 h-[454px]" />
        </div>
        <div className="w-[600px] mt-10">
          <h3 className="font-bold text-xl h-[28px] w-[273px] mb-3">
            At your fingertips
          </h3>
          <H2 className="h-[110px] w-[324px]">Lightning fast prototyping</H2>
          <h3 className="font-bold w-[376px] h-[28px] text-xl">
            Subscribe to our Newsletter
          </h3>
          <h4 className="w-[331px] h-[25px] font-normal text-lg">
            Available exclusivery on Figmaland
          </h4>
          <div className="w-full mt-9">
            <InputFormHook></InputFormHook>
          </div>
        </div>
      </div>
      <div className=" h-[800px] flex flex-col">
        <div className="text-center ">
          <H2>Partners</H2>
        </div>
        <H4></H4>
        {/* <LogoPartnersTop></LogoPartnersTop>
        <LogoPartnersBottom></LogoPartnersBottom> */}
        <div className="flex justify-center ">
          <div className="flex text-center ">
            <LogoPartnersTop
              src={LogoGoogleNav}
              className="w-[273px]"
            ></LogoPartnersTop>
            <LogoPartnersTop
              src={LogoAmazonNav}
              className="w-[273px]"
            ></LogoPartnersTop>
            <LogoPartnersTop
              src={LogoDropboxNav}
              className="w-[301px]"
            ></LogoPartnersTop>
            <LogoPartnersTop
              src={LogoUberNav}
              className="w-[220px]"
            ></LogoPartnersTop>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="flex text-center ">
            <LogoPartnersTop
              src={LogoDropboxNav}
              className="w-[300px]"
            ></LogoPartnersTop>
            <LogoPartnersTop
              src={LogoGoogleNav}
              className="w-[273px]"
            ></LogoPartnersTop>
            <LogoPartnersTop
              src={LogoUberNav}
              className="w-[220px]"
            ></LogoPartnersTop>
            <LogoPartnersTop
              src={LogoAmazonNav}
              className="w-[273px]"
            ></LogoPartnersTop>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button className=" w-[236px] font-bold">Try For Free</Button>
        </div>
      </div>
      <div className="flex flex-col h-[750px]">
        <H2 className="text-center">Testimonials</H2>
        <div className="flex justify-center mt-32">
          <div className=" flex h-[100px] text-center ">
            <img src={LogoIBMNav} alt="" className="h-[60px] w-[150px]" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" flex h-[130px] text-center ">
            <h4 className="w-[967px] h-[80px] font-normal text-2xl">
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </h4>
          </div>
        </div>
        <div className="flex justify-center">
          <div className=" flex h-[150px] text-center ">
            <img src={AvatarNav} alt="" className="w-[50px] h-[50px]" />
          </div>
          <div className="ml-2">
            <h6 className="w-[150px] h-[23px] text-base font-normal">
              Organize across
            </h6>
            <h6 className="w-[82px] h-[28px] font-normal text-sm mt-2">
              Ui designer
            </h6>
          </div>
        </div>
        <div className="text-center">
          <Button className=" w-[276px] font-bold">More Testimonials</Button>
        </div>
      </div>
      <div className=" h-[1050px] flex flex-col bg-[#252B42]">
        <div className="text-center ">
          <H2 className="mt-20 text-white">Pricing</H2>
        </div>
        <H4 className="text-white"></H4>
        <div className="flex gap-[50px] justify-center">
          <FreeList title="FREE">
            <PricingContent number="0"></PricingContent>
          </FreeList>
          <StandarsList title="STANDARD">
            <PricingContent number="10" className="text-white"></PricingContent>
          </StandarsList>

          <FreeList title=" BUSINESS">
            <PricingContent number="99"></PricingContent>
          </FreeList>
          {/* <BusinessList></BusinessList> */}
        </div>
      </div>
      <div className="h-[980px] p-[52px] flex flex-col mt-[213px]">
        <H2 className="text-center">Contact Us</H2>
        <H4></H4>
        <div className="flex gap-[50px] justify-center mt-8">
          <div className="box-border flex justify-center ml-28">
            <div
              className=" flex h-[669px] w-[453px] rounded-[20px] p-[52px] border 
          border-[0px_13px_19px_rgba(0,_0, 0,_0.07)]text-center text-black bg-white"
            >
              <ContactUsHook></ContactUsHook>
            </div>
          </div>
          <div className="w-full mt-8 text-center ">
            <div className="flex gap-[20px] h-[150px] ">
              <IconContent
                src={ContactUs1Nav}
                title="6386 Spring St undefined Anchorage, Georgia 12473 United
                  States"
                className="ml-[150px]"
              ></IconContent>
              <IconContent
                src={ContactUs2Nav}
                title="   (843) 555-0130"
                className="ml-[140px]"
              ></IconContent>
              <IconContent
                src={ContactUs3Nav}
                title="   willie.jennings@example.com"
                className="ml-[130px]"
              ></IconContent>
            </div>
            <div className="flex ml-28">
              <img src={MapNav} alt="" />
            </div>
            <LogoBlue></LogoBlue>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
