import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const Arrow2 = () => {
  return (
    <div className="Arrow">
      <div className="Arrow1">
        <Link to="/route">
          <IoArrowBack className="back" />
        </Link>
      </div>
    </div>
  );
};

export default Arrow2;
