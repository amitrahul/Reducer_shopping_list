import Inputitem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Header from "../ShoppingHeader/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ShoppingList.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ShoppingList() {
  const [shoppingItems, setShoppingItems] = useState([]);

  function handleAddItem(itemName) {
    setShoppingItems([
      ...shoppingItems,
      {
        id: uuidv4(),
        name: itemName,
        quantity: 1,
      },
    ]);
  }

  function handleAddQuantity(itemId) {
    setShoppingItems(
      shoppingItems.map((item) => {
        if (item.id === itemId) item.quantity++;
        return item;
      })
    );
  }

  function handleDecreaseQuantity(itemId) {
    let newShoppingList = shoppingItems.map((item) => {
      if (item?.id === itemId) item.quantity--;
      return item;
    });
    newShoppingList = newShoppingList.filter((item) => item.quantity > 0);
    setShoppingItems(newShoppingList);
  }

  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="current-shopping-list">
        <Inputitem addItem={handleAddItem} />
        <ItemList
          shoppingItems={shoppingItems}
          addQunatity={handleAddQuantity}
          decQuantity={handleDecreaseQuantity}
        />
      </div>
    </div>
  );
}

export default ShoppingList;
