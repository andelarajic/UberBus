import React from "react";
import "./CardInput.css";
import CreditCardPopup from "../CreditCardPopup/CreditCardPopup";
import { VscLock } from "react-icons/vsc";
import { withRouter } from "react-router-dom";

const CardInput = (props) => {
  return (
    <div>
      <div>
        <img className="PaymentIcon" src="Images/Image 1.png" alt="" />
      </div>
      <div className="RightIcon">
        <VscLock />
      </div>
      <div className="FormPay">
        <div className="InputColumn">
          <input
            className="InputPay0"
            placeholder="Cardholder"
            type="text"
            name="name"
          />
          <input
            className="InputPay1"
            placeholder="Card number"
            type="text"
            name="name"
          />
        </div>
        <div className="InputRow">
          <input
            className="InputPay2"
            placeholder="MM/YY"
            type="text"
            name="name"
          />
          <input
            className="InputPay3"
            placeholder="CVC"
            type="text"
            name="name"
          />
        </div>
      </div>

      <button
        className="AddCardBtn"
        onClick={() => {
          props.history.push("/choosepayment");
        }}
      >
        Add card
      </button>

      <div className="TextOr">Or</div>
      <div className="CreditCardPopup">
        <CreditCardPopup />
      </div>
    </div>
  );
};

export default withRouter(CardInput);
