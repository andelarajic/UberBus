import React from "react";
import InfoMap from "../InfoMap/InfoMap";
import "./DestinationMap.css";

function DestinationMap() {
  return (
    <div classname="UberMap">
      <InfoMap />
      <p className="DestinationText">Pickup</p>
      <p className="DestinationText">Location</p>
      <img className="UberImg" src="Images/Badge.png" alt="" />
      <hr className="vl" />
      <img className="UberImg" src="Images/Badge2.png" alt="" />
      <p className="DestinationText">Dropp-off</p>
      <p className="DestinationText">Location</p>
    </div>
  );
}

export default DestinationMap;
