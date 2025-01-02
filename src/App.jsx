import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingScreen from "./assets/components/LoadingScreen";
import WeatherWrapper from "./assets/components/WeatherWrapper";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [unit, setUnit] = useState("metric");
  const [weather, setWeather] = useState(null);

  async function fetchWeatherData() {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            // lat: 40.7128,
            // lon: -74.006,
            q: "Chicago",
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

  useEffect(() => {
    fetchWeatherData();
    console.log(weather);
  }, [unit, language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div>
      {weather ? (
        <WeatherWrapper
          weather={weather}
          unit={unit}
          setUnit={setUnit}
          language={language}
          setLanguage={setLanguage}
          changeLanguage={changeLanguage}
        />
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}
