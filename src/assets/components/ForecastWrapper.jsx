import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastCard from "./ForecastCard";
import LoadingScreen from "./LoadingScreen";

export default function ForecastWrapper({ unit, forecast }) {
  return (
    <div className="border-style glass p-5 rounded-xl custom-fz flex-1">
      <h1 className="font-semibold mb-4 custom-fz">Hourly Forecast</h1>
      <div className="flex items-center justify-between">
        {forecast
          ? forecast.map((forecastData, index) => {
              return <ForecastCard key={index} unit={unit} forecast={forecastData} />;
            })
          : // <LoadingScreen />
            null}
      </div>
    </div>
  );
}
