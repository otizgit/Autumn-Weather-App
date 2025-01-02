import React from "react";
import cloudOne from "../img/cloud1.png";
import cloudTwo from "../img/cloud2.png";
import cloudThree from "../img/cloud3.png";
import cloudFour from "../img/cloud4.png";
import blueSky from "../img/bluesky.jpg";
import tornado from "../img/tornado.png";
import fog from "../img/fog.png";
import snow from "../img/snow.png";
import thunderStorm from "../img/thunder-storm.png";
import lightRain from "../img/light-rain.png";
import fewClouds from "../img/few-clouds.png";
import clearSky from "../img/clear-sky.png";
import brokenClouds from "../img/broken-clouds.png";
import randomWeather from "../img/random-weather.png";
import { Icon } from "@iconify/react/dist/iconify.cjs";
import WeatherNav from "./WeatherNav";

export default function WeatherWrapper({
  weather,
  unit,
  setUnit,
  language,
  setLanguage,
  changeLanguage,
}) {
  function getWeatherIcon(description) {
    switch (description) {
      case "clear sky":
        return clearSky;
      case "few clouds":
        return fewClouds;
      case "scattered clouds":
      case "broken clouds":
      case "overcast clouds":
        return brokenClouds;
      case "light rain":
      case "moderate rain":
        return lightRain;
      case "heavy intensity rain":
      case "thunderstorm":
        return thunderStorm;
      case "snow":
      case "light snow":
        return snow``;
      case "mist":
      case "fog":
        return fog;
      case "tornado":
        return tornado;
      default:
        return randomWeather;
    }
  }

  const displayNames = new Intl.DisplayNames(["en"], { type: "region" });
  const countryName = displayNames.of(weather.sys.country);

  const localTimeInMs = (weather.dt + weather.timezone) * 1000;
  const localDate = new Date(localTimeInMs);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = localDate.toLocaleDateString("en-US", options);
  const formattedTime = localDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  function convertToTitleDescription(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  const titledCaseDescription = convertToTitleDescription(
    weather.weather[0].description
  );

  return (
    <div className="container min-h-screen max-w-[100vw] relative py-[3rem]">
      <div className="max-width">
        <WeatherNav
          unit={unit}
          setUnit={setUnit}
          language={language}
          setLangauge={setLanguage}
          changeLanguage={changeLanguage}
        />
        <div className="relative z-20 backdrop-blur-sm shadow-lg glass p-5 rounded-xl">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <Icon
                className="text-white text-[1.1rem]"
                icon="gridicons:location"
              />
              <div>
                <h1 className="font-medium custom-fz">{`${weather.name}, ${countryName}`}</h1>
              </div>
            </div>
            <div className="flex items-center gap-1 custom-fz">
              <p className="text-white">{formattedDate}</p>
              <p className="text-white">{formattedTime}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              className="w-[70px]"
              src={getWeatherIcon(weather.weather[0].description)}
              alt=""
            />
            <div>
              <h1 className="text-[3rem] font-medium">
                {weather.main.temp}
                <sup className=" text-[2rem]">°</sup>
              </h1>
              <p className="-translate-y-2 text-[0.85rem] custom-fz">
                {titledCaseDescription}
              </p>
            </div>
            <div className="text-white">
              <div className="bg-[#116aa2] mb-2 px-4 text-[0.8rem] flex items-center gap-3 rounded-full">
                <p className="text-white">H</p>
                <p className="text-white">{weather.main.temp_max}°</p>
              </div>
              <div className="bg-[#116aa2] px-4 text-[0.8rem] flex items-center gap-3 rounded-full">
                <p className="text-white">L</p>
                <p className="text-white">{weather.main.temp_min}°</p>
              </div>
            </div>
          </div>
          <p>
            <strong>Humidity:</strong> {weather.main.humidity}%
          </p>
          <p>
            <strong>Wind Speed:</strong> {weather.wind.speed} m/s
          </p>
        </div>
      </div>
    </div>
  );
}
