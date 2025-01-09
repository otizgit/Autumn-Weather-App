import React from "react";

export default function DailyForecast({ unit, dailyForecast }) {
//   console.log(dailyForecast);
  return (
    <div className="w-[350px] shadow-lg glass border-style rounded-xl p-5">
      <h1 className="font-semibold mb-4 custom-fz">Daily Forecast</h1>
      <div className="flex flex-col gap-2">
        {dailyForecast.map((forecast) => {
          return (
            <div className="custom-fz flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="w-[30px]"
                  src={forecast.day.condition.icon}
                  alt=""
                />
                <p>
                  {unit == "metric"
                    ? forecast.day.avgtemp_c
                    : forecast.day.avgtemp_f}
                  °
                </p>
              </div>
              <p>{forecast.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
