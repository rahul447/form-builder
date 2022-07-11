import React from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 15px;

  label {
    margin: 0 0 6px 0;
    font-size: 1.1rem;
  }

  select {
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

function SelectField(props) {
  const {
    label,
    options,
    name,
    handleChange,
    errorMessage,
    isValid,
  } = props;

  return (
    <SelectContainer>
      <label>{label}</label>
      <select name={name} onChange={handleChange}>
        {options.map((option, key) => {
          return <option value={option.value} key={key}>{option.label}</option>
        })}
      </select>
      {errorMessage && !isValid && (
        <span className="error">{errorMessage}</span>
      )}
    </SelectContainer>
  );
}

export default React.memo(SelectField);
