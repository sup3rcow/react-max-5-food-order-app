import React from "react";
import classes from "./Input.module.css";

// {...props.input} ako inpit sadrzy id, type, value, to ce se postaviti na input html element
const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
