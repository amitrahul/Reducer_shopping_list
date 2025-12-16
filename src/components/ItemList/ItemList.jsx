import Item from "../Item/Item";
import "./ItemList.css";
function ItemList({ shoppingItems }) {
  return (
    <div className="shopping-items-wrapper">
      {shoppingItems &&
        shoppingItems.map((item) => {
          return (
            <Item itemName={item.name} key={item.id} quantity={item.quantity} />
          );
        })}
    </div>
  );
}

export default ItemList;
