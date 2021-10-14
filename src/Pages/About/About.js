import React from "react";
import "./About.css";

const About = (props) => {
  return (
    <div>
      <h1 className="Title">About UberBus</h1>
      <div className="About">
        <p className="Paragraf">
          UberBus is our new feature which is intended to give assutance of
          safty to use who prefer to ride with others.
        </p>
        <p className="Paragraf">How to use the UberBus feature</p>
        <p className="Paragraf">Enter your destination</p>
        <img className="Image" src="Images/about4.png" alt="" />
        <p className="Paragraf">
          Open the app and enter where you´re going in the Where to?box. Amap
          will comeup showing the nearby routes.
        </p>
        <p className="Paragraf">
          Tap the route of your chose and you will see different cars available
          for that route.
        </p>
        <img className="Image" src="Images/about3.png" alt="" />
        <p className="Paragraf">
          Tap the bus of your choice and you will be able to see riders already
          onboard with their respective ratings. Here you will be matched to a
          driver you selected
        </p>
        <img className="Image" src="Images/about2.png" alt="" />
        <p className="Paragraf">Tap to confirm your pickup location </p>
        <p className="Paragraf2">Meet your driver</p>
        <p className="Paragraf">
          You can track their arrival on the map. When they are a few minutes
          away, wait for them at you pickup location.
        </p>
        <img className="Image" src="Images/about1.png" alt="" />
        <p className="Paragraf2">Sit back and relax</p>
        <p className="Paragraf">
          When you arrive, payment is easy. Depending on your region, you have
          options. Use cash or a payment method like a credit card or Uber Cash
          balance.
        </p>
        <p className="Paragraf2">Rate your trip</p>
        <p className="Paragraf">
          Let us know how your trip went. You can rate your fellow riders and
          also give your driver a compliment or add a tip in the app.
        </p>
        <img className="Image" src="Images/about.png" alt="" />
      </div>

      <button
        className="Button"
        onClick={() => {
          props.history.push("/destination");
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default About;
