import React from "react";
import Map from "../Map/Map";
import "./Choosebus.css";
import Arrow from "../Arrow/Arrow";
import { IoPersonSharp } from "react-icons/io5";

function Choosebus() {
  return (
    <div>
      <Arrow />
      <Map />
      <p className="Choose">Choose a bus</p>
      <div className="UberImage">
        <img className="Image" src="Images/Uberbus.jpg" alt="" />
        <div className="UberBus">
          Uberbus
          <div className="Number">
            <IoPersonSharp className="Icon" /> 11
          </div>
        </div>
        <p className="Time">09:10 - 11 min away</p>
      </div>
      <hr className="hr" />
      <div className="UberImage">
        <img className="Image" src="Images/Uberbus.jpg" alt="" />
        <div className="UberBus">
          Uberbus
          <div className="Number">
            <IoPersonSharp className="Icon" /> 11
          </div>
        </div>
        <p className="Time">09:10 - 11 min away</p>
        <hr className="hr" />
      </div>
    </div>
  );
}

export default Choosebus;
