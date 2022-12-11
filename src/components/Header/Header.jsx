import React from "react";
import logoHeader from "../../assets/images/header/Rectangle 4.png";
import backgroundHeader from "../../assets/images/header/Rectangle 9.png";

import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import H4 from "../Title/H4";

const Header = () => {
  return (
    <header className="select-none">
      <div className="h-[800px] relative mb-10">
        <div>
          <img src={backgroundHeader} alt="" className="absolute" />
        </div>
        <div className="absolute flex justify-center w-[400px]">
          <div className="flex flex-col justify-center mt-20">
            <div className="absolute z-10 flex gap-[10px] h-10 p-10 text-sm text-white">
              <div className="mt-5 cursor-pointer ">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold m-5" : "m-5"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold m-5" : "m-5"
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold m-5" : "m-5"
                  }
                >
                  Contact
                </NavLink>
                <NavLink
                  to="pricing"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold m-5" : "m-5"
                  }
                >
                  Pricing
                </NavLink>
                <NavLink
                  to="product"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold m-5" : "m-5"
                  }
                >
                  Product
                </NavLink>
              </div>
              <div>
                <img
                  src={logoHeader}
                  alt=""
                  className="absolute w-[186px] h-[58px] ml-3"
                />
              </div>
              <Logo className="mt-4 gap-8 ml-[350px]"></Logo>
            </div>
          </div>
        </div>
        <HeaderContent></HeaderContent>
      </div>
    </header>
  );
};

function HeaderContent() {
  return (
    <div className="absolute flex flex-col mt-24">
      <div className="text-center">
        <h1
          className="absolute z-10 text-5xl font-bold text-white top-[210px] ml-[530px] w-[500px]
         text-center"
        >
          The best products start with Figma
        </h1>
      </div>
      <H4 className="absolute top-[330px] ml-[550px] text-white"></H4>
      <button
        className="absolute z-10 font-normal w-[236px] h-[52px] text-xl
   text-white bg-blue-600 rounded-[35px] top-[450px] ml-[660px]"
      >
        Try For Free
      </button>
    </div>
  );
}

export default Header;
