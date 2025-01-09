import React from "react";
import ForecastCard from "./ForecastCard";
import sun from "../img/sun.png";

export default function ForecastWrapper({ unit, dailyForecast, forecast }) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="border-style glass p-5 rounded-xl custom-fz mb-4">
        <h1 className="font-semibold mb-4 custom-fz">Hourly Forecast</h1>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4 items-center">
          {forecast
            ? forecast.map((forecastData, index) => {
                return (
                  <ForecastCard
                    key={index}
                    unit={unit}
                    forecast={forecastData}
                  />
                );
              })
            : null}
        </div>
      </div>
      <div className=" glass border-style flex-1 pt-10 p-5 rounded-xl">
        <div className="flex h-[80px] custom-fz">
          <div>
            <h1 className="font-bold custom-fz sm:text-[1.1rem] mb-2">{dailyForecast.forecast.forecastday[0].astro.sunrise}</h1>
            <p className="text-lightGrey">sunrise</p>
          </div>
          <div className="relative flex-1">
            <img
              className="w-[25px] sm:w-[40px] absolute left-1/2 -translate-x-1/2 -top-2 sm:-top-5 sun"
              src={sun}
              alt="image of a rotating sun"
            />
            <div className="curved-line overflow-hidden">
              <div className="hidden sm:block w-[350px] h-[60px] gradient"></div>
            </div>
          </div>
          <div>
            <h1 className="font-bold custom-fz sm:text-[1.1rem] mb-2">{dailyForecast.forecast.forecastday[0].astro.sunset}</h1>
            <p className="text-lightGrey">sunset</p>
          </div>
        </div>
      </div>
    </div>
  );
}
