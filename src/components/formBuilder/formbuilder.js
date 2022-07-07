import React, { useState } from "react";
import dotPropImmutable from "dot-prop-immutable";
import Field from "../formField/formField";
import styled from "styled-components";


const Form = styled.form`
    display: grid;
    grid-gap: 25px;
    justify-content: center;
    grid-auto-flow: row;
    grid-template-columns: 100%;
    padding: 2em;
    border: 1px solid grey;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.body};
    @media screen and (min-width: 599px) {
        grid-template-columns: 100%;
        width: 35%;
        justify-self: center;
      }
`;

const Button = styled.button`
  background-color: ${props => props.theme.colors.button.background};
  color:  ${props => props.theme.colors.button.text};
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function FormBuilder({ data }) {
    let [formData, setFormData] = useState(data);

    const fieldChange = (newValue, index, path) => {
        if (Number.isInteger(path)) {
            formData.fields[index].value = newValue;
        } else {
            const newState = dotPropImmutable.set(formData.fields, `${path}.value`, newValue)
            formData.fields[index] = newState[index];
        }

        fieldValidation(formData.fields[index])
        setFormData({
            ...formData
        })
    }


    const checkValidity = (fields) => {
        let isFormValid = true;
        fields.forEach(fieldData => {
            const { isValid } = fieldValidation(fieldData);
            if (isFormValid && !isValid) {
                isFormValid = false;
            }
        });
        const data = {
            ...formData,
            fields: [...fields]
        }
        setFormData({ ...data })
        return isFormValid;
    }

    const fieldValidation = (field) => {
        let isValid = true;
        const { validation, value } = field;

        if (validation.required && !value) {
            field.valid = true;
            if (isValid)
                isValid = false;
        } else {
            field.errorMessage = '';
        }

        return {
            isValid,
            field
        }
    }

    const onSubmit = (event, formDetails) => {
        if (checkValidity(formDetails)) {
            console.log('do nothing');
        } else {
            event.preventDefault();
        }
    }

    return (
        <>
            <Form onSubmit={(event) => onSubmit(event, formData.fields)}>
                {formData.fields.map((field, index) => {
                    return <Field
                        key={field.id}
                        index={index}
                        path={index}
                        metadata={field}
                        onFieldUpdate={fieldChange}
                    />
                })}
                <Button type='submit'>Submit</Button>
            </Form>
        </>
    );
}

