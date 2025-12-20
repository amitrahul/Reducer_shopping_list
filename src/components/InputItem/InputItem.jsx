import { useState } from "react";
import { showErrorToast, showSuccessToast } from "../utils/showToasts";
import "./InputItem.css";

function Inputitem({ addItem }) {
  const [itemName, setItemName] = useState("");
  return (
    <div className="item-input-wrapper">
      <input
        type="text"
        placeholder="Add An Item"
        className="item-input"
        value={itemName}
        onChange={(e) => setItemName(e?.target?.value)}
      />
      <button
        className="add-item-button"
        onClick={() => {
          if (!itemName) {
            showErrorToast("Item name cannot be empty");
            return;
          }
          addItem(itemName);
          showSuccessToast("Item added successfully!");
          setItemName("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Inputitem;
