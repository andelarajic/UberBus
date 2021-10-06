import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FiMenu } from "react-icons/fi";
import { BsX } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CgSupport } from "react-icons/cg";
import "./Navigation.css";

const Navigation = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  let menu;

  if (showMenu) {
    menu = (
      <div className="navbar">
        <BsX
          className="icon2"
          icon={faTimes}
          onClick={(e) => setShowMenu(!showMenu)}
        />
        <div className="nav">
          <button className="navicon">
            <CgSupport />
          </button>
          <button className="navtext">Contact Support</button>
        </div>
        <div className="nav">
          <button className="navicon">
            <FiSettings />
          </button>
          <button className="navtext">Settings</button>
        </div>
        <div className="nav">
          <button className="navicon">
            <AiOutlineInfoCircle />
          </button>
          <button className="navtext">Information Center</button>
        </div>
        <div className="nav">
          <button className="logout">Logout</button>
        </div>
      </div>
    );
  }

  return (
    <nav>
      <div className="icon">
        <FiMenu icon={faBars} onClick={(e) => setShowMenu(!showMenu)} />
      </div>
      {menu}
    </nav>
  );
};

export default Navigation;
