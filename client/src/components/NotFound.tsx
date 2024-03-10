import { Link } from "react-router-dom";
import SearchOffIcon from "@mui/icons-material/SearchOff";

const NotFound = () => {
  return (
    <div className="container flex justify-center items-center flex-col h-screen gap-4">
      <div className="text-yellow-500 p-2 rounded-full  aspect-square flex items-center justify-center">
        <SearchOffIcon style={{ fontSize: "6rem" }} />
      </div>
      <h1 className="text-3xl font-bold">404, Not Found</h1>
      <p className="text-gray-500">you are in a wrong place</p>
      <Link to={"/"} className="text-center underline">
        Go home
      </Link>
    </div>
  );
};

export default NotFound;
