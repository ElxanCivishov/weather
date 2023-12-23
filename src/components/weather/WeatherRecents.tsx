import { FC, useEffect, useState } from "react";
import { WeatherData } from "../../types";
import { WeatherRecentCard } from "./cards";

const WeatherRecents: FC = () => {
  const [recents, setRecents] = useState<WeatherData[]>([]);
  const storedData = localStorage.getItem("recentWeatherData");

  useEffect(() => {
    const recentWeatherData: WeatherData[] | null = storedData
      ? JSON.parse(storedData)
      : null;
    setRecents(recentWeatherData || []);
  }, [storedData]);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 px-10 mt-12">
      {recents.map((data, index) => (
        <WeatherRecentCard key={index} data={data} />
      ))}
    </div>
  );
};

export default WeatherRecents;
