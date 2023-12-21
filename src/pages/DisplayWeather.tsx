import { useEffect } from "react";
import Search from "../components/Search";
import Weather from "../components/Weather";
import { getWeatherData } from "../features/weather/weatherSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const DisplayWeather = () => {
  const dispatch = useAppDispatch();
  const weather = useAppSelector((state) => state.weatherData.data);
  useEffect(() => {
    dispatch(getWeatherData("london"));
  }, []);

  return (
    <div className="has-text-centered">
      <Search title="Şəhər adı daxil edin" />
      {weather && <Weather data={weather} />}
    </div>
  );
};

export default DisplayWeather;
