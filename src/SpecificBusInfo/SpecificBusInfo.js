import React from "react";
import Map from "../Map/Map";
import "./SpecificBusInfo.css"
import InfoMap from "../InfoMap/InfoMap"
import { IoPersonSharp } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { RiLeafLine } from "react-icons/ri";


function SpecificBusInfo() {
  return (
    <div>

      <Map />
      <div className="BusInfo">
      <img className="BusIcon" src="Images/Uberbus.jpg" alt="" />
      <div className="Aboutbus">
      <div className="UberBus">
          Uberbus
          <div className="Number">
            <IoPersonSharp className="Icon" /> 11
          </div>
        </div>
        <p className="Time">09:10 - 11 min away</p>
      </div>
      <div className="AboutDriver">
      <hr className="hrInfo" />
      <div className="AboutDriver">
      <img className="DriverImg" src="Images/Driver.png" alt="" />
      <div className="Driver">
      Nathan Dumlao
      <div className="Car">
      Mercedes-Benz EQV
      </div>
<MdPersonOutline/>11<RiLeafLine className="color"/>
<img className="DriverImg" src="Images/Rating.png" alt="" />
      </div>
      <hr className="hrInfo" />
      </div>
      <div className="Price">
      <div className="PriceLeft"> 
      Total price<div>
        $12.5
      </div>
      <div className="PriceRight"> 
      Estimated time
      <div>
        11min
      </div>
      <hr className="hrInfo" />
      <div classname="UberMap">
      <img className="DriverImg" src="Images/Badge.png" alt="" />
      <img className="DriverImg" src="Images/Badge2.png" alt="" />
      <p>Pickup</p>
    <p>Location</p>
    <p>Dropp-off</p>
    <p>Location</p>
    <InfoMap/>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
  );
}

export default SpecificBusInfo;
