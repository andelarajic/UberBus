import React from "react";
import Map from "../../Components/Map/Map";
import "./AllRoute.css";
import Arrow from "../../Components/Arrow/Arrow";
import { AiFillWarning } from "react-icons/ai";
import { normalMap } from "../../constants/Map";

const AllRoutes = (props) => {
  return (
    <div className="AllRoutes">
      <div>
        <Arrow back={() => props.history.goBack()} />
      </div>
      <h1>All Routes</h1>
      <hr className="hr" />
      <h3 className="Location">Location</h3>
      <Map to={null} from={null} mapSize={normalMap}/>
      <button
        className="viewbuses"
        onClick={() => {
          props.history.push("/choosebus");
        }}
      >
        View buses
      </button>
      <hr className="hr" />
      <h3 className="Location">Location</h3>
      <Map to={null} from={null} mapSize={normalMap}/>
      <div className="NoBuses">
        <AiFillWarning className="warrning" />
        No Current Buses
      </div>
      <hr className="hr" />
    </div>
  );
};

export default AllRoutes;
