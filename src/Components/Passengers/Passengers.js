import React from "react";
import "./Passengers.css";

function Passengers() {
  return (
    <div className="Passengers">
      <p className="PassengersText">Passengers</p>
      <div>
        <div className="Passenger1">
          <div className="Person1">
            <img className="" src="Images/Passenger1.png" alt="" />
            <p className="PassengersText1">Olivia Sterner</p>
          </div>
          <img className="" src="Images/RatingP1.png" alt="" />
        </div>
        <hr className="hr" />
        <div className="Passenger1">
          <div className="Person1">
            <img className="" src="Images/Passenger2.png" alt="" />
            <p className="PassengersText1">Jake Matthews</p>
          </div>
          <img className="" src="Images/RatingP2.png" alt="" />
        </div>
        <hr className="hr" />
        <div className="Passenger1">
          <div className="Person1">
            <img className="" src="Images/Passenger3.png" alt="" />
            <p className="PassengersText1">Thomas Jensen</p>
          </div>
          <img className="" src="Images/RatingP3.png" alt="" />
        </div>
        <hr className="hr" />
      </div>
      <p className="Viewmore">View more</p>
    </div>
  );
}

export default Passengers;
