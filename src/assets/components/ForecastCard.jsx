import React from "react";

export default function ForecastCard({ forecast }) {
    let modifiedTimeOfForecast;
  const timeOfForecast = Number(forecast.dt_txt.slice(11, 13))

  if (timeOfForecast <= 11) {
    modifiedTimeOfForecast = timeOfForecast.toLocaleString() + 'am'
    if (timeOfForecast == 0) {
        modifiedTimeOfForecast = "12am"
    }
  } else {
    modifiedTimeOfForecast = timeOfForecast.toLocaleString() + 'pm'
  }
  
  return (
    <div className="">
        <p>{modifiedTimeOfForecast}</p>
      <p>
        {forecast.main.temp}°
      </p>
    </div>
  );
}
