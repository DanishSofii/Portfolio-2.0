import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BiChatSquare, BsChatSquare, BsChatSquareText } from "react-icons/bs";

import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className=" fixed  bottom-2 lg:bottom-8 w-5/6 lg:w-full overflow-hidden z-50 flex flex-row items-center justify-center">
      <div className="container mx-auto  flex flex-row items-center justify-center">
        <div className=" w-[17rem] lg:w-2/6 bg-black/20 h-[50px] lg:h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-2 lg:px-5 flex justify-around items-center text-3 lg:text-xl text-white/50 ">
          <Link to="home" activeClass="active" smooth={true} spy={true} offset={-200} className="cursor-pointer w-[20px] h-[20px] lg:w-[60px] lg:h-[60px] flex items-center">
            <BiHomeAlt />
          </Link>
          <Link to="about" activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[20px] h-[20px] lg:w-[60px] lg:h-[60px] flex items-center justify-center">
            <BiUser />
          </Link>
          <Link to="services" activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[20px] h-[20px] lg:w-[60px] lg:h-[60px] flex items-center">
            <BsClipboardData />
          </Link>
          <Link to="work" activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[20px] h-[20px] lg:w-[60px] lg:h-[60px] flex items-center">
            <BsBriefcase />
          </Link>
          <Link to="contact" activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[20px] h-[20px] lg:w-[60px] lg:h-[60px] flex items-center">
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
