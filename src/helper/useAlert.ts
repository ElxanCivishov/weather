import { useDispatch } from "react-redux";
import { resetAlert, setAlert } from "../features/alertSlice";

const useAlert = () => {
  const dispatch = useDispatch();

  const showAlert = (message: string, timeout: number = 2000) => {
    dispatch(setAlert(message));
    setTimeout(() => {
      dispatch(resetAlert());
    }, timeout);
  };

  return showAlert;
};

export default useAlert;
