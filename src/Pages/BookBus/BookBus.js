import React from "react";
import "./BookBus.css";
import Map from "../../Components/Map/Map";
import DriverCard from "../../Components/DriverCard/DriverCard";
import Price from "../../Components/Price/Price";
import BookBusMap from "../../Components/BookBusMap/BookBusMap";
import UberbusInfo from "../../Components/UberbusInfo/UberbusInfo";
import Arrow from "../../Components/Arrow/Arrow";
import { normalMap } from "../../constants/Map";

function BookBus(props) {
  
  const driver = JSON.parse(localStorage.getItem("selected-driver"))

  return (
    <div>
      <div className="backButtonAbsolutePos">
        <Arrow back={() => props.history.goBack()} />
      </div>
      <Map to={null} from={null} mapSize={normalMap}/>
      <UberbusInfo passengers={driver.passengers}/>
      <hr className="hr" />
      <DriverCard driver={driver}/>
      <hr className="hr" />
      <Price />
      <hr className="hr1" />
      <BookBusMap />
    </div>
  );
}

export default BookBus;
