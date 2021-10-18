import React from "react";
import "./Price.css";

function Price() {
  return (
    <div className="Row">
      <div className="Column">
        <div className="LeftColumn">
          Total price
          <div className="PriceTime">$12.5</div>
        </div>
      </div>
      <hr className="vl" />
      <div className="Column">
        <div className="RightColumn">
          Estimated time
          <div className="PriceTime">11 min</div>
        </div>
      </div>
    </div>
  );
}

export default Price;
