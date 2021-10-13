import React from "react";
import Navigation from "../Navigation/Navigation";
import InputMatched from "../InputMatched/InputMatched";
import Button from "../Button/Button";
import Map from "../Map/Map";
import "./Destination.css";

function Destination(props) {
  return (
    <div>
      <Navigation />
      <Map />
      <InputMatched />
      <Button />
    </div>
  );
}

export default Destination;
