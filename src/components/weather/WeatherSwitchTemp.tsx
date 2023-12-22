import { FC, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

const WeatherSwitchTemp: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeTemp = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      searchParams.set("units", "imperial");
    } else {
      searchParams.delete("units");
    }
    setSearchParams(searchParams, {
      replace: true,
    });
  };

  return (
    <div className="flex items-center justify-center gap-[27px] max-w-max pl-[15px]">
      <span className="text-[30px] font-light  leading-normal text-white">
        °C
      </span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          id="switch"
          checked={!!searchParams.get("units")}
          className="sr-only peer"
          onChange={(e) => handleChangeTemp(e)}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all  peer-checked:bg-colorDarkGreen"></div>
      </label>
      <span className="text-[30px] font-light  leading-normal text-white">
        °F
      </span>
    </div>
  );
};

export default WeatherSwitchTemp;
