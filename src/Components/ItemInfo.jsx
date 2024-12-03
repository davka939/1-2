import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductModels } from "../modelData/products";
import { findImage } from "../images/imageExport"; 
import '../Styles/iteminfo.css';

const ItemInfo = () => {
  const { id } = useParams(); 
  const product = ProductModels.productModel(id);  
  const [selectedSizeIndex,setSelectedSizeIndex] = useState(null);
  const [priceChanging, setPriceChanging] = useState(false);

  const handleSizeSelection = (index) => {
    setPriceChanging(true);
    setSelectedSizeIndex(index);
    setTimeout(() => setPriceChanging(false), 300); 
  };
  return (
    <div className="page-iteminfo">
      <div className="info-container-iteminfo">
        <img src={findImage(product.picture_path)} alt={product.name}></img>
        <div className="description-container-iteminfo">
          <div className="item-title-iteminfo">{product.name}</div>

          <div className={`item-price-iteminfo ${priceChanging ? "changing" : ""}`}>
        ₮ {selectedSizeIndex !== null ? product.price[selectedSizeIndex] : product.price[0]}
      </div>
          <div className="item-description-iteminfo">{product.description}</div>
          <div className="item-order-iteminfo">Захиалгын код: {product.order_code}</div>

          <div className="size-container-item">{product.size.map((size, index)=>(
            <div key={index}             
            className={`item-size-iteminfo ${selectedSizeIndex === index ? "selected" : ""}`}
            onClick={() => handleSizeSelection(index)}>
              {size}
              </div>
          ))}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
