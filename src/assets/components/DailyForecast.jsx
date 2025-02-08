import React from "react";

export default function DailyForecast({
  unit,
  dailyForecast,
  forecastDay,
  setForecastDay,
}) {
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

    return `${weekday}, ${month} ${day}`;
  }

  const forecastDaysArray = [3, 7, 10];

  const handleForecastDaysClick = (day) => {
    setForecastDay(day);
  };

  return (
    <div className="lg:w-[360px] shadow-lg glass border-style rounded-xl p-5">
      <h1 className="font-semibold custom-fz mb-2">Daily Forecast</h1>
      <div className="mb-3 flex justify-between gap-2 bg-[#81818142] p-1 rounded-full">
        {forecastDaysArray.map((day) => (
          <button
            onClick={() => handleForecastDaysClick(day)}
            key={day}
            className={`text-[0.8rem] px-5 py-[0.3rem] ${
              day === forecastDay ? "bg-primary" : ""
            } font-medium hover:bg-primary rounded-full`}
          >
            {day} days
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {dailyForecast.map((forecast, index) => {
          return (
            <div
              key={index}
              className="custom-fz flex items-center justify-between pb-2"
            >
              <div className="flex items-center gap-2">
                <img
                  className="w-[45px]"
                  src={forecast.day.condition.icon}
                  alt="weather icon"
                />
                <div>
                  <p className="font-medium custom-fz">
                    {formatDate(forecast.date)}
                  </p>
                  <p className="small-fz text-lightGrey font-medium">
                    {forecast.day.condition.text}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 relative group">
                <p className="font-semibold text-[0.95rem]">
                  {unit == "metric"
                    ? forecast.day.avgtemp_c
                    : forecast.day.avgtemp_f}
                  °
                </p>
              </div>
            </div>
          );
        })}
        {dailyForecast.length < 3 ? (
          <div className="text-center custom-fz">No more forecasts available.</div>
        ) : null}
      </div>
    </div>
  );
}
