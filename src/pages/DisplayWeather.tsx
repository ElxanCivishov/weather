import { useEffect, useState } from "react";
import Search from "../components/Search";
import { RESET, getWeatherData } from "../features/weather/weatherSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  WeatherCard,
  WeatherHeader,
  WeatherRecentCard,
  WeatherSwitchDay,
  WeatherSwitchTemp,
} from "../components/weather";
import { Alert, ProgressBarLoader } from "../components/common";
import { useSearchParams } from "react-router-dom";
import { setAlert } from "../features/alertSlice";

const DisplayWeather = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const [city, setCity] = useState("Baki");
  const { data, isLoading, isError, message } = useAppSelector(
    (state) => state.weatherData
  );
  const alertMsg = useAppSelector((state) => state.alert.message);

  useEffect(() => {
    dispatch(
      getWeatherData({ query: city, units: searchParams.get("units") || "" })
    );
  }, [searchParams.get("units")]);

  useEffect(() => {
    if (isError && message) dispatch(setAlert(message));
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
        <Search setCity={setCity} city={city} />
        {alertMsg && (
          <Alert message={alertMsg} onClose={() => dispatch(setAlert(""))} />
        )}
        {isError && message && (
          <Alert message={message} onClose={() => dispatch(RESET())} />
        )}

        {data && <WeatherCard data={data} />}
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 px-10 mt-8 ">
          <WeatherRecentCard />
          <WeatherRecentCard />
          <WeatherRecentCard />
          <WeatherRecentCard />
          <WeatherRecentCard />
        </div>
      </div>
    </section>
  );
};

export default DisplayWeather;
