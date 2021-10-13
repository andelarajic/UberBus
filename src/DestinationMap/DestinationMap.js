import React from "react";
import InfoMap from "../InfoMap/InfoMap";
import "./DestinationMap.css";

function DestinationMap(props) {
  return (
    <div classname="UberMap">
      <InfoMap />
      <div className="DestinationText">
        <p>Pickup</p>
        <p>Location</p>
        <p>Dropp-off</p>
        <p>Location</p>
      </div>
      <div>
        <img className="UberImg" src="Images/Badge.png" alt="" />
        <hr className="vl" />
        <img className="UberImg" src="Images/Badge2.png" alt="" />
      </div>
      <button
        className="ButtonDestination"
        onClick={() => {
          props.history.push("/destination");
        }}
      >
        Add Payment Method
      </button>
    </div>
  );
}

export default DestinationMap;
