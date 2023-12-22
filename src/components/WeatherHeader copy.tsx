import { FC } from "react";
import { WeatherData } from "../types";

interface WeatherProps {
  data: WeatherData;
}

const WeatherHeader: FC<WeatherProps> = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);

  return (
    <section>
      <div className="container">
        <h1>
          {data.name} - {data.sys.country}
        </h1>
        <div>
          <div>
            <p className="heading">{data.weather[0].description}</p>
            <p className="title">
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt=""
              />
            </p>
          </div>
          <div>
            <p>temp</p>
            <div>
              <p className="mb-2">{data.main.temp}K</p>
              <p className="mb-2">
                {fahrenheit}
                <sup>&#8457;</sup>
              </p>
              <p>
                {celsius}
                <sup>&#8451;</sup>
              </p>
            </div>
          </div>

          <div>
            <p>wind</p>
            <p>{data.wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherHeader;
