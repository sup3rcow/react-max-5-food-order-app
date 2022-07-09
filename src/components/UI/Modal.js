import React, { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Fragment>
          <Backdrop onClose={props.onClose}></Backdrop>
          <ModalOverlay>{props.children}</ModalOverlay>
        </Fragment>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Modal;
