import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingScreen from "./assets/components/LoadingScreen";
import WeatherWrapper from "./assets/components/WeatherWrapper";

export default function App() {
  const [unit, setUnit] = useState("metric");
  const [weather, setWeather] = useState(null);

  async function fetchWeatherData() {
    try {
      const weatherApi = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            // lat: 40.7128,
            // lon: -74.006,
            q: "Jos",
            appid: "644e8f48a2d7e612cd94f5dc157eb72c",
            units: unit,
            lang: language,
          },
        }
      );
      setWeather(weatherApi.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  useEffect(() => {
    fetchWeatherData();
  }, [unit]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div>
      {weather ? (
        <WeatherWrapper
          weather={weather}
          setWeather={setWeather}
          unit={unit}
          setUnit={setUnit}
        />
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}
