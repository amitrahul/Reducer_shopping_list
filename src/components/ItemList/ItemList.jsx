import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Item from "../Item/Item";
import "./ItemList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { showErrorToast } from "../utils/showToasts";
import {
  ShoppingDispatchContext,
  ShoppingItemContext,
} from "../../providers/ShoppingContext";

function ItemList() {
  const shoppingItems = useContext(ShoppingItemContext);
  const dispatch = useContext(ShoppingDispatchContext);

  function handleAddQunatity(itemId) {
    dispatch({
      type: "INCREMENT_ITEM",
      payload: itemId,
    });
  }

  function handleDecQuantity(itemId) {
    dispatch({
      type: "DECREMENT_ITEM",
      payload: itemId,
    });
  }

  return (
    <div className="shopping-items-wrapper">
      {shoppingItems &&
        shoppingItems.map((item) => {
          return (
            <div key={item.id} className="items-list">
              <div
                className="change-quantity add-item"
                onClick={() => handleAddQunatity(item.id)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <Item itemName={item.name} quantity={item.quantity} />
              <div
                className="change-quantity remove-item"
                onClick={() => {
                  item.quantity === 1 &&
                    showErrorToast(`${item.name} is removed from list`);
                  handleDecQuantity(item.id);
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
