import React, { useState } from "react";

const DSixInput = ({ className }) => {
  const [value, setValue] = useState();

  const sanitizeInput = (rawInput) => {
    const currentValue = value;
    const validValueWhitelist = ["", "1", "2", "3", "4", "5", "6"];

    if (rawInput.length < 0 || rawInput.length > 2) {
      return currentValue;
    }

    const newValue = rawInput.replace(currentValue, "");

    if (validValueWhitelist.includes(newValue)) {
      return newValue;
    }

    return currentValue;
  };

  const preventInvalidKeyStrokes = (e) => {
    // Prevents React from losing control when characters like "e" or "." are entered
    const validKeyStrokeWhitelist = ["1", "2", "3", "4", "5", "6"];
    if (
      !validKeyStrokeWhitelist.includes(e.key) &&
      e.key.length === 1 // Allow keys like backspace and arrows
    ) {
      e.preventDefault();
    }
  };

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
      value={"" || value}
      onKeyDown={(e) => preventInvalidKeyStrokes(e)}
      onChange={(e) => setValue(sanitizeInput(e.target.value))}
      onPaste={(e) => e.preventDefault()}
    />
  );
};

export default DSixInput;
