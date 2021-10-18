import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./ArrivedIcon.css";

const ArrivedIcon = () => {
  return (
    <div>
      <div className="ArrivedI">
        <p className="ArrivedTitle">You´ve Arrived!</p>
      </div>
      <div className="CoIcon">
        <FaCheckCircle className="ConfIcon" />
      </div>
    </div>
  );
};

export default ArrivedIcon;
