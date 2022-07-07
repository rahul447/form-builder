import React from "react";
import styled from "styled-components";
import Field from "../formField/formField";
import Label from './label';
import { Error } from "./common";

const RadioWrapper = styled.div`
  display: inline-block;
`;

const Mark = styled.span`
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
    background-color: #03a9f4;
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
    transition: all 110ms;
  }
`;

const Input = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${Mark} {
    &::after {
      width: 10px;
      height: 10px;
      opacity: 1;
      left: 12%;
      top: 12%;
    }
  }
`;

const RadioLabel = styled.label`
  display: flex;
  cursor: pointer;
  padding: 5px 10px 5px 0;
  position: relative;
  ${props =>
    props.disabled &&
    `
        cursor: not-allowed;
        opacity: 0.4;
    `}
`;


export const RadioButton = ({ name, children, checked }) => (
  <RadioLabel>
    <Input name={name} type="radio" defaultChecked={checked} />
    <Mark />
    {children}
  </RadioLabel>
);

export default function Radio({ metadata, setField, index, path }) {
  const { label, value, options, id, errorMessage, valid } = metadata;
  return (
    <div>
      <div><Label label={label}></Label></div>
      {
        options.map((option, idx) => (
          <RadioWrapper key={idx} onChange={() => setField(option.value, index, path)}>
            <RadioButton name={id} index={index}> {option.displayValue}</RadioButton>
          </RadioWrapper>
        ))
      }
      {valid && <Error>{errorMessage}</Error>}
      {value && metadata[value].fields.map((field, key) => {
        return <Field
          key={field.id}
          index={index}
          path={`${index}.${value}.fields.${key}`}
          metadata={field}
          onFieldUpdate={setField}
        />
      })}
    </div>
  )
};
