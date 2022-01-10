import React, { useState } from "react";

const useDSixInput = (initial = "") => {
  const [value, setValue] = useState(initial);

  const updateValue = (e) => {
    const rawValue = e.target.value;
    const newValue = rawValue.replace(value, ""); // Remove the old value

    setValue(newValue);
  };

  const preventInvalidKeyStrokes = (e) => {
    const { key } = e;
    const newInt = parseInt(key, 10);

    if (
      (Number.isNaN(newInt) || newInt < 1 || newInt > 6) &&
      key.length === 1 // Don't prevent Backspace, Tab, etc.
    ) {
      e.preventDefault();
    }
  };

  return [value, updateValue, preventInvalidKeyStrokes];
};

const DSixInput = ({ className }) => {
  const [value, onChange, onKeyDown] = useDSixInput();

  return (
    <input
      className={className}
      type="number"
      inputMode="numeric"
      pattern="[0-9]*"
      name={className}
      max="6"
      min="1"
      maxLength="1"
      value={value}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  );
};

export default DSixInput;
