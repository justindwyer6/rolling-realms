import React, { useState, useEffect } from "react";
import "./IconButton.scss";
import questionMarkIcon from "../../images/question-mark.png";

const useConfirmation = () => {
  const [confirmationRequested, setConfirmationRequested] = useState(
    false,
  );

  useEffect(() => {
    const confirmationTimeout = setTimeout(
      () => setConfirmationRequested(false),
      5000,
    );
    return () => clearTimeout(confirmationTimeout);
  }, [confirmationRequested]);

  return [confirmationRequested, setConfirmationRequested];
};

const IconButton = ({
  name,
  imgSrc,
  onClickFunction,
  confirmationRequired = false,
}) => {
  const [
    confirmationRequested,
    setConfirmationRequested,
  ] = useConfirmation();

  const handleClick = () => {
    if (confirmationRequired && !confirmationRequested) {
      setConfirmationRequested(true);
    } else if (confirmationRequired && confirmationRequested) {
      setConfirmationRequested(false);
      onClickFunction();
    } else {
      onClickFunction();
    }
  };

  return (
    <button
      type="button"
      className={`IconButton ${name
        .replace(/\s+/g, "-")
        .toLowerCase()}-button`}
      onClick={handleClick}
    >
      <img
        src={confirmationRequested ? questionMarkIcon : imgSrc}
        alt={name}
      />
    </button>
  );
};

export default IconButton;
