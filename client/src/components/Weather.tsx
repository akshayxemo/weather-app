import { useEffect, useState } from "react";
import axios from "axios";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useAppSelector } from "../redux/store";

interface WeatherDataType {
  city: string;
  country: string;
  temp_c: number;
  icon: string;
  condition: string;
  humidity: number;
}
const Weather = ({ city }: { city: string }) => {
  const credensial = useAppSelector((state) => state.auth);
  const initialState: WeatherDataType = {
    city: "",
    country: "",
    temp_c: 0,
    icon: "",
    condition: "",
    humidity: 0,
  };
  const [data, setData] = useState<WeatherDataType>(initialState);
  const [loading, setLoading] = useState(true);
  const getWeatherInfo = async () => {
    try {
      const url = `${import.meta.env.VITE_SERVER_URL}/weather/${city}`;
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${credensial.token}` },
      });
      console.log(response.data);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, [city]);

  const handleRefresh = async () => {
    setLoading(true);
    setTimeout(() => {
      getWeatherInfo();
    }, 1000);
  };

  console.log(data);
  return (
    <div className="border rounded-md p-5 w-full bg-white">
      <div className="flex flex-wrap gap-5 max-xxsm:flex-col">
        <div className="aspect-auto">
          <img
            src={data.icon}
            alt="weather-icon"
            className="aspect-auto"
            width={60}
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between flex-nowrap gap-4">
            <h1 className="text-lg font-bold">
              {data.city},{" "}
              <span className="text-sm text-gray-600 font-normal">
                {data.country}
              </span>
            </h1>
            <div
              className="p-2 aspect-square rounded-full hover:bg-gray-100 cursor-pointer"
              onClick={handleRefresh}
            >
              <RefreshIcon
                className={`text-gray-500 ${loading && "animate-spin"}`}
              />
            </div>
          </div>
          <p className="text-sm text-gray-500">{data.condition}</p>
          <div className="grid msm:grid-cols-2 mt-4">
            <h4 className="col-span-1 break-keep whitespace-nowrap">
              Temp: &nbsp;
              <span className="text-lg text-green-500 font-semibold">
                {data.temp_c}&deg;C
              </span>
            </h4>
            <h4 className="col-span-1 break-keep whitespace-nowrap">
              Humidity: &nbsp;
              <span className="text-lg text-green-500 font-semibold">
                {data.humidity}%
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
