import React from "react";
import "../Styles/button.css"

const Button = ({ name, position }) => {

  const dynamicStyle ={
    left: position?.left,
    top: position?.top
  }
  return (
    <div className="inputButtonContainer">
      <button type="submit" className="buttonStyle" style={dynamicStyle}>{name}</button>
    </div>
  );
};

export default Button;