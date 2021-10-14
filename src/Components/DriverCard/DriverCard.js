import React from "react";
import "./DriverCard.css";
import { MdPersonOutline } from "react-icons/md";
import { RiLeafLine } from "react-icons/ri";

function DriverCard() {
  return (
    <div className="AboutDriver">
      <img className="DriverImg" src="Images/Driver.png" alt="" />
      <div className="Driver">
        Nathan Dumlao
        <div className="Car">Mercedes-Benz EQV</div>
        <div className="Number1">
          <MdPersonOutline className="IconPerson" />
          11
          <RiLeafLine className="IconColor" />
          <img className="Rating" src="Images/Rating.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
