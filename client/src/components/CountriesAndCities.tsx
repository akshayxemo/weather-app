import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { countryNameRecord, CountryCode } from "../utils/countryCodes";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import CityCard from "./CityCard";
import data from "../data/countries.json";
import { JsonDataType } from "../types";

// Filter countryNameRecord based on values present in data
const filteredCountryNameRecord: Record<string, string> = Object.fromEntries(
  Object.entries(countryNameRecord).filter(([key, value]) =>
    Object.prototype.hasOwnProperty.call(data, value)
  )
);

const countryCodes: CountryCode[] = Object.keys(
  filteredCountryNameRecord
) as CountryCode[];

const CountriesAndCitiesForm = ({
  selected,
  selections,
}: {
  selected: (value: string) => void;
  selections: string[];
}) => {
  const [countryCode, setCountryCode] = useState("");
  const [notSetCountry, setNotSetCountry] = useState(true);
  const [country, setCountry] = useState("");
  const [cities, setCities] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<string[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredResults = cities.filter((city) =>
      city.toLowerCase().includes(term)
    );

    setFilteredData(filteredResults);
  };

  const getCities = async (country: string) => {
    console.log("country:", country);
    fetch("./src/data/countries.json")
      .then((response) => response.json())
      .then((data: JsonDataType) => {
        const numberOfKeys = Object.keys(data).length;
        console.log("Number of keys:", numberOfKeys);
        if (country in data) {
          const cities = data[country];
          setCities(cities);
          setFilteredData(cities);
        } else {
          console.log(`Key "${country}" not found in the data.`);
        }
      })
      .catch((error) => console.error("Error loading JSON file", error));
  };

  const handleChange = async (event: SelectChangeEvent) => {
    setCountryCode(event.target.value as string);
    setNotSetCountry(true);
    const countryName = countryNameRecord[event.target.value as CountryCode];
    await getCities(countryName);
    setCountry(countryName);
  };

  const checkCountrySelected = () => {
    if (countryCode) {
      setNotSetCountry(true);
    } else {
      setNotSetCountry(false);
    }
  };

  return (
    <div className="w-full mt-5">
      <div className=" max-w-lg mx-auto flex flex-wrap gap-4">
        <FormControl className="w-40" error={!notSetCountry}>
          <InputLabel id="demo-simple-select-label" className="w-16 bg-white">
            Country
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={countryCode}
            label="Age"
            onChange={handleChange}
          >
            {countryCodes.map((code, index) => {
              return (
                <MenuItem value={code} key={index}>
                  <div className="flex flex-nowrap gap-x-2 items-center">
                    <ReactCountryFlag countryCode={code} svg />
                    {countryNameRecord[code]}
                  </div>
                </MenuItem>
              );
            })}
          </Select>
          {!notSetCountry && (
            <FormHelperText id="component-error-text" className="text-red-500">
              No country selected
            </FormHelperText>
          )}
        </FormControl>
        <FormControl className="flex-1">
          <TextField
            id="outlined-basic"
            placeholder="search by city name"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onFocus={checkCountrySelected}
          />
        </FormControl>
      </div>
      <div className="mt-10">
        {filteredData.length !== 0 ? (
          <div className="grid grid-cols-4 gap-5">
            {filteredData.map((city, index) => {
              return (
                <div
                  className={`col-span-1 border rounded-md ${
                    selections.includes(city)
                      ? "border-green-600 bg-green-50 text-green-600"
                      : "hover:shadow-lg cursor-pointer"
                  }`}
                  key={index}
                  onClick={() => {
                    selected(city);
                  }}
                >
                  <CityCard city={city} country={country} code={countryCode} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center">No Result found</div>
        )}
      </div>
    </div>
  );
};

export default CountriesAndCitiesForm;
