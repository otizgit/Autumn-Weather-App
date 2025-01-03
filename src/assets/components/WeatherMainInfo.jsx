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
      case "cielo claro":
      case "晴":
      case "ciel dégagé":
      case "cielo sereno":
      case "ясное небо":
        return clearSky;
      case "few clouds":
      case "pocas nubes":
      case "少云":
      case "peu nuageux":
      case "poche nuvole":
      case "малооблачно":
        return fewClouds;
      case "scattered clouds":
      case "nubes dispersas":
      case "多云":
      case "nuages dispersés":
      case "nubi sparse":
      case "рассеянные облака":
        return brokenClouds;
      case "broken clouds":
      case "nubes rotas":
      case "多云":
      case "nuages fragmentés":
      case "nubi frammentate":
      case "облачно":
        return brokenClouds;
      case "overcast clouds":
      case "nublado":
      case "阴":
      case "ciel couvert":
      case "cielo coperto":
      case "пасмурно":
        return brokenClouds;
      case "light rain":
      case "lluvia ligera":
      case "小雨":
      case "pluie légère":
      case "pioggia leggera":
      case "небольшой дождь":
        return lightRain;
      case "moderate rain":
      case "lluvia moderada":
      case "中雨":
      case "pluie modérée":
      case "pioggia moderata":
      case "умеренный дождь":
        return lightRain;
      case "heavy rain":
      case "lluvia intensa":
      case "大雨":
      case "forte pluie":
      case "pioggia intensa":
      case "сильный дождь":
        return thunderStorm;
      case "thunderstorm":
      case "tormenta eléctrica":
      case "雷暴":
      case "orage":
      case "temporale":
      case "гроза":
        return thunderStorm;
      case "snow":
      case "nieve":
      case "雪":
      case "neige":
      case "neve":
      case "снег":
        return snow;
      case "light snow":
      case "nevada ligera":
      case "小雪":
      case "neige légère":
      case "neve leggera":
      case "небольшой снег":
        return snow;
      case "mist":
      case "niebla":
      case "雾":
      case "brouillard":
      case "nebbia":
      case "туман":
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
    <div className="relative w-fit z-20 backdrop-blur-sm shadow-lg glass border-style p-5 rounded-xl">
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
        <div className="flex items-center gap-1 smaller-fz">
          <p className="text-lightGrey">{formattedDate}</p>
          <p className="text-lightGrey">{formattedTime}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <img
          className="w-[70px]"
          src={getWeatherIcon(weather.weather[0].description)}
          alt=""
        />
        <div>
          <h1 className="text-[2.5rem] font-medium">
            {weather.main.temp}
            <sup className=" text-[1.6rem]">°</sup>
          </h1>
          <p className="-translate-y-2 text-[0.85rem] custom-fz">
            {titledCaseDescription}
          </p>
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

      <div className="flex items-center justify-between custom-fz mb-6">
        <div className="flex flex-col items-center">
          <img className="w-[2.1rem] mb-2" src={humidity} alt="humidity icon" />
          <p className="font-semibold">{weather.main.humidity}hPa</p>
          <p className="text-[0.75rem] text-lightGrey">pressure</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-[2.1rem] mb-2"
            src={pressureGuage}
            alt="pressure icon"
          />
          <p className="font-semibold">{weather.main.humidity}%</p>
          <p className="text-[0.75rem] text-lightGrey">humidity</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-[2.1rem] mb-2" src={cloud} alt="cloud icon" />
          <p className="font-semibold">{weather.clouds.all}%</p>
          <p className="text-[0.75rem] text-lightGrey">cloudiness</p>
        </div>
      </div>

      <div className="flex items-center justify-between custom-fz mb-6">
        <div className="flex flex-col items-center">
          <img className="w-[2.1rem] mb-2" src={wind} alt="wind icon" />
          <p className="font-semibold">{weather.wind.speed}m/s</p>
          <p className="text-[0.75rem] text-lightGrey">
            wind <br /> speed
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-[2.1rem] mb-2"
            src={visibility}
            alt="visibility icon"
          />
          <p className="font-semibold">{weather.visibility / 1000}km</p>
          <p className="text-[0.75rem] text-lightGrey">visibility</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-[2.1rem] mb-2"
            src={seaLevel}
            alt="sea-level icon"
          />
          <p className="font-semibold">{weather.main.sea_level / 10}kPa</p>
          <p className="text-[0.75rem] text-lightGrey">sea level</p>
        </div>
      </div>

      <div className="flex items-center justify-between custom-fz">
        <div className="flex flex-col items-center">
          <img
            className="w-[2.1rem] mb-2"
            src={groundLevel}
            alt="ground level icon"
          />
          <p className="font-semibold">{weather.main.sea_level / 10}kPa</p>
          <p className="text-[0.75rem] text-lightGrey">
            ground <br /> level
          </p>
        </div>
        {countryName === "Nigeria" && (
          <div className="flex flex-col items-center">
            <img
              className="w-[2.1rem] mb-2"
              src={sunRise}
              alt="pressure icon"
            />
            <p className="font-semibold">{sunriseTime}</p>
            <p className="text-[0.75rem] text-lightGrey">sun rise</p>
          </div>
        )}
        {countryName === "Nigeria" && (
          <div className="flex flex-col items-center">
            <img className="w-[2.1rem] mb-2" src={sunSet} alt="cloud icon" />
            <p className="font-semibold">{sunsetTime}</p>
            <p className="text-[0.75rem] text-lightGrey">sun set</p>
          </div>
        )}
        {/* {weather.rain || weather.snow ? (
          <div className="flex flex-col items-center">
            <img
              className="w-[2.1rem] mb-2"
              src={precipitation}
              alt="precipitation icon"
            />
            {weather.rain && (
              <p className="font-semibold">Rain: {weather.rain["1h"]} mm</p>
            )}
            {weather.snow && (
              <p className="font-semibold">Snow: {weather.snow["1h"]} mm</p>
            )}
            <p className="text-[0.75rem] text-lightGrey">precipitation</p>
          </div>
        ) : null} */}
      </div>
    </div>
  );
}
