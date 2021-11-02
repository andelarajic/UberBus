import React from "react";
import Map from "../Map/Map";
import "./DestinationMap.css";
import ButtonDestinationMap from "../../Components/Button/ButtonDestinationMap";
import { miniMap } from "../../constants/Map";

function DestinationMap(props) {
  return (
    <div>
      <div>
        <Map to={null} from={null} mapSize={miniMap} />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "50px",
              height: "25vh",
            }}
          >
            <img className="top" src="Images/Badge.jpeg" alt="" />
            <hr className="line" />
            <img className="bottom" src="Images/Badge2.jpeg" alt="" />
          </div>
          <div>
            <div style={{ marginBottom: "50px" }}>
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
      <ButtonDestinationMap />
    </div>
  );
}

export default DestinationMap;
