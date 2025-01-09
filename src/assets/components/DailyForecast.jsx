import React from "react";

export default function DailyForecast({ unit, dailyForecast }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    if (isNaN(date)) {
      return "Invalid Date";
    }

    const day = date.getDate();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weekday = dayNames[date.getDay()];

    return `${day} ${month}, ${weekday}`;
  }

  return (
    <div className="lg:w-[360px] shadow-lg glass border-style rounded-xl p-5">
      <h1 className="font-semibold mb-4 custom-fz">Daily Forecast</h1>
      <div className="flex flex-col gap-2">
        {dailyForecast.map((forecast, index) => {
          return (
            <div key={index} className="custom-fz flex items-center justify-between">
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
                <p className="text-white text-[0.75rem] font-medium absolute rounded-lg w-[100px] left-full text-center bg-primary px-2 top-1/2 -translate-y-1/2 hidden group-hover:block">
                  {forecast.day.condition.text}
                </p>
              </div>
              <p className="font-medium">{formatDate(forecast.date)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
