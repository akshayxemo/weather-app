import { useAppDispatch } from "../redux/store";
import { removeCredential } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(removeCredential());
    navigate("/");
  };

  return (
    <div
      onClick={handleLogOut}
      className="cursor-pointer text-red-500 hover:underline"
    >
      LogOut
    </div>
  );
};

export default LogOut;
