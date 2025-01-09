import React from "react";

export default function DailyForecast({ unit, dailyForecast }) {
  return (
    <div className="lg:w-[360px] shadow-lg glass border-style rounded-xl p-5">
      <h1 className="font-semibold mb-4 custom-fz">Daily Forecast</h1>
      <div className="flex flex-col gap-2">
        {dailyForecast.map((forecast) => {
          return (
            <div className="custom-fz flex items-center justify-between">
              <div className="flex items-center gap-2 relative group">
                <img
                  className="w-[30px]"
                  src={forecast.day.condition.icon}
                  alt="weather icon"
                />
                <p className="font-semibold">
                  {unit == "metric"
                    ? forecast.day.avgtemp_c
                    : forecast.day.avgtemp_f}
                  °
                </p>
                <p className="text-white absolute rounded-lg w-[100px] left-full text-center bg-primary px-2 top-1/2 -translate-y-1/2 hidden group-hover:block">
                  {forecast.day.condition.text}
                </p>
              </div>
              <p className="font-medium">{forecast.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
