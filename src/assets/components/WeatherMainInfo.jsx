import tornado from "../img/tornado.png";
import fog from "../img/fog.png";
import snow from "../img/snow.png";
import thunderStorm from "../img/thunder-storm.png";
import lightRain from "../img/light-rain.png";
import fewClouds from "../img/few-clouds.png";
import clearSky from "../img/clear-sky.png";
import brokenClouds from "../img/broken-clouds.png";
import randomWeather from "../img/random-weather.png";
import cloud from "../img/cloud.png";
import pressureGuage from "../img/pressure-gauge.png";
import humidity from "../img/humidity.png";
import precipitation from "../img/precipitation.png";
import sunRise from "../img/sunrise.png";
import sunSet from "../img/sun-set.png";
import seaLevel from "../img/sea-level.png";
import groundLevel from "../img/ground-level.png";
import wind from "../img/windy.png";
import visibility from "../img/visibility.png";
import { Icon } from "@iconify/react/dist/iconify.cjs";
import React from "react";

export default function WeatherMainInfo({ weather }) {
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

  const sunriseTimestamp = weather.sys.sunrise;
  const sunsetTimestamp = weather.sys.sunset;
  const sunriseDate = new Date(sunriseTimestamp * 1000);
  const sunsetDate = new Date(sunsetTimestamp * 1000);
  const secondOptions = { hour: "2-digit", minute: "2-digit" };
  const sunriseTime = sunriseDate.toLocaleTimeString("en-US", secondOptions);
  const sunsetTime = sunsetDate.toLocaleTimeString("en-US", secondOptions);
  return (
    <div className="relative w-[350px] z-20 backdrop-blur-sm">
      <div className="shadow-lg glass border-style rounded-xl p-5">
        <div className="mb-6">
          <div className="flex items-center gap-1 mb-1">
            <Icon
              className="text-white text-[1.1rem]"
              icon="gridicons:location"
            />
            <div>
              <h1 className="font-medium custom-fz">{`${weather.name}, ${countryName}`}</h1>
            </div>
          </div>
          <div className="flex items-center gap-1 smaller-fz">
            <p className="text-lightGrey">{formattedDate}</p>
            <p className="text-lightGrey">{formattedTime}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              className="w-[70px]"
              src={getWeatherIcon(weather.weather[0].description)}
              alt=""
            />
            <div>
              <h1 className="text-[2.7rem] font-bold">
                {weather.main.temp}
                <sup className=" text-[1.6rem]">°</sup>
              </h1>
              <p className="-translate-y-2 text-[0.8rem]">
                {titledCaseDescription}
              </p>
            </div>
          </div>
          <div className="text-white">
            <div className="bg-primary mb-2 px-3 text-[0.8rem] py-1 flex items-center justify-center gap-3 rounded-full">
              <p className="text-white">H</p>
              <p className="text-white">{weather.main.temp_max}°</p>
            </div>
            <div className="bg-primary px-3 text-[0.8rem] flex py-1 items-center justify-center gap-3 rounded-full">
              <p className="text-white">L</p>
              <p className="text-white">{weather.main.temp_min}°</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between custom-fz">
          <div className="flex flex-col items-center">
            <img
              className="w-[1.5rem] mb-1"
              src={pressureGuage}
              alt="humidity icon"
            />
            <p className="font-semibold">{weather.main.humidity}hPa</p>
            {/* <p className="text-[0.75rem] text-lightGrey">pressure</p> */}
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-[1.5rem] mb-1"
              src={humidity}
              alt="pressure icon"
            />
            <p className="font-semibold">{weather.main.humidity}%</p>
            {/* <p className="text-[0.75rem] text-lightGrey">humidity</p> */}
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[1.5rem] mb-1" src={cloud} alt="cloud icon" />
            <p className="font-semibold">{weather.clouds.all}%</p>
            {/* <p className="text-[0.75rem] text-lightGrey">cloudiness</p> */}
          </div>

          <div className="flex flex-col items-center">
            <img className="w-[1.5rem] mb-1" src={wind} alt="wind icon" />
            <p className="font-semibold">{weather.wind.speed}m/s</p>
            {/* <p className="text-[0.75rem] text-lightGrey">
              wind <br /> speed
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
