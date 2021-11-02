import React from "react";
import Map from "../../Components/Map/Map";
import "./SpecificBusInfo.css";
import DriverCard from "../../Components/DriverCard/DriverCard";
import Price from "../../Components/Price/Price";
import DestinationMap from "../../Components/DestinationMap/DestinationMap";
import UberbusInfo from "../../Components/UberbusInfo/UberbusInfo";
import Arrow from "../../Components/Arrow/Arrow";
import { normalMap } from "../../constants/Map";

function SpecificBusInfo(props) {
  
  const driver = JSON.parse(localStorage.getItem("selected-driver"))

  return (
    <div>
      <div className="backButtonAbsolutePos">
        <Arrow back={() => props.history.goBack()} />
      </div>
      <Map to={null} from={null} mapSize={normalMap}/>
      <UberbusInfo noOfPassengers={driver.noOfPassengers}/>
      <hr className="hr" />
      <DriverCard driver={driver}/>
      <hr className="hr" />
      <Price />
      <hr className="hr1" />
      <DestinationMap />
    </div>
  );
}

export default SpecificBusInfo;
