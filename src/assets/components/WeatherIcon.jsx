import React from "react";

export default function WeatherIcon({ iconCode, description }) {
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  return <img className="w-[130px]" src={iconUrl} alt={description} />;
}
