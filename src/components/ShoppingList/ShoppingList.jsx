import Inputitem from "../InputItem/InputItem";
import Header from "../ShoppingHeader/Header";
import "./ShoppingList.css";

function ShoppingList() {
  return (
    <div>
      <Header />
      <div className="current-shopping-list">
        <Inputitem />
      </div>
    </div>
  );
}

export default ShoppingList;
