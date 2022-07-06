import React from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          type: "number",
          defaultValue: "1",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          onChange: (e) => console.log(e.target.value),
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
