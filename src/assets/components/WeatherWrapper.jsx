import React from "react";
import WeatherNav from "./WeatherNav";
import WeatherMainInfo from "./WeatherMainInfo";
import LocationMap from "./LocationMap";
import ForecastWrapper from "./ForecastWrapper";

export default function WeatherWrapper({
  weather,
  unit,
  setUnit,
  forecast,
  setTrigger,
  city,
  setCity,
}) {
  const { lat, lon } = weather.coord;
  const zoom = 15;

  return (
    <div className="container min-h-screen max-w-[100vw] relative py-[3rem]">
      <div className="max-width">
        <WeatherNav
          unit={unit}
          setUnit={setUnit}
          setTrigger={setTrigger}
          city={city}
          setCity={setCity}
        />
        <div className="flex gap-4">
          <WeatherMainInfo weather={weather} />
          <div className="flex-1">
            <div className="glass border-style rounded-xl overflow-hidden mb-4">
              <iframe
                width="100%"
                height="300"
                style={{ border: "none" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
                title="google map"
              ></iframe>
            </div>
            <ForecastWrapper forecast={forecast} />
          </div>
        </div>
        {/* <LocationMap latitude={lat} longitude={lon} /> */}
      </div>
    </div>
  );
}
