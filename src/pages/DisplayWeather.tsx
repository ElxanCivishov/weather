import { useEffect } from "react";
import { RESET, getWeatherData } from "../features/weatherSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import useAlert from "../helper/useAlert";
import {
  WeatherHeader,
  WeatherRecents,
  WeatherSwitchDay,
  WeatherSwitchTemp,
} from "../components/weather";
import { Alert, ProgressBarLoader } from "../partials";
import { WeatherCard } from "../components/weather/cards";
import { Search } from "../components";
import { useSearchParams } from "react-router-dom";

const DisplayWeather = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const alertMsg = useAppSelector((state) => state.alert.message);
  const showAlert = useAlert();
  const { data, isLoading, isError, message } = useAppSelector(
    (state) => state.weatherData
  );

  //get resending weather data from click recent card
  useEffect(() => {
    dispatch(getWeatherData(searchParams.get("q") || "Bakı"));
  }, [searchParams.get("q")]);

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
        <WeatherRecents />
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
