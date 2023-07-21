import React from "react";
import "./Navbar.scss";
import { CiSearch } from "react-icons/ci";
import { BsGlobe } from "react-icons/bs";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="main">
      <div className="nav">
        <div>
          {" "}
          <BsGlobe />
        </div>
        <div>Global News</div>
        <div>
          <CiSearch />
        </div>
      </div>

     
    </div>
  );
};

export default Navbar;
