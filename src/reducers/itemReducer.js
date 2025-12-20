import { v4 as uuidv4 } from "uuid";

function itemReducer(shoppingItems, action) {
  if (action.type === "ADD_ITEM") {
    return [
      ...shoppingItems,
      {
        id: uuidv4(),
        name: action.payload,
        quantity: 1,
      },
    ];
  } else if (action.type === "DECREMENT_ITEM") {
    const newShoppingList = shoppingItems.map((item) => {
      if (item?.id === action.payload) {
        return { ...item, quantity: item.quantity-- };
      }
      return item;
    });
    return newShoppingList.filter((item) => item.quantity > 0);
  } else if (action.type === "INCREMENT_ITEM") {
    return shoppingItems.map((item) =>
      item.id === action.payload
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else return shoppingItems;
}

export default itemReducer;
