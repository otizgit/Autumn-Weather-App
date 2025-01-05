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
  const zoom = 15;

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
        <div className="flex gap-4">
          <WeatherMainInfo weather={weather} />
          <div>
            <div className="glass border-style rounded-lg overflow-hidden mb-4">
              <iframe
                width="100%"
                height="250"
                style={{ border: "none" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
                title="google map"
              ></iframe>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iusto
              voluptates porro eaque quasi! Voluptatibus dolor deserunt
              accusantium illum ipsum.
            </div>
          </div>
        </div>
        {/* <LocationMap latitude={lat} longitude={lon} /> */}
      </div>
    </div>
  );
}
