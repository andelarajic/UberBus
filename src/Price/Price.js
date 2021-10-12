import React from "react";
import "./Price.css";

function Price() {
  return (
    <div class="Row">
      <div class="Column">
        <div class="LeftColumn">
          Total price
          <div className="PriceTime">$12.5</div>
        </div>
      </div>
      <hr className="vl" />
      <div class="Column">
        <div class="RightColumn">
          Estimated time
          <div className="PriceTime">11 min</div>
        </div>
      </div>
    </div>
  );
}

export default Price;
