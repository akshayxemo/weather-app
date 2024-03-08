import ReactCountryFlag from "react-country-flag";

// {country, code , city}:{country:string, code:string, city:string}
const CityCard = ({
  city,
  country,
  code,
}: {
  city: string;
  country: string;
  code: string;
}) => {
  return (
    <div className="py-3 px-5 w-full h-20">
      <h1 className="text-md">{city}</h1>
      <p className="text-gray-500 text-xs flex items-center gap-2 mt-3">
        <ReactCountryFlag countryCode={code} svg />
        {country}
      </p>
    </div>
  );
};

export default CityCard;
