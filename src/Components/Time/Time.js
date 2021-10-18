import React from "react";
import "./Time.css"

function Time() {
  return (
    <div className="Row">
      <div className="Column">
        <div className="Column1">
          Trip Time ≈ 11 min
        </div>
      </div>
      <hr className="vl1" />
      <div className="Column">
        <div className="Column1">
          Arrives at 09:00
        </div>
      </div>
    </div>
  );
}

export default Time;