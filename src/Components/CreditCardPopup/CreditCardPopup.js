import React from "react";
import "./CreditCardPopup.css";
import SamsungModal from "../Modal/SamsungModal";
import GoogleModal from "../Modal/GoogleModal";
import AppleModal from "../Modal/AppleModal";
import PayPalModal from "../Modal/PayPalModal";

function CreditCardPopup() {
  return (
    <div className="PayModal">
      <SamsungModal />
      <hr className="vlModul" />
      <GoogleModal />
      <hr className="vlModul" />
      <AppleModal />
      <hr className="vlModul" />
      <PayPalModal />
    </div>
  );
}

export default CreditCardPopup;
