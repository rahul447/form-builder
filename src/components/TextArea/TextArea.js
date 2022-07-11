import React from "react";
import styled from "styled-components";

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 15px;

  label {
    margin: 0 0 6px 0;
    font-size: 1.1rem;
  }
  
  textarea {
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

function TextAreaField(props) {
  const {
    label,
    rows,
    cols,
    name,
    handleChange,
    errorMessage,
    isValid,
    value
  } = props;

  return (
    <TextAreaContainer>
      <label>{label}</label>
      <textarea name={name} onChange={handleChange} rows={rows} cols={cols} value={value}></textarea>
      {errorMessage && !isValid && (
        <span className="error">{errorMessage}</span>
      )}
    </TextAreaContainer>
  );
}

export default React.memo(TextAreaField);
