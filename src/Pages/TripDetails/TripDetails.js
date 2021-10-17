import React from "react";
import Arrow from "../../Components/Arrow/Arrow";
import Map from "../../Components/Map/Map";
import "./TripDetails.css";
import DriverCard from "../../Components/DriverCard/DriverCard";
import Rideaway from "../../Components/RideAway/RideAway";
import Price from "../../Components/Price/Price";
import PickUpDropOff from "../../Components/PickUpDropOff/PickUpDropOff";
import Passengers from "../../Components/Passengers/Passengers";

function TripDetails(props) {
  return (
    <div>
      <div className="ArrowPos">
        <Arrow back={() => props.history.goBack()} />
      </div>
      <Map />
      <Rideaway />
      <div className="DriverCardTrip">
        <DriverCard />
      </div>
      <div className="PriceTrip">
        <hr className="hrT" />
        <Price />
        <hr className="hrT" />
      </div>
      <PickUpDropOff />
      <Passengers />
    </div>
  );
}

export default TripDetails;
