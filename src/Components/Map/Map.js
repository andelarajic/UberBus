import React, { useState } from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";

function Map({ to, from, mapSize }) {
  const directionsService = new window.google.maps.DirectionsService();
  const [direction, setDirection] = useState("");
  
  var travelFrom;
  var travelTo;

  if(to === null && from === null) {
    travelFrom = JSON.parse(localStorage.getItem("from"))
    travelTo = JSON.parse(localStorage.getItem("to"))
  } else {
    travelFrom = from
    travelTo = to
    localStorage.setItem("from", JSON.stringify(from))
    localStorage.setItem("to", JSON.stringify(to))
  }  

  directionsService.route(
    {
      origin: travelFrom,
      destination: travelTo,
      travelMode: window.google.maps.TravelMode.DRIVING,
    },
    (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        setDirection(result);
      } else {
        console.error(`error fetching directions ${result}`);
      }
    }
  );

  return (
    <GoogleMap mapContainerStyle={mapSize}>
      <DirectionsRenderer directions={direction} />
    </GoogleMap>
  );
}

export default Map;
