import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastCard from "./ForecastCard";
import LoadingScreen from "./LoadingScreen";

export default function ForecastWrapper({ unit, lon, lat }) {
  const [forecast, setForecast] = useState([]);

  async function fetchForecastData() {
    try {
      const forecastApi = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=4${lat}&lon=${lon}&units=metric&appid=644e8f48a2d7e612cd94f5dc157eb72c`
      );
      setForecast(forecastApi.data.list.slice(1, 11));
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  useEffect(() => {
    fetchForecastData();
  }, [unit]);

  return (
    <div className="border-style glass p-5 rounded-xl custom-fz">
      <h1 className="font-semibold">Hourly Forecast</h1>
      {forecast
        ? forecast.map((forecastData, index) => {
            return (
              <div key={index}>
                <ForecastCard forecast={forecastData} />
              </div>
            );
          })
        : // <LoadingScreen />
          null}
    </div>
  );
}
