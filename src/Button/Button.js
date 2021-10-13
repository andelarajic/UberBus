import React from "react";
import "./Button.css";
import { withRouter } from "react-router-dom";

const Button = (props) => {
  return (
    <div className="ButtonDiv">
      <button
        className="ButtonRoutes"
        onClick={() => {
          props.history.push("/route");
        }}
      >
        Matched Routes
      </button>
      <button
        className="ButtonRoutes"
        onClick={() => {
          props.history.push("/allroutes");
        }}
      >
        All Routes
      </button>
    </div>
  );
};

export default withRouter(Button);
