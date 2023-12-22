import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { WeatherSwitchDay } from "../../types";

const WeatherSwitchDay: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeDay = ({ field, value }: WeatherSwitchDay): void => {
    if (!field || value === undefined || value === null) {
      searchParams.delete(field);
    } else {
      searchParams.set(field, String(value));
    }
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <div className="flex  items-center justify-center flex-auto pb-[7px] mt-4 md:mt-0  select-none">
      <div className="inline-flex px-4 items-center gap-4 flex-shrink-0 border-b-[4px] border-colorLightGreen">
        <span
          className="text-colorLightGreen font-medium text-[32px] uppercase leading-9 tracking-wider cursor-pointer"
          onClick={() => handleChangeDay({ field: "date" })}
        >
          TODAY
        </span>
      </div>
      <div className="inline-flex px-4 items-center gap-4 flex-shrink-0 border-b-[4px] ">
        <span
          className="text-colorLight font-medium text-[32px] uppercase leading-9 tracking-wider cursor-pointer"
          onClick={() => handleChangeDay({ field: "date", value: "tomorrow" })}
        >
          Tomorrow
        </span>
      </div>
    </div>
  );
};

export default WeatherSwitchDay;
