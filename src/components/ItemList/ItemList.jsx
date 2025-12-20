import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Item from "../Item/Item";
import "./ItemList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { showErrorToast } from "../utils/showToasts";

function ItemList({ shoppingItems, addQunatity, decQuantity }) {
  return (
    <div className="shopping-items-wrapper">
      {shoppingItems &&
        shoppingItems.map((item) => {
          return (
            <div key={item.id} className="items-list">
              <div
                className="change-quantity add-item"
                onClick={() => addQunatity(item.id)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <Item itemName={item.name} quantity={item.quantity} />
              <div
                className="change-quantity remove-item"
                onClick={() => {
                  item.quantity === 1 &&
                    showErrorToast(`${item.name} is removed from list`);
                  decQuantity(item.id);
                }}
              >
                <FontAwesomeIcon icon={faMinus} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default React.memo(ItemList);
