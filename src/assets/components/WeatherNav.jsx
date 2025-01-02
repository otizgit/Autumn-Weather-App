import React, { useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.cjs";
import englandFlag from "../img/flags/english.png";
import spainFlag from "../img/flags/spanish.png";
import chineseFlag from "../img/flags/chinese.png";
import frenchFlag from "../img/flags/french.png";
import germanFlag from "../img/flags/german.png";
import italianFlag from "../img/flags/italian.png";
import russianFlag from "../img/flags/russian.png";

export default function WeatherNav({
  unit,
  setUnit,
  language,
  setLangauge,
  changeLanguage,
}) {
  const flags = [
    {
      lang: "English",
      flag: englandFlag,
      shortLang: "en",
    },
    {
      lang: "Español",
      flag: spainFlag,
      shortLang: "es",
    },
    {
      lang: "中文",
      flag: chineseFlag,
      shortLang: "zh_cn",
    },
    {
      lang: "Français",
      flag: frenchFlag,
      shortLang: "fr",
    },
    {
      lang: "Deutsch",
      flag: germanFlag,
      shortLang: "de",
    },
    {
      lang: "Italia",
      flag: italianFlag,
      shortLang: "it",
    },
    {
      lang: "Pусский",
      flag: russianFlag,
      shortLang: "ru",
    },
  ];

  const setToStandard = () => {
    setUnit("standard");
  };
  const setToMetric = () => {
    setUnit("metric");
  };

  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="relative rounded-full overflow-hidden border-style w-[300px]">
        <Icon
          className="absolute top-1/2 -translate-y-1/2 left-[0.75rem] text-[1.3rem]"
          icon="iconamoon:search-light"
        />
        <input
          className="glass pl-[2.6rem] pr-7 paddingY w-full custom-fz outline-none text-white placeholder:text-white"
          type="text"
          placeholder="Search for location"
        />
      </div>
      <div className="flex items-center gap-6">
        <div className="relative">
          <button className="flex items-center glass rounded-full gap-3 px-3 paddingY border-style">
            <img
              className="w-[1.1rem]"
              src={englandFlag}
              alt="flag of england"
            />
            <Icon className="text-[1rem]" icon="ph:caret-down-bold" />
          </button>

          <div className="absolute top-[130%] -left-6 -right-6 bottom-0 z-30">
            {flags.map((flag, index) => {
              return (
                <div key={index} className="glass border-style rounded-md mb-1">
                  <button
                    onClick={() => changeLanguage(flag.shortLang)}
                    className="flex items-center pl-2 w-full hover:bg-primary gap-3 custom-fz py-2"
                  >
                    <img
                      className="w-[1.1rem]"
                      src={flag.flag}
                      alt={flag.flag}
                    />
                    <p>{flag.lang}</p>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center glass border-style font-medium rounded-full overflow-hidden custom-fz">
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
