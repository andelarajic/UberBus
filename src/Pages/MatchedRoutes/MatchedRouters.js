import React from "react";
import Map from "../../Components/Map/Map";
import "./MatchedRoutes.css";
import Arrow from "../../Components/Arrow/Arrow";
import { normalMap } from "../../constants/Map";

const MatchedRouters = (props) => {
  return (
    <div>
      <div>
        <div className="backButtonPos">
          <Arrow back={() => props.history.goBack()} />
        </div>
      </div>
      <div className="Route">
        <h1 className="Matchedtext">Matched Routes</h1>
        <hr className="hr" />
        <h3 className="Location">Location</h3>
        <div>
          <Map to={null} from={null} mapSize={normalMap}/>
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
