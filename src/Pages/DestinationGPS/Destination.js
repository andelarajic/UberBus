import React, { useState } from "react";
import Navigation from "../../Components/Navigation/Navigation";
import InputMatched from "../../Components/InputMatched/InputMatched";
import Button from "../../Components/Button/Button";
import Map from "../../Components/Map/Map";
import "./Destination.css";
import Arrow from "../../Components/Arrow/Arrow";
import { normalMap } from "../../constants/Map";

function Destination(props) {
  const [to, setTo] = useState('Odenplan')
  const [from, setFrom] = useState('Mall of Scandinavia')

  return (
    <div>
      <div className="backButtonAbsolutePos">
        <Arrow back={() => props.history.goBack()} />
      </div>
      <div className="NavPos">
        <Navigation />
      </div>
      <Map to={to} from={from} mapSize={normalMap}/>
      <InputMatched to={to} from={from} setTo={setTo} setFrom={setFrom}/>
      <Button />
    </div>
  );
}

export default Destination;
