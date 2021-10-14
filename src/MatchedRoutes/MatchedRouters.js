import React from "react";
import Map from "../Map/Map";
import "./MatchedRoutes.css";
import Arrow from "../Arrow/Arrow";

const MatchedRouters = (props) => {
  return (
    <div>
      <div>
        <div className="ArrowPom">
          <Arrow back={() => props.history.goBack()} />
        </div>
      </div>
      <div className="Route">
        <h1 className="Matchedtext">Matched Routers</h1>
        <hr className="hr" />
        <h3 className="Location">Location</h3>
        <div>
          <Map />
        </div>
        <div>
          <button
            className="viewbuses"
            onClick={() => {
              props.history.push("/choosebus");
            }}
          >
            View buses
          </button>
          <hr className="hr" />
        </div>
      </div>
    </div>
  );
};

export default MatchedRouters;
