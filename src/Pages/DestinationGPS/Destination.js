import React, { useState } from "react";
import Navigation from "../../Components/Navigation/Navigation";
import InputMatched from "../../Components/InputMatched/InputMatched";
import Button from "../../Components/Button/Button";
import Map from "../../Components/Map/Map";
import "./Destination.css";
import Arrow from "../../Components/Arrow/Arrow";

function Destination(props) {
  const [to, setTo] = useState('New York')
  const [from, setFrom] = useState('Boston')

  return (
    <div>
      <div className="ArrowPos">
        <Arrow back={() => props.history.goBack()} />
      </div>
      <div className="NavPos">
        <Navigation />
      </div>
      <Map to={to} from={from}/>
      <InputMatched to={to} from={from} setTo={setTo} setFrom={setFrom}/>
      <Button />
    </div>
  );
}

export default Destination;
