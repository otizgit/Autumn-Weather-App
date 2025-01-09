import React from "react";
import WeatherNav from "./WeatherNav";
import WeatherMainInfo from "./WeatherMainInfo";
import LocationMap from "./LocationMap";
import ForecastWrapper from "./ForecastWrapper";
import DailyForecast from "./DailyForecast";

export default function WeatherWrapper({
  weather,
  unit,
  setUnit,
  forecast,
  dailyForecast,
  setTrigger,
  city,
  setCity,
}) {
  const { lat, lon } = weather.coord;
  const zoom = 15;

  return (
    <div className="max-width flex flex-col gap-4">
      <div>
        <WeatherNav
          unit={unit}
          setUnit={setUnit}
          setTrigger={setTrigger}
          city={city}
          setCity={setCity}
        />
        <div className="flex flex-col lg:flex-row gap-4">
          <WeatherMainInfo unit={unit} weather={weather} />
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
        {/* <LocationMap latitude={lat} longitude={lon} /> */}
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <DailyForecast unit={unit} dailyForecast={dailyForecast} />
        <ForecastWrapper unit={unit} forecast={forecast} />
      </div>
    </div>
  );
}
