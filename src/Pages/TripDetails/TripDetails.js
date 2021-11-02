import React from "react";
import Arrow from "../../Components/Arrow/Arrow";
import Map from "../../Components/Map/Map";
import "./TripDetails.css";
import DriverCard from "../../Components/DriverCard/DriverCard";
import Rideaway from "../../Components/RideAway/RideAway";
import Price from "../../Components/Price/Price";
import PickUpDropOff from "../../Components/PickUpDropOff/PickUpDropOff";
import Passenger from "../../Components/Passenger/Passenger";
import { normalMap } from "../../constants/Map";

function TripDetails(props) {
  
  const driver = JSON.parse(localStorage.getItem("selected-driver"))

  return (
    <div>
      <div className="backButtonAbsolutePos">
        <Arrow back={() => props.history.goBack()} />
      </div>
      <Map to={null} from={null} mapSize={normalMap}/>
      <Rideaway />
      <div className="DriverCardTrip">
        <DriverCard driver={driver}/>
      </div>
      <div className="PriceTrip">
        <hr className="hrT" />
        <Price />
        <hr className="hrT" />
      </div>
      <PickUpDropOff />
      <p className="PassengersText">Passengers</p>
        {
          driver.passengers.map((passenger, index) => {
            return <Passenger key={index} passenger={passenger}/>
          })
        }
        <p className="Viewmore">View more</p>
      </div>
  );
}

export default TripDetails;
