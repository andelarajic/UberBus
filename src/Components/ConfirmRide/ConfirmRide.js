import React from "react";
import "./ConfirmRide.css";
import { FaCheckCircle } from "react-icons/fa";

const ConfirmRide = () => {
  return (
    <div>
      <div>
        <p className="ConfirmTitle">Confitmation</p>
      </div>
      <div className="CoIcon">
        <FaCheckCircle className="ConfIcon"/>
      </div>
      <div className="ComText">
        <p className="ConfirmText">Hey Oliver,</p>
        <p className="ConfirmText">Your ride has been booked!</p>
      </div>
    </div>
  );
};

export default ConfirmRide;
