import React from "react";
import { useNavigate } from "react-router-dom";
import Shop_cat from "./Shop_cat";

const ShopCatWrapper = (props) => {
  const navigate = useNavigate(); 
  return <Shop_cat {...props} navigate={navigate} />;
};

export default ShopCatWrapper;
