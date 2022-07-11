import React from "react";

import "./Select.css";

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
    <div className="selectContainer">
      <label>{label}</label>
      <select name={name} onChange={handleChange}>
        {options.map((option, key) => {
          return <option value={option.value} key={key}>{option.label}</option>
        })}
      </select>
      {errorMessage && !isValid && (
        <span className="error">{errorMessage}</span>
      )}
    </div>
  );
}

export default React.memo(SelectField);
