import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./FormInput.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const FormInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const clgNameInputRef = useRef();

  const [error, setError] = useState();

  const formSubmitHanlder = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredClgName = clgNameInputRef.current.value;
    console.log(enteredClgName)

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid name and age.",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter valid age.",
      });
      return;
    }
    props.onFormSubmit(enteredName, enteredUserAge, enteredClgName);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    clgNameInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={formSubmitHanlder}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />

          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" ref={ageInputRef} />

          <label htmlFor="clgName">College Name</label>
          <input id="clgName" type="text" ref={clgNameInputRef}/>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default FormInput;
