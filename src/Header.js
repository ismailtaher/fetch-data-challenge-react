import React from "react";
import Button from "./Button";

const Header = ({ dataType, handleClick }) => {
  return (
    <header className="head">
      <form onSubmit={(e) => e.preventDefault()}>
        <Button
          buttonText="users"
          dataType={dataType}
          handleClick={handleClick}></Button>
        <Button
          buttonText="posts"
          dataType={dataType}
          handleClick={handleClick}></Button>
        <Button
          buttonText="comments"
          dataType={dataType}
          handleClick={handleClick}></Button>
      </form>
    </header>
  );
};

export default Header;
