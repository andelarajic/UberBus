import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";

const Navigation = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  let menu;

  if (showMenu) {
    menu = (
      <div>
        <div>Contact Support</div>
        <div>Settings</div>
        <div>Information Center</div>
      </div>
    );
  }

  return (
    <nav>
      <div>
        <FontAwesomeIcon 
          icon={faBars}
          onClick={(e) => setShowMenu(!showMenu)}
        />
      </div>
      {menu}
    </nav>
  );
};

export default Navigation;
