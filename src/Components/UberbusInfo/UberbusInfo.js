import React from "react";
import "./UberbusInfo.css";
import { IoPersonSharp } from "react-icons/io5";

function UberbusInfo({noOfPassengers}) {
  return (
    <div className="BusInfo">
      <img className="BusIcon" src="Images/Uberbus.jpg" alt="" />
      <div className="Aboutbus">
        <div className="UberBus">
          Uberbus
          <div className="Number">
            <IoPersonSharp className="Icon" /> {noOfPassengers}
          </div>
        </div>
        <p className="Time">09:10 - 11 min away</p>
      </div>
    </div>
  );
}

export default UberbusInfo;
