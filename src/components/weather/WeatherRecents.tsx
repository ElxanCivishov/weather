import { FC } from "react";
import { WeatherRecentCard } from "./cards";
import { WeatherData } from "../../types";

interface WeatherRecentsProps {
  recents: WeatherData[];
}

const WeatherRecents: FC<WeatherRecentsProps> = ({ recents }) => {
  console.log("storedData", recents);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 px-10 mt-8">
      {recents.map((data, index) => (
        <WeatherRecentCard key={index} data={data} />
      ))}
    </div>
  );
};

export default WeatherRecents;
