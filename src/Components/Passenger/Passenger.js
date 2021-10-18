import React from "react";
import "./Passenger.css";

function Passengers({passenger}) {
  return (
    <div className="Passengers">
      <div>
        <div className="Passenger1">
          <div className="Person1">
            <img className="" src={passenger.profilePicture} alt="" />
            <p className="PassengersText1">{passenger.name}</p>
          </div>
          <img className="" src={passenger.rating} alt="" />
        </div>
        <hr className="hr" />
      </div>
    </div>
  );
}

export default Passengers;
