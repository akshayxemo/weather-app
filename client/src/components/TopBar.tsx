import { useAppSelector } from "../redux/store";

const TopBar = () => {
  const id = useAppSelector((state) => state.auth.id);
  return (
    <div className="bg-gray-50 border-b-2 border-gray-200 text-gray-400 flex justify-between py-2 px-3 max-xsm:flex-col">
      <p>weatherapp.</p>
      <p>User: &nbsp;{id}</p>
    </div>
  );
};

export default TopBar;
