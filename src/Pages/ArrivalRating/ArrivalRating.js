import React from "react";
import "./ArrivalRating.css";
import Arrow from "../../Components/Arrow/Arrow";
import ArrivedIcon from "../../Components/ArrivedIcon/ArrivedIcon";
import RatingDriver from "../../Components/RatingDriver/RatingDriver";
import TravelTime from "../../Components/TravelTime/TravelTime";

function ArrivalRating(props) {
  return (
    <div>
      <div className="backButtonPos">
        <Arrow back={() => props.history.goBack()} />
      </div>
      <ArrivedIcon />
      <div className="ArriveDriverCard">
        <RatingDriver />
      </div>
      <TravelTime />
    </div>
  );
}

export default ArrivalRating;
