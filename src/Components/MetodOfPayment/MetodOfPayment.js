import React from "react";
import "./MetodOfPayment.css";
import { GrLocation } from "react-icons/gr";
import { VscDash } from "react-icons/vsc";
import { FiCreditCard } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";

function MethodOfPayment() {
  return (
    <div className="Payment">
      <div className="PaymentP">Payment</div>
      <div className="PaymentMetod">Method of payment</div>
      <div className="hrpM">
        <hr className="hrP" />
      </div>
      <div className="IconPayment">
        <GrLocation className="PayIcon" />
        <VscDash className="Dash" />
        <VscDash className="Dash" />
        <VscDash className="Dash" />
        <VscDash className="Dash" />
        <FiCreditCard className="PayIcon" />
        <VscDash className="Dashgray" />
        <VscDash className="Dashgray" />
        <VscDash className="Dashgray" />
        <VscDash className="Dashgray" />
        <BsCheck2Circle className="PayIconGray" />
      </div>
    </div>
  );
}

export default MethodOfPayment;
