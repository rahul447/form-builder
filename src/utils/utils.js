import React from "react";
import Input from "../components/Input/Input";
import TextArea from "../components/TextArea/TextArea";
import Select from "../components/Select/Select";
import Radio from "../components/Radio/Radio";

export const FIELD = {
    INPUT: 'input',
    TEXTAREA: 'textarea',
    SELECT: 'select',
    RADIO: 'radio',
}

export const createFormFieldConfig = (element, label, name, configObj = {}, defaultValue = "") => {
    const formFieldConfgObj = {
      renderElement: (handleChange, value, isValid, error, key) => {
          let el = null;
          switch (element) {
              case FIELD.INPUT:
                  el = <Input
                      key={key}
                      name={name}
                      label={label}
                      isValid={isValid}
                      value={value}
                      handleChange={handleChange}
                      errorMessage={error}
                      {...configObj}
                  />
              break;
              case FIELD.RADIO:
                  el = <Radio
                      key={key}
                      name={name}
                      label={label}
                      isValid={isValid}
                      handleChange={handleChange}
                      errorMessage={error}
                      {...configObj}
                  />
              break;
              case FIELD.TEXTAREA:
                  el = <TextArea
                      key={key}
                      name={name}
                      label={label}
                      isValid={isValid}
                      value={value}
                      handleChange={handleChange}
                      errorMessage={error}
                      {...configObj}
                  />
              break;
              default:
                  el = <Select
                      key={key}
                      name={name}
                      label={label}
                      isValid={isValid}
                      handleChange={handleChange}
                      errorMessage={error}
                      {...configObj}
                  />
            }
        return el
      },
      label,
      value: defaultValue,
      valid: false,
      errorMessage: "",
      touched: false
    };
  
    return formFieldConfgObj
  }