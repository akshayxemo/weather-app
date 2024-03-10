import { useAppDispatch, useAppSelector } from "../redux/store";
import { jwtDecode } from "jwt-decode";
import { removeCredential } from "../redux/slices/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const credential = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const isAuthenticate = () => {
    if (credential.id !== "" && credential.token !== "") {
      try {
        const decodedToken = jwtDecode(credential.token);
        const currentTime = Date.now() / 1000;

        if (decodedToken?.exp !== undefined && decodedToken.exp < currentTime) {
          dispatch(removeCredential());
          return false;
        }

        return true;
      } catch (error) {
        return false;
      }
    }
  };

  if (isAuthenticate()) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/unauthenticated"} />;
  }
};

export default ProtectedRoute;
