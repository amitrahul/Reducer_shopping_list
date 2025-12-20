import { useReducer, useState } from "react";
import Inputitem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Header from "../ShoppingHeader/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ShoppingList.css";
import { v4 as uuidv4 } from "uuid";
import itemReducer from "../../reducers/itemReducer";
import {
  ShoppingDispatchContext,
  ShoppingItemContext,
} from "../../providers/ShoppingContext";

function ShoppingList() {
  const [shoppingItems, dispatch] = useReducer(itemReducer, []);

  // function handleAddItem(itemName) {
  //   dispatch({
  //     type: "ADD_ITEM",
  //     payload: itemName,
  //   });
  // }

  // function handleAddQuantity(itemId) {
  //   dispatch({
  //     type: "INCREMENT_ITEM",
  //     payload: itemId,
  //   });
  // }

  // function handleDecreaseQuantity(itemId) {
  //   dispatch({
  //     type: "DECREMENT_ITEM",
  //     payload: itemId,
  //   });
  // }

  /*
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
    */

  return (
    <ShoppingItemContext value={shoppingItems}>
      <ShoppingDispatchContext value={dispatch}>
        <div>
          <Header />
          <ToastContainer />
          <div className="current-shopping-list">
            <Inputitem />
            <ItemList />
          </div>
        </div>
      </ShoppingDispatchContext>
    </ShoppingItemContext>
  );
}

export default ShoppingList;
