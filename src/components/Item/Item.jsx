import React from "react";
import "./item.css";
function Item({ itemName, quantity }) {
  return (
    <div className="item-wrapper">
      <div className="item-name">{itemName}</div>
      <div className="item-quantity">{quantity}</div>
    </div>
  );
}

export default React.memo(Item);
