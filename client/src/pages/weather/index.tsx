import { Link } from "react-router-dom";
import Weather from "../../components/Weather";
import { useAppSelector } from "../../redux/store";
import TopBar from "../../components/TopBar";

const WeatherReport = () => {
  const allCities = useAppSelector((state) => state.preference.cities);
  return (
    <div>
      <TopBar />
      <div className="container py-14">
        <div className="w-full mb-4">
          <h1 className="text-2xl font-bold text-center">Weather updates</h1>
        </div>
        <div className="flex justify-center mb-10">
          <Link to={"/preference"}>
            <button className="custom-btn border hover:scale-105 hover:shadow-xl hover:shadow-gray-200 text-gray-500">
              Update Preference
            </button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {allCities.map((city, index) => {
            return (
              <div key={index} className="col-span-1">
                <Weather city={city} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeatherReport;
