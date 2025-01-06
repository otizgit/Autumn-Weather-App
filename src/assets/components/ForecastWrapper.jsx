import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastCard from "./ForecastCard";
import LoadingScreen from "./LoadingScreen";

export default function ForecastWrapper({ forecast }) {
  return (
    <div className="border-style glass p-5 rounded-xl custom-fz">
      <div className="flex items-center justify-between">
        {forecast
          ? forecast.map((forecastData, index) => {
              return <ForecastCard key={index} forecast={forecastData} />;
            })
          : // <LoadingScreen />
            null}
      </div>
    </div>
  );
}
