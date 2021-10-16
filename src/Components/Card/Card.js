import React from "react";
import "./Card.css";
import CreditCardPopup from "../CreditCardPopup/CreditCardPopup";

const Button = (props) => {
  return (
    <div>
      <div className="Card">
        <p className="CardText">MasterCard</p>
        <p className="CardText2">xxxx-xxxx-xxxx-9314</p>
      </div>
      <div className="Card">
        <p className="CardText">VISA</p>
        <p className="CardText2">xxxx-xxxx-xxxx-9314</p>
      </div>
      <div className="TextOrBottom">Or</div>
      <div className="CreditCardPopup">
        <CreditCardPopup />
      </div>
      <div>
        <div className="hrpM">
          <button
            className="AddNewCardBtn"
            onClick={() => {
              props.history.push("/choosepayment");
            }}
          >
            Add new card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button;
