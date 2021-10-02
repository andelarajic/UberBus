import React from "react";
import Navigation from "../Navigation/Navigation";
import GoogleMapReact from "google-map-react";

const Destination = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 59.329323,
      lng: 18.068581,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly

    

   <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
    
        bootstrapURLKeys={{ key: "AIzaSyATwgpzSq0TU95Mcj8HipmTNUxkwLUEId8" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
   
      >  
        <Navigation/>
        <Destination lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
    
  );
}
