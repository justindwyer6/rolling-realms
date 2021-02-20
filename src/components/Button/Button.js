import React from "react";

const Button = ({ name, imageSrc, onClickFunction }) => {
  return (
    <button
      type="button"
      className={`${name}-button`}
      onClick={onClickFunction}
    >
      <img src={imageSrc} alt={name} />
    </button>
  );
};

export default Button;
