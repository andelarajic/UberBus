import React from "react";
import "./Confirmation.css";
import ConfirmRide from "../../Components/ConfirmRide/ConfirmRide";
import Arrow from "../../Components/Arrow/Arrow";

const Confirmation = (props) => {
  return (
    <div>
      <div className="backButtonPos">
        <Arrow back={() => props.history.goBack()} />
      </div>
      <ConfirmRide />
      <div className="Conf">
        <hr className="hrI" />
        <div className="RatingRow">
          <p className="PriceBusCon">Sub total</p>
          <p className="PriceBusCon">10.0$</p>
        </div>
        <div className="RatingRow">
          <p className="PriceBusCon">VAT (25%)</p>
          <p className="PriceBusCon">2.50$</p>
        </div>
        <hr className="hrI" />
        <div className="RatingRow">
          <p className="PriceBusConf">Total</p>
          <p className="PriceBusConf">12.5$</p>
        </div>
        <div>
          <button
            className="TripDetails"
            onClick={() => {
              props.history.push("/tripdetails");
            }}
          >
            Trip details
          </button>
          <div>
            <p className="OrderNm">Order #UPL257</p>
          </div>
          <button
            className="ContinueBtn"
            onClick={() => {
              props.history.push("/arrivalrating");
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
