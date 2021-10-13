import React from "react";
import { IoArrowBack } from "react-icons/io5";

import "./Arrow.css"

const Arrow = (props) => {  

  return (
    <>
        <IoArrowBack className="Arrow" onClick={() => props.back()}/>
    </>
  );
}

export default Arrow;