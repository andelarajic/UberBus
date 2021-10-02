import React from "react";
import "./FirstPage.css";

const FirstPage = (props) => {
  setTimeout(() => {
    props.history.push("./about");
  }, 3000);

  return (
    <div className="App-header">
      <p>Uber</p>
      <div className="item2">
        <p>Bus</p>
      </div>
    </div>
  );
};

export default FirstPage;
