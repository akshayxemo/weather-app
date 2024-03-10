import { v4 as uuidv4 } from "uuid";
// import countriesAndCities from "../data/countries.json";
export const generateUUID = () => {
  const uuid = uuidv4();
  generateWebToken(uuid);
  return uuid;
};

export const generateWebToken = (id: string) => {
  console.log(id);
};
