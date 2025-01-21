import React, { useState, useEffect } from "react";
import WeatherWrapper from "./assets/components/WeatherWrapper";

export default function App() {
  return (
    <div className="container min-h-screen max-w-[100vw] relative py-[3rem]">
      <WeatherWrapper />
    </div>
  );
}
