import React from "react";
import Map from "../Map/Map";
import "./SpecificBusInfo.css";
import DriverCard from "../DriverCard/DriverCard";
import Price from "../Price/Price";
import DestinationMap from "../DestinationMap/DestinationMap";
import UberbusInfo from "../UberbusInfo/UberbusInfo";

function SpecificBusInfo() {
  return (
    <div>
      <Map />
      <UberbusInfo />
      <hr className="hr" />
      <DriverCard />
      <hr className="hr" />
      <Price />
      <hr className="hr" />
      <DestinationMap />
    </div>
  );
}

export default SpecificBusInfo;
