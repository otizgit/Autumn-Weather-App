import React from "react";
import { Icon } from "@iconify/react/dist/iconify.cjs";
import englandFlag from "../img/flags/english.png";
import spainFlag from "../img/flags/spanish.png";
import chineseFlag from "../img/flags/chinese.png";
import frenchFlag from "../img/flags/french.png";
import germanFlag from "../img/flags/german.png";
import italianFlag from "../img/flags/italian.png";
import russianFlag from "../img/flags/russian.png";

export default function WeatherNav() {
  const flags = [
    {
      lang: "English",
      flag: englandFlag,
    },
    {
      lang: "Español",
      flag: spainFlag,
    },
    {
      lang: "中文",
      flag: chineseFlag,
    },
    {
      lang: "Français",
      flag: frenchFlag,
    },
    {
      lang: "Deutsch",
      flag: germanFlag,
    },
    {
      lang: "Italia",
      flag: italianFlag,
    },
    {
      lang: "Pусский",
      flag: russianFlag,
    },
  ];

  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="relative rounded-full overflow-hidden border-style w-[300px]">
        <Icon
          className="absolute top-1/2 -translate-y-1/2 left-[0.75rem] text-[1.3rem]"
          icon="iconamoon:search-light"
        />
        <input
          className="glass pl-[2.6rem] pr-7 py-3 w-full custom-fz outline-none text-white placeholder:text-white"
          type="text"
          placeholder="Search for location"
        />
      </div>
      <div>
        <div className="flex items-center glass rounded-full gap-2 pr-1 border-style">
          {/* <p className="custom-fz">ENG</p> */}
          <img className="w-[22px]" src={englandFlag} alt="flag of england" />
          <Icon className="text-[1rem]" icon="ph:caret-down-bold" />
        </div>

        <div>
          
        </div>
      </div>
    </div>
  );
}
