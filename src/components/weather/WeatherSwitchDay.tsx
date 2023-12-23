import { FC, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { IWeatherSwitchDay } from "../../types";

interface DateTabsProps {
  id: number;
  title: string;
  value: string;
}

const dateTabs: DateTabsProps[] = [
  {
    id: 1,
    title: "Today",
    value: "",
  },
  {
    id: 2,
    title: "Tomorrow",
    value: "1",
  },
];

const WeatherSwitchDay: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const date = useMemo(
    () => searchParams.get("date"),
    [searchParams.get("date")]
  );

  const handleChangeDay = ({ field, value }: IWeatherSwitchDay): void => {
    if (!field || value === "") {
      searchParams.delete(field);
    } else {
      searchParams.set(field, String(value));
    }
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <div className="flex  items-center justify-center flex-auto pb-[7px] border- mt-4 md:mt-0  select-none">
      {dateTabs.map((tab, index) => (
        <div
          className={`
      inline-flex px-4 items-center gap-4 flex-shrink-0 border-b-4 trasition-all duration-300
      ${
        (!date && index === 0) || date === tab.value
          ? "border-colorLightGreen text-colorLightGreen"
          : "border-transparent text-colorLight"
      } 
    `}
        >
          <span
            className=" font-medium text-[32px] uppercase leading-9 tracking-wider cursor-pointer"
            onClick={() => handleChangeDay({ field: "date", value: tab.value })}
          >
            {tab.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default WeatherSwitchDay;
