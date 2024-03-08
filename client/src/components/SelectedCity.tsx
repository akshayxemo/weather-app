import CloseIcon from "@mui/icons-material/Close";
const SelectedCity = ({
  city,
  deleteFunc,
}: {
  city: string;
  deleteFunc: (value: string) => void;
}) => {
  return (
    <div className="pl-4 pr-2 py-2 border flex flex-nowrap items-center justify-between gap-4 rounded-md">
      <p>{city}</p>
      <div
        className="cursor-pointer aspect-square p-1 hover:bg-slate-50 rounded-full"
        onClick={() => {
          deleteFunc(city);
        }}
      >
        <CloseIcon />
      </div>
    </div>
  );
};

export default SelectedCity;
