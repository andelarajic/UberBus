import React from "react";
import InfoMap from "../InfoMap/InfoMap";
import "./DestinationMap.css";

function DestinationMap(props) {
  return (
    <div>
      <div>
        <InfoMap />
        <div style={{display: "flex", flexDirection: 'row'}}>
          <div style={{display: "flex", flexDirection: 'column', marginTop: "10px", height: "25vh"}}>
            <img className="top" src="Images/Badge.jpeg" alt="" />
            <hr className="line" />
            <img className="bottom" src="Images/Badge2.jpeg" alt="" />
          </div>
          <div>
            <div style={{marginBottom: "50px"}}>
              <p className="infoText">Pickup</p>
              <p className="stationText">Odenplan</p>
            </div>
            <div>
              <p className="infoText">Dropp-off</p>
              <p className="stationText">Mall of Scandinavia</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{paddingBottom: "20px"}}>
          <button
              className="ButtonDestination"
              onClick={() => {
                props.history.push("/destination");
              }}
            >
              Add Payment Method
            </button>
        </div>
    </div>
  );
}

export default DestinationMap;
