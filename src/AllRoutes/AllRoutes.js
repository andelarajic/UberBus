import React from "react";
import Map from "../Map/Map";
import "./AllRoute.css";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AiFillWarning } from "react-icons/ai";

const AllRoutes = (props) => {
  return (
    <div className="AllRoutes">
      <Link to="/destination">
        <IoArrowBack className="back" />
      </Link>
      <h1>All Routes</h1>
      <hr className="hr" />
      <h3 className="Location">Location</h3>
      <Map />
      <button
        className="viewbuses"
        onClick={() => {
          props.history.push("/choosebusall");
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
