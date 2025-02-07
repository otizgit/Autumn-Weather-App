import React, { useState } from "react";
import WeatherNav from "./WeatherNav";
import WeatherMainInfo from "./WeatherMainInfo";
import ForecastWrapper from "./ForecastWrapper";
import DailyForecast from "./DailyForecast";
import ErrorPage from "./ErrorPage";

export default function WeatherWrapper() {
  const [unit, setUnit] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [forecastDay, setForecastDay] = useState(3);

  const [city, setCity] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [error, setError] = useState(false);

  let lat;
  let lon;
  const zoom = 11;

  if (weather) {
    lat = weather.coord.lat;
    lon = weather.coord.lon;
  }

  return (
    <div className="max-width flex flex-col gap-4">
      <WeatherNav
        setWeather={setWeather}
        setDailyForecast={setDailyForecast}
        setForecast={setForecast}
        setError={setError}
        unit={unit}
        setUnit={setUnit}
        setTrigger={setTrigger}
        trigger={trigger}
        city={city}
        setCity={setCity}
        forecastDay={forecastDay}
      />
      {weather ? (
        error ? (
          <ErrorPage />
        ) : (
          <div>
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              <WeatherMainInfo
                unit={unit}
                weather={weather}
                dailyForecast={dailyForecast}
              />
              <div className="flex-1">
                <div className="glass h-[300px] lg:h-full border-style rounded-xl overflow-hidden mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: "none" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
                    title="google map"
                  ></iframe>
                </div>
              </div>
            </div>
            {dailyForecast ? (
              <div className="flex flex-col lg:flex-row gap-4">
                <DailyForecast
                  unit={unit}
                  dailyForecast={dailyForecast.forecast.forecastday.slice(1)}
                  forecastDay={forecastDay}
                  setForecastDay={setForecastDay}
                />
                <ForecastWrapper
                  unit={unit}
                  dailyForecast={dailyForecast}
                  forecast={forecast}
                />
              </div>
            ) : null}
          </div>
        )
      ) : null}
    </div>
  );
}
