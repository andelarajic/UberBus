import React from "react";
import "./FirstPage.css";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

const FirstPage = (props) => {
  const history = useHistory();

  setTimeout(() => {
    props.history.push("./about");
  }, 3000);

  return (
    <div className="App-header">
      <p>Uber</p>
      <div class="item2">
        <p>Bus</p>
      </div>
    </div>
  );
};

export default FirstPage;
