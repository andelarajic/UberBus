import React from "react";
import "./BookBus.css";
import Map from "../../Components/Map/Map";
import DriverCard from "../../Components/DriverCard/DriverCard";
import Price from "../../Components/Price/Price";
import BookBusMap from "../../Components/BookBusMap/BookBusMap";
import UberbusInfo from "../../Components/UberbusInfo/UberbusInfo";
import Arrow from "../../Components/Arrow/Arrow";

function BookBus(props) {
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
      <BookBusMap />
    </div>
  );
}

export default BookBus;
