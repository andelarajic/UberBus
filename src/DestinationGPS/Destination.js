import React from "react";
import Navigation from "../Navigation/Navigation";
import InputMatched from "../InputMatched/InputMatched";
import Button from "../Button/Button";
import Map from "../Map/Map";
import "./Destination.css";
import Arrow from "../Arrow/Arrow";

function Destination(props) {
  return (
    <div>
      <div className="ArrowPos">
        <Arrow back={() => props.history.goBack()}/>
      </div>
      <div className="NavPos">
        <Navigation />
      </div>
      <Map />
      <InputMatched />
      <Button />
    </div>
  );
}

export default Destination;
