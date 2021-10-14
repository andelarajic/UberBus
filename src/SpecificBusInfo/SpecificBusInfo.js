import React from "react";
import Map from "../Map/Map";
import "./SpecificBusInfo.css";
import DriverCard from "../DriverCard/DriverCard";
import Price from "../Price/Price";
import DestinationMap from "../DestinationMap/DestinationMap";
import UberbusInfo from "../UberbusInfo/UberbusInfo";
import Arrow from "../Arrow/Arrow";

function SpecificBusInfo(props) {
  return (
    <div>
      <div className="ArrowPos">
        <Arrow back={() => props.history.goBack()} />
      </div>
      <Map />
      <UberbusInfo />
      <hr className="hr" />
      <DriverCard />
      <hr className="hr" />
      <Price />
      <hr className="hr1" />
      <DestinationMap />
    </div>
  );
}

export default SpecificBusInfo;
