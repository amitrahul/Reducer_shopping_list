import { showErrorToast, showSuccessToast } from "../utils/showToasts";
import { useForm } from "react-hook-form";
import "./InputItem.css";
import { useContext } from "react";
import { ShoppingDispatchContext } from "../../providers/ShoppingContext";

function Inputitem() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const dispatch = useContext(ShoppingDispatchContext);

  function handleformSubmit(formData) {
    /*
    e.preventDefault(); // whenever form is submitted page is refreshed, to stop that behaviour apply it.
    if (!itemName) {
      showErrorToast("Item name cannot be empty");
      return;
    }
    addItem(itemName);
    showSuccessToast("Item added successfully!");
    setItemName("");
    */

    // addItem(formData?.item);
    dispatch({
      type: "ADD_ITEM",
      payload: formData.item,
    });
    showSuccessToast("Item added successfully!");
  }

  return (
    <div className="item-input-wrapper">
      <form onSubmit={handleSubmit(handleformSubmit)}>
        <input
          type="text"
          name="item"
          placeholder="Add An Item"
          className="item-input"
          {...register("item", { required: true, maxLength: 20, minLength: 3 })}
        />
        <button className="add-item-button">Add</button>
      </form>
      <div>
        {(errors?.item?.type === "required" && <p>item is required</p>) ||
          (errors?.item?.type === "minLength" && (
            <p>minimum three charachter is required</p>
          ))}
      </div>
    </div>
  );
}

export default Inputitem;
