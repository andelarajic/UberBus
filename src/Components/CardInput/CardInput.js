import React from "react";
import "./CardInput.css";
import CreditCardPopup from "../CreditCardPopup/CreditCardPopup";
import { MdPersonOutline } from "react-icons/md";
import { VscLock } from "react-icons/vsc";

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
        <MdPersonOutline />
      </div>
      <div className="hrpM">
        <button
          className="AddCardBtn"
          onClick={() => {
            props.history.push("/");
          }}
        >
          Add card
        </button>
      </div>
      <div className="TextOr">Or</div>
      <div className="CreditCardPopup">
        <CreditCardPopup />
      </div>
    </div>
  );
};

export default CardInput;
