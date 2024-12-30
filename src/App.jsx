import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingScreen from "./assets/components/LoadingScreen";
import WeatherWrapper from "./assets/components/WeatherWrapper";

export default function App() {
  // const language = navigator.language || navigator.userLanguage;
  // const lang = language.slice(0, 2);
  // console.log(lang)

  const lang = "en";

  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch weather data from OpenWeather API
  const fetchWeather = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=644e8f48a2d7e612cd94f5dc157eb72c`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Get user location and fetch weather data
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetchWeather(latitude, longitude);
        },
        (err) => {
          setError("Location access denied. Please enable location services.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
    }
  }, []);

  // const fetchWeather = async (lat, lon) => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/weather`,
  //       {
  //         params: {
  //           // lat: lat,
  //           // lon: lon,
  //           q:"Lagos",
  //           units: "metric",
  //           appid: "644e8f48a2d7e612cd94f5dc157eb72c",
  //         },
  //       }
  //     );
  //     setWeather(response.data);
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         setLocation({ latitude, longitude });
  //         fetchWeather(latitude, longitude);
  //       },
  //       (err) => {
  //         setError("Location access denied. Please enable location services.");
  //         setLoading(false);
  //       }
  //     );
  //   } else {
  //     setError("Geolocation is not supported by your browser.");
  //     setLoading(false);
  //   }
  // }, []);

  // // Render content
  // if (loading) {
  //   return <LoadingScreen />;
  // }

  // if (error) {
  //   return <p style={{ color: "red" }}>{error}</p>;
  // }

  return (
    <div>
      {weather ? (
        <WeatherWrapper weather={weather}/>
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
}
