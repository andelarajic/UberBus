import React from "react";
import Navigation from "../Navigation/Navigation";
import Map from "../Map/Map";
import "./Destination.css";

function Destination(props) {
  return (
    <div>
      <Map />
      <div style={{ position: "absolute", margin: "20px", zIndex: 1 }}>
        <Navigation />
        <div className="Routes">
          <button
            className="Button"
            onClick={() => {
              props.history.push("/route");
            }}
          >
            Matched Routes
          </button>
          <button
            className="Button"
            onClick={() => {
              props.history.push("/");
            }}
          >
            All Routes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Destination;
