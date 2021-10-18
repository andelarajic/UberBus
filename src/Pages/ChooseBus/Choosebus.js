import React from "react";
import Map from "../../Components/Map/Map";
import Arrow from "../../Components/Arrow/Arrow";
import "./Choosebus.css";
import { drivers } from '../../constants/People'
import ChooseBusInfo from "../../Components/ChooseBusInfo/ChooseBusInfo";

function Choosebus(props) {
  return (
    <div>
       <div className="ArrowPos">
        <Arrow back={() => props.history.goBack()}/>
      </div>
      <Map />
      <p className="Choose">Choose a bus</p>
      {
        drivers.map((driver, index) => {
        return <ChooseBusInfo key={index} driver={driver}/>
        })
      }
    </div>
  );
}

export default Choosebus;
