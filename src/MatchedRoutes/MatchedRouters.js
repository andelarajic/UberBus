import React from "react";
import Map from "../Map/Map";
import "./MatchedRoutes.css";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const MatchedRouters = (props) => {
  return (
    <div className="Route">
      <Link to="/destination">
        <IoArrowBack className="back" />
      </Link>
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
            props.history.push("/choosebusmatched");
          }}
        >
          View buses
        </button>
        <hr className="hr" />
      </div>
    </div>
  );
};

export default MatchedRouters;
