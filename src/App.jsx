import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingScreen from "./assets/components/LoadingScreen";
import WeatherWrapper from "./assets/components/WeatherWrapper";

export default function App() {
  // const language = navigator.language || navigator.userLanguage;
  // const lang = language.slice(0, 2);
  // console.log(lang)

  const lang = "en";

  const [weather, setWeather] = useState(null);

  async function fetchWeatherData() {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            // lat: 40.7128,
            // lon: -74.006,
            q: "Lagos",
            appid: "644e8f48a2d7e612cd94f5dc157eb72c",
            units: "metric",
          },
        }
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  useEffect(() => {
    fetchWeatherData();
    console.log(weather);
  }, []);

  return (
    <div>
      {weather ? <WeatherWrapper weather={weather} /> : <LoadingScreen />}
    </div>
  );
}
