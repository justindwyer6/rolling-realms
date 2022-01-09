import React, { useState } from "react";

const DSixInput = ({ className }) => {
  const [value, setValue] = useState(null);

  const sanitizeInput = (rawInput) => {
    const currentValue = value;
    const newValue = rawInput.replace(currentValue, "");

    return newValue !== "" && (newValue < 1 || newValue > 6)
      ? currentValue
      : newValue;
  };

  const preventInvalidKeyStrokes = (e) => {
    // Prevents React from losing control when "scientific" characters are entered
    // const invalidKeyStrokeBlacklist = ["e", "E", ".", "-", "+"];
    const invalidKeyStrokeWhitelist = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Tab",
    ];

    // if (invalidKeyStrokeBlacklist.includes(e.key)) {
    //   e.preventDefault();
    // }
    if (!invalidKeyStrokeWhitelist.includes(e.key)) {
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
      value={value}
      onKeyDown={(e) => preventInvalidKeyStrokes(e)}
      onChange={(e) => setValue(sanitizeInput(e.target.value))}
      onPaste={(e) => e.preventDefault()}
    />
  );
};

export default DSixInput;
