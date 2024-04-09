import React from "react";

export const ProdCard = (props) => {
  return (
    <>
      <div className="product-card">
        <img src={props.Prod_img} alt="Product" className="product-image" />
        <div className="product-details">
          <h3>{props.Prod_name}</h3>
        </div>
      </div>
    </>
  );
};
