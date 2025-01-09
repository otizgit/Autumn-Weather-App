import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingScreen from "./assets/components/LoadingScreen";
import WeatherWrapper from "./assets/components/WeatherWrapper";

export default function App() {
  const [unit, setUnit] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState("Lagos");
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const fetchWeatherAndForecast = async () => {
      const apiKey = "644e8f48a2d7e612cd94f5dc157eb72c";

      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`;

      try {
        const [currentWeatherResponse, forecastResponse] = await Promise.all([
          axios.get(currentWeatherUrl),
          axios.get(forecastUrl),
        ]);

        setWeather(currentWeatherResponse.data);
        setForecast(forecastResponse.data.list.slice(1, 11));
      } catch (err) {
        setError("Error fetching data. Please try again.");
        console.error(err);
      }
    };

    fetchWeatherAndForecast();
  }, [unit, trigger]);

  return (
    <div className="container min-h-screen max-w-[100vw] relative py-[3rem]">
      {weather ? (
        <WeatherWrapper
          weather={weather}
          unit={unit}
          setUnit={setUnit}
          forecast={forecast}
          setTrigger={setTrigger}
          city={city}
          setCity={setCity}
        />
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}
