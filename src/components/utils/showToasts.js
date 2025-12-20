import { toast } from "react-toastify";

export function showSuccessToast(message) {
  toast.success(message, {
    position: "top-right",
  });
}

export function showErrorToast(message) {
  toast.error(message, {
    position: "top-right",
  });
}
