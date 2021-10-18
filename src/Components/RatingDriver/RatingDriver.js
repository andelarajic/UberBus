import React from "react";
import "./RatingDriver.css";
import { MdPersonOutline } from "react-icons/md";
import { RiLeafLine } from "react-icons/ri";

function RatingDriver() {
  return (
    <div className="ArrivalDriverCard">
      <hr className="hrRating" />
      <div className="AboutDriver">
        <img className="DriverImgArr" src="Images/Driver.png" alt="" />
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
      <div className="ButtonCont">
        <div className="ButtonConColor1">
          <p className="ButtonConText">Rate Your Driver</p>
        </div>
        <div className="ButtonConColor2">
          <p className="ButtonConText">Tip Your Driver</p>
        </div>
      </div>
      <hr className="hrRating" />
    </div>
  );
}

export default RatingDriver;
