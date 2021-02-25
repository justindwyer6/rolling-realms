import React from "react";
import "./IconButton.scss";

const IconButton = ({ name, imgSrc, onClickFunction }) => {
  return (
    <button
      type="button"
      className={`IconButton ${name
        .replace(/\s+/g, "-")
        .toLowerCase()}-button`}
      onClick={onClickFunction}
    >
      <img src={imgSrc} alt={name} />
    </button>
  );
};

export default IconButton;
