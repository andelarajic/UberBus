import React from "react";
import GoogleMapReact from "google-map-react";

const Destination = ({ text }) => <div>{text}</div>;

export default function InfoMap(props) {
  const defaultProps = {
    center: {
      lat: 59.329323,
      lng: 18.068581,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly

    <div>
      <div
        style={{
          height: "20vh",
          width: "40%",
          position:"relative",
          float:"right",
          margin:"20px",
          zIndex: 0,
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyATwgpzSq0TU95Mcj8HipmTNUxkwLUEId8" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Destination lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    </div>
  );
}
