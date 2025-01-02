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

      <div className="flex items-center gap-3 mb-4">
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
      <div className="flex items-center justify-between custom-fz">
        <div className="flex flex-col items-center">
          <img className="w-[2.1rem] mb-2" src={humidity} alt="" />
          <p className="font-semibold">{weather.main.humidity}%</p>
          <p className="text-[0.75rem] text-lightGrey">pressure</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-[2.1rem] mb-2" src={pressureGuage} alt="" />
          <p className="font-semibold">{weather.main.pressure}hPa</p>
          <p className="text-[0.75rem] text-lightGrey">humidity</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-[2.1rem] mb-2" src={cloud} alt="" />
          <p className="font-semibold">{weather.clouds.all}%</p>
          <p className="text-[0.75rem] text-lightGrey">cloudiness</p>
        </div>
      </div>
      <p></p>
      <p>
        <strong>Wind Speed:</strong> {weather.wind.speed} m/s
      </p>
    </div>
  );
}
