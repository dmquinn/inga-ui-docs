import React from "react";
import Logo from "../logo.png";
import { FiGithub } from "react-icons/fi";
import { FaNpm } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

const Header = ({ isOpen }) => {
  return (
    <>
      <div className="row w-100 shadow h-10 header z-4">
        <div className="col-md-3">
          <img src={Logo} className="h-10 px-5" />
        </div>
        <div className="col-md-9">
          <div className="row w-100 j-end">
            <FiGithub size={30} className="mt-1 p-1 text- grey" />{" "}
            <FaNpm size={50} className="mt-1 px-1 mr-3 npm" />{" "}
          </div>
          <input placeholder="search Inga-UI" className="px-2 mt--2" />
          <BiSearchAlt className="ml--2" />
        </div>
        {isOpen === false && (
          <div className="row w-100 p-1 mt--2 j-center">
            <p className="p-1 boxBorder rounded bg-white">Layout</p>{" "}
            <p className="p-1 boxBorder rounded bg-white">Typography</p>
            <p className="p-1 boxBorder rounded bg-white">Positioning</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
