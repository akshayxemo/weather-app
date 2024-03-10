import { useAppSelector } from "../redux/store";
import LogOut from "./LogOut";

const TopBar = () => {
  const id = useAppSelector((state) => state.auth.id);
  return (
    <div className="bg-gray-50 border-b-2 border-gray-200 text-gray-400 flex justify-between py-2 px-3 max-xsm:flex-col gap-4">
      <p>weatherapp.</p>
      <div className="flex flex-wrap gap-4">
        <LogOut />
        <p>User: &nbsp;{id}</p>
      </div>
    </div>
  );
};

export default TopBar;
