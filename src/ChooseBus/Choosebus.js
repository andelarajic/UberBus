import React from "react";
import Map from "../Map/Map";
import "./Choosebus.css";
import Arrow from "../Arrow/Arrow";
import { IoPersonSharp } from "react-icons/io5";

function Choosebus(props) {
  return (
    <div>
      <Arrow />
      <Map />
      <p className="Choose">Choose a bus</p>
      <button className="Uberbutton"
        onClick={() => {
          props.history.push("/destination");
        }}
      >
      <div className="UberImage">
        <img className="Image5" src="Images/Uberbus.jpg" alt="" />
        <div className="UberBus">
          Uberbus
          <div className="Number">
            <IoPersonSharp className="Icon" /> 11
          </div>
        </div>
        <p className="Time">09:10 - 11 min away</p>
      </div>
      </button>
      <hr className="hr" />
      <button className="Uberbutton"
        onClick={() => {
          props.history.push("/destination");
        }}
      >
      <div className="UberImage">
        <img className="Image5" src="Images/Uberbus.jpg" alt="" />
        <div className="UberBus">
          Uberbus
          <div className="Number">
            <IoPersonSharp className="Icon" /> 11
          </div>
        </div>
        <p className="Time">09:10 - 11 min away</p>
      </div>
      </button>
      <hr className="hr" />

    </div>
  );
}

export default Choosebus;
