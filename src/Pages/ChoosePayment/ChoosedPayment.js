import React from "react";
import "./ChoosePayment.css";
import Arrow from "../../Components/Arrow/Arrow";
import Card from "../../Components/Card/Card";

function ChoosePayment(props) {
  return (
    <div>
      <div className="ArrowPom">
        <Arrow back={() => props.history.goBack()} />
      </div>
      <div className="Payment">
        <div className="PaymentP">Payment</div>
        <div className="PaymentMetod">Choose payment</div>
        <div className="hrpM">
          <hr className="hrP" />
        </div>
      </div>
      <Card />
    </div>
  );
}

export default ChoosePayment;
