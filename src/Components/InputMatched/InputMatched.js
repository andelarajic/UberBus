import React from "react";
import "./InputMatched.css";

const InputMatched = ({ from, to, setFrom, setTo }) => {
  return (
    <div>
      <form className="Form">
        <label className="Label">
          From:
          <input
            onChange={(e) => setFrom(e.target.value)}
            className="Input"
            placeholder="Karlbergsvägen 12"
            type="text"
            value={from}
            name="name"
          />
        </label>
      </form>
      <form className="Form">
        <label className="Label">
          To:
          <input
            onChange={(e) => setTo(e.target.value)}
            className="Input"
            placeholder="Mall of Skandinavia"
            type="text"
            value={to}
            name="name"
          />
        </label>
      </form>
    </div>
  );
};

export default InputMatched;
