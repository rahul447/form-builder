import React from "react";
import "./TextArea.css";

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
    <div className="textAreaContainer">
      <label>{label}</label>
      <textarea name={name} onChange={handleChange} rows={rows} cols={cols} value={value}></textarea>
      {errorMessage && !isValid && (
        <span className="error">{errorMessage}</span>
      )}
    </div>
  );
}

export default React.memo(TextAreaField);
