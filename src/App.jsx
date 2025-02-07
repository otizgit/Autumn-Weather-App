import React from "react";
import Lenis from "lenis";
import WeatherWrapper from "./assets/components/WeatherWrapper";

export default function App() {
  const lenis = new Lenis({
    autoRaf: true,
  });

  return (
    <div className="container min-h-screen max-w-[100vw] relative py-[3rem]">
      <WeatherWrapper />
    </div>
  );
}
