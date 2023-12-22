import { FC, ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "../app/hooks";
import { getWeatherData } from "../features/weather/weatherSlice";
import SearchSvg from "../assets/images/icon _search_.svg";

interface SearchProps {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  // Define any props if needed in the future
}

const Search: FC<SearchProps> = ({ city, setCity }) => {
  const dispatch = useAppDispatch();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === "") {
      return alert("Please enter a city");
    }
    dispatch(getWeatherData({ query: city, units: "" }));
    setCity("");
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
    </form>
  );
};

export default Search;
