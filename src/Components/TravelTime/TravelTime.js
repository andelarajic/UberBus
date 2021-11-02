import React from "react";
import "./TravelTime.css";
import { CgSupport } from "react-icons/cg";
import { withRouter } from "react-router-dom";

function TravelTime(props) {
  return (
    <div>
      <div className="Rideaway">
        <div className="ContLeft">
          <p className="UpText">Travel time</p>
          <p className="TravelNm">9</p>
          <p className="TextLeft">min</p>
        </div>
        <div className="ContRight">
          <p className="TextRightTrip">See Trip Details</p>
        </div>
      </div>
      <div>
        <div className="Rideaway">
          <div className="ContLeft">
            <CgSupport className="support" />
          </div>
          <div className="ContRight">
            <p className="TextRightTrip">Contact Support</p>
          </div>
        </div>
      </div>
      <div className="ContinueButton">
        <button
          className="ContinueBtn"
          onClick={() => {
            props.history.push("/about");
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default withRouter(TravelTime);
