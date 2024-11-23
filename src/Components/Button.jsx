import React from "react";
import "../App.css";

const Button = ({ name }) => {
  return (
    <div className="inputButtonContainer">
      <button type="submit" className="buttonStyle">{name}</button>
    </div>
  );
};

export default Button;