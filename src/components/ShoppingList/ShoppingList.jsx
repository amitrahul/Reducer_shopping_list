import Inputitem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Header from "../ShoppingHeader/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ShoppingList.css";

const shoppingItems = [
  {
    id: 1,
    name: "Apple",
    quantity: 9,
  },
  {
    id: 1,
    name: "Grapes",
    quantity: 19,
  },
];

function ShoppingList() {
  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="current-shopping-list">
        <Inputitem />
        <ItemList shoppingItems={shoppingItems} />
      </div>
    </div>
  );
}

export default ShoppingList;
