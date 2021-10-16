import React from "react";
import "./Payment.css";
import Arrow from "../../Components/Arrow/Arrow";
import MethodOfPayment from "../../Components/MetodOfPayment/MetodOfPayment";
import CardInput from "../../Components/CardInput/CardInput";


function Payment(props) {
  return (
    <div>
      <div>
        <div className="ArrowPom">
          <Arrow back={() => props.history.goBack()} />
        </div>
        <MethodOfPayment />
        <CardInput/>
      </div>
    </div>
  );
}

export default Payment;
