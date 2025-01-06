import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.cjs";
import axios from "axios";

export default function WeatherNav({
  setWeather,
  unit,
  setUnit,
}) {
  const [location, setLocation] = useState("");

  async function fetchWeatherData() {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            // lat: 40.7128,
            // lon: -74.006,
            q: location,
            appid: "644e8f48a2d7e612cd94f5dc157eb72c",
            units: unit,
            lang: language,
          },
        }
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  const setToStandard = () => {
    setUnit("standard");
  };
  const setToMetric = () => {
    setUnit("metric");
  };

  const searchLocationData = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="relative rounded-full overflow-hidden border-style w-[300px]">
        <Icon
          className="absolute top-1/2 -translate-y-1/2 left-[0.75rem] text-[1.1rem]"
          icon="iconamoon:search-light"
        />
        <form onSubmit={(e) => searchLocationData(e)}>
          <input
            value={location}
            onChange={(e) => {
              setLocation(e.target.value.trim());
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
            className={`px-4 paddingY rounded-tl-full rounded-bl-full border-r-[0.1em] border-[#9a9a9a6d] ${
              unit == "metric" && "bg-primary"
            }`}
          >
            °C
          </button>
          <button
            onClick={setToStandard}
            className={`px-4 paddingY rounded-tr-full rounded-br-full hover:bg-primary ${
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
