import React from "react";
import { Icon } from "@iconify/react/dist/iconify.cjs";

export default function WeatherNav({ unit, setUnit, setTrigger, city, setCity }) {
  const setToStandard = () => {
    setUnit("standard");
  };
  const setToMetric = () => {
    setUnit("metric");
  };

  const searchLocationData = (e) => {
    e.preventDefault();
    setTrigger((prevTrigger) => !prevTrigger);
  };

  const handleEnterClick = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchLocationData(e);
    }
  };

  return (
    <div className="mb-6 flex items-center gap-4 justify-between">
      <div className="relative rounded-full overflow-hidden border-style w-[300px]">
        <Icon
          className="absolute top-1/2 -translate-y-1/2 left-[0.75rem] text-[1.1rem]"
          icon="iconamoon:search-light"
        />
        <form onSubmit={(e) => searchLocationData(e)}>
          <input
            value={city}
            onKeyDown={(e) => handleEnterClick(e)}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            className="glass pl-[2.6rem] pr-7 paddingY w-full custom-fz outline-none text-white placeholder:text-white"
            type="text"
            placeholder="Search for location"
          />
        </form>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center glass border-style font-medium rounded-full overflow-hidden small-fz">
          <button
            onClick={setToMetric}
            className={`px-4 paddingY rounded-tl-full rounded-bl-full border-r-[0.1em] border-[#9a9a9a6d] ${
              unit == "metric" && "bg-primary"
            }`}
          >
            °C
          </button>
          <button
            onClick={setToStandard}
            className={`px-4 paddingY rounded-tr-full rounded-br-full hover:bg-primary ${
              unit == "standard" && "bg-primary"
            }`}
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
}
