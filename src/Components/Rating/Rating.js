import React from "react";
import "./Rating.css";
import { IoStarOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { withRouter } from "react-router-dom";

function Rating(props) {
  return (
    <div>
      <p className="TextRating">Average rating of passengers</p>
      <div className="RatingIcon">
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarOutline />
      </div>
      <hr className="hrR" />
      <p className="TextRating">Drivers average rateing</p>
      <div className="RatingPayment">
        <div className="RatingIcon">
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarOutline />
          <IoStarOutline />
        </div>
        <hr className="hrI" />
        <div className="RatingRow">
          <p className="PriceBus">Sub total</p>
          <p className="PriceBus">10.0$</p>
        </div>
        <div className="RatingRow">
          <p className="PriceBus">VAT (25%)</p>
          <p className="PriceBus">2.50$</p>
        </div>
        <hr className="hrI" />
        <div className="RatingRow">
          <p className="PriceBus">Total</p>
          <p className="PriceBus">12.5$</p>
        </div>
        <button
          className="OrderNow"
          onClick={() => {
            props.history.push("/confirmation");
          }}
        >
          Order now
        </button>
      </div>
    </div>
  );
}

export default withRouter(Rating);
