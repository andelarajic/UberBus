import React from "react";
import Map from "../Map/Map";
import "./AllRoute.css";
import Arrow from "../Arrow/Arrow";
import { AiFillWarning } from "react-icons/ai";

const AllRoutes = (props) => {
  return (
    <div className="AllRoutes">
      <div className="ArrowPok">
        <Arrow back={() => props.history.goBack()} />
      </div>
      <h1>All Routes</h1>
      <hr className="hr" />
      <h3 className="Location">Location</h3>
      <Map />
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
      <Map />
      <div className="NoBuses">
        <AiFillWarning className="warrning" />
        No Current Buses
      </div>
      <hr className="hr" />
    </div>
  );
};

export default AllRoutes;
