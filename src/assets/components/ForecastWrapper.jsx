import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ForecastWrapper({ unit, lon, lat }) {
  const [forecast, setForecast] = useState(null);

  async function fetchForecastData() {
    try {
      const forecastApi = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=4${lat}&lon=${lon}&units=metric&appid=644e8f48a2d7e612cd94f5dc157eb72c`
      );
      setForecast(forecastApi.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  useEffect(() => {
    fetchForecastData();
    // console.log("Hello")
    console.log(forecast);
  }, [unit]);

  return (
    <div className="w-full">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
      obcaecati!
    </div>
  );
}
