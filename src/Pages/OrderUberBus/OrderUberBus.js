import React from "react";
import Arrow from "../../Components/Arrow/Arrow";
import "./OrderUberBus.css";
import Time from "../../Components/Time/Time";
import Rating from "../../Components/Rating/Rating";

function OrderUberBus(props) {
  return (
    <div>
      <div className="backButtonPos">
        <Arrow back={() => props.history.goBack()} />
      </div>
      <div className="Payment">
        <div className="PaymentP">Payment</div>
        <div className="BookBusMin">You have 10 min left to book</div>
        <div className="hrpM">
          <hr className="hrP" />
        </div>
        <div>
          <p className="BookingDetails">Booking details</p>
        </div>
        <div className="hrpM">
          <hr className="hrP" />
        </div>
        <Time />
        <div className="hrpM">
          <hr className="hrO" />
        </div>
        <Rating />
      </div>
    </div>
  );
}

export default OrderUberBus;
