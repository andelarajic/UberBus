import React from "react";
import Map from "../../Components/Map/Map";
import DriverCardSarah from "../../Components/DriverCardSarah/DriverCardSarah";
import Price from "../../Components/Price/Price";
import DestinationMap from "../../Components/DestinationMap/DestinationMap";
import UberbusInfo from "../../Components/UberbusInfo/UberbusInfo";
import Arrow from "../../Components/Arrow/Arrow";

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
