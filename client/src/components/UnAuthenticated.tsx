import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import { Link } from "react-router-dom";
const UnAuthenticated = () => {
  return (
    <div className="container flex justify-center items-center flex-col h-screen gap-4">
      <div className="text-red-500 p-2 rounded-full bg-red-100 aspect-square flex items-center justify-center">
        <DoDisturbIcon style={{ fontSize: "4rem" }} />
      </div>
      <h1 className="text-3xl font-bold">Access Denied</h1>
      <p className="text-gray-500">
        you are not authenticated to access this page
      </p>
      <Link to={"/"} className="text-center underline">
        Go home
      </Link>
    </div>
  );
};

export default UnAuthenticated;
