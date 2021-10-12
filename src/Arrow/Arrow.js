import React from "react";
import "./Arrow.css"
import { IoArrowBack } from "react-icons/io5";
import{useHistory} from "react-router-dom"
import Button from 'react-uikit-button';


const Arrow = () => {
  let history = useHistory();
  return (
    <div className="Arrow1">
    <Button value="button" onClick={() => history.goBack()}><IoArrowBack className="back"/></Button>
      </div>
  );
};

export default Arrow;