import React, { useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.cjs";
import axios from "axios";

export default function WeatherNav({
  setWeather,
  setDailyForecast,
  setForecast,
  setError,
  unit,
  setUnit,
  setTrigger,
  trigger,
  city,
  setCity,
  forecastDay,
}) {
  useEffect(() => {
    const fetchWeatherAndForecast = async () => {
      const apiKey = "644e8f48a2d7e612cd94f5dc157eb72c";

      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
      const dailyForecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=506e4d8cdfde415086e105419250901&q=${city}&days=${forecastDay}`;

      try {
        const [
          currentWeatherResponse,
          forecastResponse,
          dailyForecastResponse,
        ] = await Promise.all([
          axios.get(currentWeatherUrl),
          axios.get(forecastUrl),
          axios.get(dailyForecastUrl),
        ]);

        setWeather(currentWeatherResponse.data);
        setForecast(forecastResponse.data.list.slice(1, 11));
        setDailyForecast(dailyForecastResponse.data);
        setError(false);
      } catch (err) {
        setError(true);
      }
    };
    fetchWeatherAndForecast();
  }, [unit, trigger]);

  const setToStandard = () => {
    setUnit("standard");
  };
  const setToMetric = () => {
    setUnit("metric");
  };

  const searchLocationData = (e) => {
    e.preventDefault();
    setTrigger((prevTrigger) => !prevTrigger);
  };

  const handleEnterClick = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchLocationData(e);
    }
  };

  return (
    <div className="mb-3 flex items-center gap-4 justify-between">
      <div className="relative rounded-full overflow-hidden border-style w-[300px]">
        <Icon
          className="absolute top-1/2 -translate-y-1/2 left-[0.75rem] text-[1.1rem]"
          icon="iconamoon:search-light"
        />
        <form onSubmit={(e) => searchLocationData(e)}>
          <input
            value={city}
            onKeyDown={(e) => handleEnterClick(e)}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            className="glass pl-[2.6rem] pr-7 paddingY w-full custom-fz outline-none text-white placeholder:text-white"
            type="text"
            placeholder="Search for location"
          />
        </form>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center glass border-style font-medium rounded-full overflow-hidden small-fz">
          <button
            onClick={setToMetric}
            className={`px-5 paddingY rounded-tl-full rounded-bl-full border-r-[0.1em] border-[#9a9a9a6d] ${
              unit == "metric" && "bg-primary"
            }`}
          >
            °C
          </button>
          <button
            onClick={setToStandard}
            className={`px-5 paddingY rounded-tr-full rounded-br-full hover:bg-primary ${
              unit == "standard" && "bg-primary"
            }`}
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
}
