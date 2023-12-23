import { FC, ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getWeatherData } from "../features/weatherSlice";
import SearchSvg from "../assets/images/icon _search_.svg";
import { Alert } from "./common";
import useAlert from "../helper/useAlert";
import { WeatherData } from "../types";

const Search: FC = () => {
  const dispatch = useAppDispatch();
  const [city, setCity] = useState("");
  const alertMsg = useAppSelector((state) => state.alert.message);

  const showAlert = useAlert();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === "") {
      showAlert("Please enter a city or country name");
    } else {
      const data = await dispatch(getWeatherData(city));
      setCity("");

      if (data.payload.cod === 200) {
        const storedData = localStorage.getItem("recentWeatherData");

        const recentWeatherData: WeatherData[] | null = storedData
          ? JSON.parse(storedData)
          : null;

        const sdata = recentWeatherData
          ? [...recentWeatherData.slice(1, 5), data.payload]
          : [data.payload];
        localStorage.setItem("recentWeatherData", JSON.stringify(sdata));
      }
      console.log("cod", data.payload.cod);
      console.log("cod", data.payload);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex items-center justify-between gap-1 p-1 bg-colorLight rounded mt-11 pl-[33px] pr-[10px] w-full md:w-[711px] h-[66px] mx-auto">
        <input
          className="w-full focus:outline-none text-colorTextBlack font-light leading-normal bg-transparent border-none text-[30px]"
          value={city}
          onChange={changeHandler}
          placeholder="Enter city or country name..."
        />
        <button type="submit" className="outline-none border-0 p-2">
          <img
            src={SearchSvg}
            alt=""
            className="w-[45px] h-[45px]  object-contain"
          />
        </button>
      </div>
      {alertMsg && <Alert message={alertMsg} />}
    </form>
  );
};

export default Search;
