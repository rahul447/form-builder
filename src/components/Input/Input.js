import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 15px;

  label {
    margin: 0 0 6px 0;
    font-size: 1.1rem;
  }

  input {
    padding: 10px;
    border: none;
    border-bottom: 1px solid #777;
    background-color: #eee;
    outline: none;
    font-size: 1.1rem;
    box-sizing: border-box;
    margin: 0 0 8px 0;
  }

  .error {
    color: red;
  }
`

function InputField(props) {
  const {
    label,
    type,
    name,
    handleChange,
    errorMessage,
    isValid,
    value
  } = props;

  return (
    <InputContainer>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={handleChange} />
      {errorMessage && !isValid && (
        <span className="error">{errorMessage}</span>
      )}
    </InputContainer>
  );
}

export default React.memo(InputField);
