import React from "react";
import "./CardInput.css";
import { MdPersonOutline } from "react-icons/md";

const CardInput = () => {
  return (
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
  );
};

export default CardInput;
