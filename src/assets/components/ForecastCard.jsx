import React from "react";
import tornado from "../img/tornado.png";
import fog from "../img/fog.png";
import snow from "../img/snow.png";
import thunderStorm from "../img/thunder-storm.png";
import lightRain from "../img/light-rain.png";
import fewClouds from "../img/few-clouds.png";
import clearSky from "../img/clear-sky.png";
import brokenClouds from "../img/broken-clouds.png";
import randomWeather from "../img/random-weather.png";

export default function ForecastCard({ unit, forecast }) {
  function getWeatherIcon(description) {
    switch (description) {
      case "clear sky":
        return clearSky;
      case "few clouds":
        return fewClouds;
      case "scattered clouds":
        return brokenClouds;
      case "broken clouds":
        return brokenClouds;
      case "overcast clouds":
        return brokenClouds;
      case "light rain":
        return lightRain;
      case "moderate rain":
        return lightRain;
      case "heavy rain":
        return thunderStorm;
      case "thunderstorm":
        return thunderStorm;
      case "snow":
        return snow;
      case "light snow":
        return snow;
      case "mist":
        return fog;
      case "fog":
        return fog;
      case "tornado":
        return tornado;
      default:
        return randomWeather;
    }
  }

  let modifiedTimeOfForecast;
  const timeOfForecast = Number(forecast.dt_txt.slice(11, 13));

  if (timeOfForecast <= 11) {
    modifiedTimeOfForecast = timeOfForecast.toLocaleString() + "am";
    if (timeOfForecast == 0) {
      modifiedTimeOfForecast = "12am";
    }
  } else {
    modifiedTimeOfForecast = timeOfForecast.toLocaleString() + "pm";
  }

  function convertTemp(temp) {
    if (unit == "metric") {
      return temp;
    } else {
      return (Number(temp) * 1.8 + 32).toFixed(2);
    }
  }

  return (
    <div className="custom-fz flex flex-col items-center gap-1 group relative">
      <p className="font-medium">{modifiedTimeOfForecast}</p>
      <img
        className="w-[30px]"
        src={getWeatherIcon(forecast.weather[0].description)}
        alt="weather icon"
      />
      <p className="font-semibold">{convertTemp(forecast.main.temp)}°</p>
      <p className="text-white absolute rounded-lg bg-primary px-2 bottom-0 hidden group-hover:block">{forecast.weather[0].description}</p>
    </div>
  );
}
