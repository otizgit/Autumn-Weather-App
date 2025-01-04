import React from "react";
import WeatherNav from "./WeatherNav";
import WeatherMainInfo from "./WeatherMainInfo";
import LocationMap from "./LocationMap";

export default function WeatherWrapper({
  weather,
  setWeather,
  unit,
  setUnit,
  language,
  changeLanguage,
}) {
  const { lat, lon } = weather.coord;

  return (
    <div className="container min-h-screen max-w-[100vw] relative py-[3rem]">
      <div className="max-width">
        <WeatherNav
          setWeather={setWeather}
          unit={unit}
          setUnit={setUnit}
          language={language}
          changeLanguage={changeLanguage}
        />
        <WeatherMainInfo weather={weather} />
        {/* <LocationMap latitude={lat} longitude={lon} /> */}
      </div>
    </div>
  );
}
