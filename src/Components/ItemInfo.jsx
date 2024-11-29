import React from "react";
import { useParams } from "react-router-dom";
import { ProductModels } from "../modelData/products";
import { findImage } from "../images/imageExport"; 
import '../Styles/iteminfo.css';

const ItemInfo = () => {
  const { id } = useParams(); 
  const product = ProductModels.productModel(id);  

  return (
    <div className="page-iteminfo">
      <div className="info-container-iteminfo">
        <img src={findImage(product.picture_path)} alt={product.name}></img>
        <div className="description-container-iteminfo">
          <div>{product.name}</div>
          <div>{product.description}</div>
          <div>{product.price}</div>
          <div>{product.size}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
