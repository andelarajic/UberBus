import React from "react";
import "./Payment.css";
import Arrow from "../../Components/Arrow/Arrow";
import MethodOfPayment from "../../Components/MetodOfPayment/MetodOfPayment";
import CardInput from "../../Components/CardInput/CardInput";

function Payment(props) {
  return (
    <div>
      <div className="backButtonPos">
        <Arrow back={() => props.history.goBack()} />
      </div>
      <MethodOfPayment />
      <CardInput />
    </div>
  );
}

export default Payment;
