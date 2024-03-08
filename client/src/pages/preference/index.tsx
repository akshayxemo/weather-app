import { useState } from "react";
import CountriesAndCitiesForm from "../../components/CountriesAndCities";
import SelectedCity from "../../components/SelectedCity";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";

// import CityCard from "../../components/CityCard";

const PreferencePage = () => {
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [exceed, setExceed] = useState(false);
  const handleSelection = (value: string) => {
    console.log("state", value);
    if (selectedCities.length !== 4) {
      setSelectedCities([...selectedCities, value]);
    } else {
      setExceed(true);
    }
  };

  const handleDelete = (value: string) => {
    const updatedCities = selectedCities.filter((city) => city !== value);
    setSelectedCities(updatedCities);
    setExceed(false);
  };

  const handleErrorClose = () => {
    setExceed(false);
  };

  return (
    <div className="container">
      {exceed && (
        <Alert severity="error" className="mt-2 relative my-3">
          Limit Exceeded{" "}
          <CloseIcon
            onClick={handleErrorClose}
            className="cursor-pointer absolute right-3 top-3"
          />
        </Alert>
      )}
      <div className="py-20">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-main font-bold">
            Please Select Atmost 4 Cities
          </h1>

          <p className="text-gray-500">
            search cities in the search box or select and check the cities
            below.
          </p>

          <button className="custom-btn bg-gradient-to-r from-cyan-600 to-cyan-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-200 text-white">
            Get weather update
          </button>

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
  );
};

export default PreferencePage;
