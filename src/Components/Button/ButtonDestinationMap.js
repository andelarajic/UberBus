import React from "react";
import "./Button.css";
import { withRouter } from "react-router-dom";

const Button = (props) => {
  return (
    <div style={{ paddingBottom: "20px" }}>
      <button
        className="ButtonDestination"
        onClick={() => {
          props.history.push("/payment");
        }}
      >
        Add Payment Method
      </button>
    </div>
  );
};

export default withRouter(Button);
