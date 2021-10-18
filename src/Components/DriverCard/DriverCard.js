import React from "react";
import "./DriverCard.css";
import { MdPersonOutline } from "react-icons/md";
import { RiLeafLine } from "react-icons/ri";

function DriverCard({driver}) {
  return (
    <div className="AboutDriver">
      <img className="DriverImg" src={driver.profilePicture} alt="" />
      <div className="Driver">
        {driver.firstname} {driver.lastname}
        <div className="Car">{driver.car}</div>
        <div className="Number1">
          <MdPersonOutline className="IconPerson" />
          {driver.noOfPassengers}
          <RiLeafLine className="IconColor" />
          <img className="Rating" src={driver.rating} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
