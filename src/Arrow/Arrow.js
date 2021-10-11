import React from "react";
import "./Arrow.css"
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const Arrow = () => {
  return (
      <div className="Arrow">
    <div className="Arrow1">
      <Link to="/allroutes">
        <IoArrowBack className="back"/>
      </Link>
      </div>
      </div>
  );
};

export default Arrow;