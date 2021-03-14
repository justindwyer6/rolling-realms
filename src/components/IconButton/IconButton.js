import React from "react";
import "./IconButton.scss";
import questionMarkIcon from "../../images/question-mark.png";
import useConfirmation from "../../hooks/useConfirmation";

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
