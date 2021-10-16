import React from "react";
import "./Card.css";
import CreditCardPopup from "../CreditCardPopup/CreditCardPopup";
import { withRouter } from "react-router-dom";

const Button = (props) => {
  return (
    <div className="Cards">
      <div>
        <button
          className="Card"
          onClick={() => {
            props.history.push("/bookbus");
          }}
        >
          <p className="CardText">MasterCard</p>
          <p className="CardText2">xxxx-xxxx-xxxx-9314</p>
        </button>
      </div>
      <div className="Down">
        <button
          className="Card"
          onClick={() => {
            props.history.push("/bookbus");
          }}
        >
          <p className="CardText">VISA</p>
          <p className="CardText2">xxxx-xxxx-xxxx-9314</p>
        </button>
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
              props.history.push("/payment");
            }}
          >
            Add new card
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Button);
