import { useState } from "react";
import CountriesAndCitiesForm from "../../components/CountriesAndCities";
import SelectedCity from "../../components/SelectedCity";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import {
  addPreference,
  removePreference,
} from "../../redux/slices/preferenceSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar";

const PreferencePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selectedCities: string[] = useAppSelector(
    (state) => state.preference.cities
  );
  // const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [noItem, setNoItem] = useState(false);
  const [exceed, setExceed] = useState(false);
  const handleSelection = (value: string) => {
    console.log("state", value);
    if (selectedCities.length !== 4) {
      dispatch(addPreference(value));
      setNoItem(false);
    } else {
      setExceed(true);
    }
  };

  const handleDelete = (value: string) => {
    dispatch(removePreference(value));
    setExceed(false);
  };

  const handleErrorClose = () => {
    setExceed(false);
  };

  const handleWeatherUpdateClick = () => {
    if (selectedCities.length > 0) {
      const data = {
        data: selectedCities,
      };
      console.log(data);
      navigate("/weather-report");
    } else {
      setNoItem(true);
    }
  };

  return (
    <>
      {exceed && (
        <Alert
          severity="error"
          className="sticky top-0 z-1 border-b border-red-500"
        >
          Limit Exceeded{" "}
          <CloseIcon
            onClick={handleErrorClose}
            className="cursor-pointer absolute right-3 top-3"
          />
        </Alert>
      )}
      <TopBar />
      <div className="container">
        <div className="py-20">
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl font-main font-bold text-center">
              Please Select Atmost 4 Cities
            </h1>

            <p className="text-gray-500 text-center">
              search cities in the search box or select and check the cities
              below.
            </p>

            <button
              className="custom-btn bg-gradient-to-r from-cyan-600 to-cyan-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-200 text-white"
              onClick={handleWeatherUpdateClick}
            >
              Get weather update
            </button>
            {noItem && (
              <p className="text-red-500">select atleast one location</p>
            )}

            <div className="flex flex-wrap gap-3 mt-4">
              {selectedCities.map((city, index) => {
                return (
                  <SelectedCity
                    city={city}
                    key={index}
                    deleteFunc={handleDelete}
                  />
                );
              })}
            </div>

            <CountriesAndCitiesForm
              selected={handleSelection}
              selections={selectedCities}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreferencePage;
