import React from "react";
import Map from "../../Components/Map/Map";
import Arrow from "../../Components/Arrow/Arrow";
import "./Choosebus.css";
import { drivers } from '../../constants/People'
import ChooseBusInfo from "../../Components/ChooseBusInfo/ChooseBusInfo";
import { normalMap } from "../../constants/Map";

function Choosebus(props) {
  return (
    <div>
       <div className="backButtonAbsolutePos">
        <Arrow back={() => props.history.goBack()}/>
      </div>
      <Map to={null} from={null} mapSize={normalMap}/>
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
