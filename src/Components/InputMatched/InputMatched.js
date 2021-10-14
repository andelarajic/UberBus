import React from "react";
import "./InputMatched.css";

const InputMatched = () => {
  return (
    <div>
      <form className="Form">
        <label className="Label">
          From:
          <input
            className="Input"
            placeholder="Karlbergsvägen 12"
            type="text"
            name="name"
          />
        </label>
      </form>
      <form className="Form">
        <label className="Label">
          To:
          <input
            className="Input"
            placeholder="Mall of Skandinavia"
            type="text"
            name="name"
          />
        </label>
      </form>
    </div>
  );
};

export default InputMatched;
