import React from "react";
import Map from "../Map/Map";
import DriverCardSarah from "../DriverCardSarah/DriverCardSarah";
import Price from "../Price/Price";
import DestinationMap from "../DestinationMap/DestinationMap";
import UberbusInfo from "../UberbusInfo/UberbusInfo";

function SpecificBusInfo2() {
  return (
    <div>
      <Map />
      <UberbusInfo />
      <hr className="hr" />
      <DriverCardSarah />
      <hr className="hr" />
      <Price />
      <hr className="hr" />
      <DestinationMap />
    </div>
  );
}

export default SpecificBusInfo2;
