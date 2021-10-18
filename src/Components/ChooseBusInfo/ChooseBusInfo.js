import React from "react";
import { withRouter } from "react-router-dom";

import { IoPersonSharp } from "react-icons/io5";

function ChooseBusInfo(props) {
    return (
    <div>
    
      <button
        className="Uberbutton"
        onClick={() => {
            props.history.push("/businfo");
            localStorage.setItem("selected-driver", JSON.stringify(props.driver))
        }}
      >
        <div className="UberImage">
          <img className="Image5" src="Images/Uberbus.jpg" alt="" />
          <div className="UberBus">
            Uberbus
            <div className="Number">
              <IoPersonSharp className="Icon" />
              {props.driver.noOfPassengers}
            </div>
          </div>
          <p className="Time">09:10 - 11 min away</p>
        </div>
      </button>
      <hr className="hr" />
    </div>
  );
}

export default withRouter(ChooseBusInfo);
