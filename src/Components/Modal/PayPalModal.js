import React from "react";
import "./Modal.css";
import { useState } from "react";
import { withRouter } from "react-router-dom";

function Modal(props) {
  const [modal, setModal] = useState(false);

  if (modal) {
    setTimeout(() => {
      props.history.push("./businfo1");
    }, 1000);
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <a onClick={toggleModal}>
        <img className="ModalLink" src="Images/paypal.png" alt="" />
      </a>
      {modal && (
        <div className="Modal">
          <div onClick={toggleModal} className="Overlay"></div>
          <div className="ModalContent">
            <img src="Images/paypal.png" alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default withRouter(Modal);
