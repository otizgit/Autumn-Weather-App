import React, { useEffect, useState } from "react";
import WeatherNav from "./WeatherNav";
import WeatherMainInfo from "./WeatherMainInfo";
import ForecastWrapper from "./ForecastWrapper";
import DailyForecast from "./DailyForecast";
import ErrorPage from "./ErrorPage";
import { BeatLoader } from "react-spinners";

export default function WeatherWrapper() {
  const [unit, setUnit] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [forecastDay, setForecastDay] = useState(4);
  const [city, setCity] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [error, setError] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const zoom = 11;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        (error) => {
          alert("Please turn on your location and refresh the page.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, [!isSearch]);

  return (
    <div>
      {lat ? (
        <div className="max-width flex flex-col gap-4">
          <WeatherNav
            weather={weather}
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
            isSearch={isSearch}
            setIsSearch={setIsSearch}
            lat={lat}
            lon={lon}
            setLat={setLat}
            setLon={setLon}
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
                      dailyForecast={dailyForecast.forecast.forecastday.slice(
                        1
                      )}
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
      ) : (
        <div className="grid place-items-center bg-[#00000064] backdrop-blur-md inset-0 fixed h-full w-full">
          <div>
            <BeatLoader color="#116aa2" size={30} loading={true} />
          </div>
        </div>
      )}
    </div>
  );
}
