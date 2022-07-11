import React, { useState } from "react";
import useForm from "../hooks/useForm";
import { userForm } from "../formConfig";
import styled from "styled-components";
import "../styles.css";

const UserFormWrapper = styled.form`
  max-width: 400px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  margin: 20px auto;
  padding: 20px;

  h1 {
    margin: 0 0 20px;
    text-align: center;
  }
  
  button {
    padding: 10px 15px;
    border-radius: 4px;
    border: none;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    width: 150px;
    background: blueviolet;
    color: #fff;
    cursor: pointer;
  }
  
  button:disabled {
    background: #eee;
    color: #999;
    box-shadow: none;
  }
`

export default function UserForm() {
  const { renderFormInputs, isFormValid, form } = useForm(userForm);
  const [showOutput, setShowOutput] = useState(false)

  const onSubmit = (event, form) => {
    event.preventDefault();

    const finalJSON = {}

    for (let [key, value] of Object.entries(form)) {
        finalJSON[key] = value.value;
    }

    console.log({finalJSON})

    setShowOutput(true);
  }

  return (
    <>
    {showOutput && <div>Bingo! Check console for Output...</div>}
      <UserFormWrapper onSubmit={(event) => onSubmit(event, form)}>
        <h1>Fill Details</h1>
        {renderFormInputs()}
        <button type="submit" disabled={!isFormValid()}>
          Submit
        </button>
      </UserFormWrapper>
      
    </>
  );
}