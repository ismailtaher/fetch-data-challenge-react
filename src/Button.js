import React from "react";

const Button = ({ buttonText, dataType, handleClick }) => {
  return (
    <button
      className={buttonText === dataType ? "selected" : null}
      type="button"
      onClick={() => handleClick(buttonText)}>
      {buttonText}
    </button>
  );
};

export default Button;
