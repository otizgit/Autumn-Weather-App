import React from "react";
import cloudOne from "../img/cloud1.png";
import cloudTwo from "../img/cloud2.png";
import cloudThree from "../img/cloud3.png";
import cloudFour from "../img/cloud4.png";
import blueSky from "../img/bluesky.jpg";
import { Icon } from "@iconify/react/dist/iconify.cjs";
import WeatherIcon from "./WeatherIcon";

export default function WeatherWrapper({ weather }) {
  const displayNames = new Intl.DisplayNames(["en"], { type: "region" });
  const countryName = displayNames.of(weather.sys.country);

  const localTimeInMs = (weather.dt + weather.timezone) * 1000;
  const localDate = new Date(localTimeInMs);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = localDate.toLocaleDateString("en-US", options);
  const formattedTime = localDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="container min-h-screen max-w-[100vw] relative grid place-items-center">
      <img src={blueSky} className="absolute inset-0 w-full h-full" alt="" />
      <img
        className="absolute w-[100px] top-10 left-10"
        src={cloudFour}
        alt=""
      />
      <img
        className="absolute w-[100px] left-[40%] bottom-2 top-5"
        src={cloudOne}
        alt=""
      />
      <img className="fixed w-[110px] -right-10 top-5" src={cloudTwo} alt="" />
      {/* <img className="absolute w-[110px] bottom-5 right-10" src={cloudFour} alt="" /> */}

      <div className="relative z-20 backdrop-blur-sm shadow-lg glass p-5 rounded-xl">
        <div className="relative rounded-sm overflow-hidden mb-6 w-[300px]">
          <Icon
            className="absolute top-1/2 -translate-y-1/2 left-[0.35rem] text-[1.3rem]"
            icon="iconamoon:search-light"
          />
          <input
            className="bg-[#116aa2] pl-8 py-2 rounded-lg w-full outline-none text-white placeholder:text-white"
            type="text"
            placeholder="Search for location"
          />
        </div>

        <div>
          <div className="flex items-center gap-1 mb-1">
            <Icon className="text-[1.5rem]" icon="gridicons:location" />
            <div>
              <h1 className="font-extrabold font-Oswald text-[1.3rem]">{`${weather.name}, ${countryName}`}</h1>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <p>{formattedDate}</p>
            <Icon icon="radix-icons:dot-filled" width="16" height="16" />
            <p>{formattedTime}</p>
          </div>
        </div>

        <div className="flex items-center">
          <WeatherIcon
            iconCode={weather.weather[0].icon}
            description={weather.weather[0].description}
          />
          <div>
            <h1 className="text-[3.2rem] font-Oswald font-extrabold">
              {weather.main.temp}
              <sup className=" text-[2rem] font-Oswald font-extrabold">°c</sup>
            </h1>
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
        <p>
          <strong>Temperature:</strong>
        </p>
        <p>
          <strong>Weather:</strong> {weather.weather[0].description}
        </p>
        <p>
          <strong>Humidity:</strong> {weather.main.humidity}%
        </p>
        <p>
          <strong>Wind Speed:</strong> {weather.wind.speed} m/s
        </p>
      </div>
    </div>
  );
}
