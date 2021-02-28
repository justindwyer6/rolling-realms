import React, { useState } from "react";
import "./IconButton.scss";
import questionMarkIcon from "../../images/question-mark.png";

const IconButton = ({
  name,
  imgSrc,
  onClickFunction,
  confirmationRequired = false,
}) => {
  const [confirmationRequested, setConfirmationRequested] = useState(
    false,
  );
  const [
    timeoutConfirmationRequested,
    setTimeoutConfirmationRequested,
  ] = useState(null);

  function confirmAction() {
    if (confirmationRequested) {
      onClickFunction();
      setConfirmationRequested(false);
      setTimeoutConfirmationRequested(
        clearTimeout(timeoutConfirmationRequested),
      );
    } else {
      setConfirmationRequested(true);
      setTimeoutConfirmationRequested(
        setTimeout(() => setConfirmationRequested(false), 5000),
      );
    }
  }

  return (
    <button
      type="button"
      className={`IconButton ${name
        .replace(/\s+/g, "-")
        .toLowerCase()}-button`}
      onClick={confirmationRequired ? confirmAction : onClickFunction}
    >
      <img
        src={confirmationRequested ? questionMarkIcon : imgSrc}
        alt={name}
      />
    </button>
  );
};

export default IconButton;
