import React from "react";
import "./Payment.css";
import Arrow from "../../Components/Arrow/Arrow";
import MethodOfPayment from "../../Components/MetodOfPayment/MetodOfPayment";

function Payment(props) {
  return (
    <div>
      <div>
        <div className="ArrowPom">
          <Arrow back={() => props.history.goBack()} />
        </div>
        <MethodOfPayment />
      </div>
    </div>
  );
}

export default Payment;
