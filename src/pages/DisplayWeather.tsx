import { useEffect, useState } from "react";
import Search from "../components/Search";
import { RESET, getWeatherData } from "../features/weatherSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  WeatherHeader,
  WeatherRecents,
  WeatherSwitchDay,
  WeatherSwitchTemp,
} from "../components/weather";
import { Alert, ProgressBarLoader } from "../components/common";
import useAlert from "../helper/useAlert";
import { WeatherCard } from "../components/weather/cards";
import { WeatherData } from "../types";

const DisplayWeather = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError, message } = useAppSelector(
    (state) => state.weatherData
  );
  const alertMsg = useAppSelector((state) => state.alert.message);
  const showAlert = useAlert();

  useEffect(() => {
    dispatch(getWeatherData("Bakı"));
  }, []);

  const [recents, setRecents] = useState<WeatherData[]>([]);

  const storedData = localStorage.getItem("recentWeatherData");

  useEffect(() => {
    const recentWeatherData: WeatherData[] | null = storedData
      ? JSON.parse(storedData)
      : null;
    setRecents(recentWeatherData || []);
  }, [storedData, data]);

  useEffect(() => {
    if (message && isError) {
      showAlert(message);
      dispatch(RESET());
    }
  }, [isError, message]);

  return (
    <section className="pb-10 overflow-hidden">
      {isLoading ? <ProgressBarLoader isLoading={isLoading} /> : null}
      <div className="2xl:container mx-auto px-2 md:px-0 pb-10 ">
        <WeatherHeader />
        <div className="flex flex-col md:flex-row md:items-center mt-12 ">
          <WeatherSwitchTemp />
          <WeatherSwitchDay />
        </div>
        <Search />
        {data && <WeatherCard data={data} />}
        {recents && <WeatherRecents recents={recents} />}
      </div>

      {alertMsg && (
        <Alert
          message={alertMsg}
          onClose={() => {
            dispatch(RESET());
          }}
        />
      )}
    </section>
  );
};

export default DisplayWeather;
