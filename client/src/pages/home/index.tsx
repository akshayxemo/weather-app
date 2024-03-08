import logo from "../../assets/images/clouds-and-sun.png";
import heroImg from "../../assets/images/hero.jpg";
import HeroFooter from "../../components/HeroFooter";
import iceImg from "../../assets/images/cold.png";
import leafImg from "../../assets/images/leaf.png";
import { generateUUID } from "../../lib";

const HomePage = () => {
  const handleClick = () => {
    generateUUID();
  };
  return (
    <div className="w-full h-screen p-8 bg-white dark:bg-black font-body">
      <div className="w-full h-full flex justify-between gap-6">
        <div className="relative ml-20 dark:text-white text-black flex flex-col justify-between w-[30%] max-sm:items-center max-sm:w-full max-sm:ml-0">
          <div className="grid grid-cols-2-auto grid-rows-1 items-center gap-x-2 w-[180px]">
            <img
              src={logo}
              alt="logo"
              className="col-span-1 row-span-1 aspect-square"
              width={30}
              height={30}
            />
            <h1 className="font-main text-xl col-span-1 row-span-1 font-semibold">
              Weatherapp.
            </h1>
          </div>

          <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center">
            <h1 className="font-main font-bold lg:text-6xl sm:text-4xl md:text-5xl max-sm:text-4xl">
              Weather & Forecast Application
            </h1>
            <p className="text-gray-400 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
              ipsum turpis. Donec euismod nibh non felis accumsan, vel
              pellentesque metus semper.
            </p>
            <button
              className="px-5 py-2 text-center rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-200 transition ease-in text-white font-medium text-xl mt-6 w-48 h-14"
              onClick={handleClick}
            >
              Get Started
            </button>
          </div>

          {/* Absolute images...................... */}
          <img
            src={iceImg}
            alt="ice"
            className="absolute top-12 right-28"
            width={35}
          />

          <img
            src={leafImg}
            alt="ice"
            className="absolute bottom-8 right-0 opacity-[0.5]"
            width={60}
          />

          <HeroFooter />
        </div>
        <div className="w-[50%] h-full bg-cyan-100 rounded-lg overflow-hidden max-sm:hidden">
          <img
            src={heroImg}
            alt="heroImg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
