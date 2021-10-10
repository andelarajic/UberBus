import React from "react";
import Navigation from "../Navigation/Navigation";
import Map from "../Map/Map";
import "./Destination.css";

function Destination(props) {
  return (
    <div>
     <Navigation />
      <Map />
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
              props.history.push("/allroutes");
            }}
          >
            All Routes
          </button>
        </div>
      </div>
  
  );
}

export default Destination;
