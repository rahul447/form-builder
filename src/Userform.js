import React from "react";
import useForm from "./hooks/useForm";
import { userForm } from "./formConfig";

import "./styles.css";
import "./UserForm.css";

export default function UserForm() {
  const { renderFormInputs, isFormValid, form } = useForm(userForm);

  const onSubmit = (event, form) => {
    event.preventDefault();

    const finalJSON = {}

    for (let [key, value] of Object.entries(form)) {
        finalJSON[key] = value.value;
    }

    console.log({finalJSON})
  }

  return (
    <form className="userForm" onSubmit={(event) => onSubmit(event, form)}>
      <h1>Fill Details</h1>
      {renderFormInputs()}
      <button type="submit" disabled={!isFormValid()}>
        Submit
      </button>
    </form>
  );
}