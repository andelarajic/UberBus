import React from "react";
import Map from "../Map/Map";
import DriverCardSarah from "../DriverCardSarah/DriverCardSarah";
import Price from "../Price/Price";
import DestinationMap from "../DestinationMap/DestinationMap";
import UberbusInfo from "../UberbusInfo/UberbusInfo";
import Arrow from "../Arrow/Arrow";

function SpecificBusInfo2(props) {
  return (
    <div>
      <div className="ArrowPos">
        <Arrow back={() => props.history.goBack()} />
      </div>
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
