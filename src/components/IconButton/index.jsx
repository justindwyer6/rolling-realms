import React from "react";
import useBooleanTimeout from "hooks/useBooleanTimeout";
import "./IconButton.scss";
import questionMarkIcon from "images/question-mark.png";
import checkMarkIcon from "images/checkmark.png";

const IconButton = ({
  name,
  imgSrc,
  onClickFunction,
  confirmationRequired = false,
  giveSuccessFeedback = false,
}) => {
  const [
    confirmationRequested,
    setConfirmationRequested,
  ] = useBooleanTimeout(4000);
  const [actionSucceeded, setActionSucceeded] = useBooleanTimeout(
    2000,
  );

  const handleClick = () => {
    if (confirmationRequired && !confirmationRequested) {
      setConfirmationRequested(true);
    } else if (confirmationRequired && confirmationRequested) {
      setConfirmationRequested(false);
      onClickFunction();
      setActionSucceeded(true);
    } else {
      onClickFunction();
      setActionSucceeded(true);
    }
  };

  const getIcon = () => {
    if (confirmationRequested) {
      return questionMarkIcon;
    }
    if (giveSuccessFeedback && actionSucceeded) {
      return checkMarkIcon;
    }
    return imgSrc;
  };

  return (
    <button
      type="button"
      className={`IconButton ${name
        .replace(/\s+/g, "-")
        .toLowerCase()}-button`}
      onClick={handleClick}
    >
      <img src={getIcon()} alt={name} />
      <span>
        {confirmationRequested
          ? "Confirm"
          : name.replace(" ", "\u00A0")}
      </span>
    </button>
  );
};

export default IconButton;
