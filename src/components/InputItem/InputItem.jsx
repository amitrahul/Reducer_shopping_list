import { showSuccessToast } from "../utils/showToasts";
import "./InputItem.css";

function Inputitem() {
  return (
    <div className="item-input-wrapper">
      <input type="text" placeholder="Add An Item" className="item-input" />
      <button
        className="add-item-button"
        onClick={() => showSuccessToast("Item added successfully!")}
      >
        Add
      </button>
    </div>
  );
}

export default Inputitem;
