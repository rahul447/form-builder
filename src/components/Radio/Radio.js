import React from "react";
import styled from "styled-components";

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 15px;

  .error {
    color: red;
  }
`

const RadioSpan = styled.span`
  display: inline-block;
  position: relative;
  border: 1px solid #777777;
  width: 14px;
  height: 14px;
  left: 0;
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: blueviolet;
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
    transition: all 110ms;
  }
`;

const RadioInput = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #777;
  background-color: #eee;
  outline: none;
  font-size: 1.1rem;
  box-sizing: border-box;
  margin: 0 0 8px 0;
  &:checked + ${RadioSpan} {
    &::after {
      width: 10px;
      height: 10px;
      opacity: 1;
      left: 12%;
      top: 12%;
    }
  }
`;

const RadioLabelWrapper = styled.label`
  display: flex;
  cursor: pointer;
  padding: 5px 10px 5px 0;
  margin: 0 0 6px 0;
  font-size: 1.1rem;
  position: relative;
`;

function RadioField(props) {
  const {
    label,
    type,
    name,
    handleChange,
    errorMessage,
    isValid,
    options
  } = props;

  return (
    <RadioContainer>
      <label>{label}</label>
      {
        options.map((option, idx) => (
          <div key={idx} onChange={handleChange}>
            <RadioLabelWrapper>
              <RadioInput name={name} type={type} value={option.value} />
              <RadioSpan />
              {option.displayValue}
            </RadioLabelWrapper>
          </div>
        ))
      }
      {errorMessage && !isValid && (
        <span className="error">{errorMessage}</span>
      )}
    </RadioContainer>
  );
}

export default React.memo(RadioField);