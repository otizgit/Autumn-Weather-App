import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function LineChart({ unit, forecast }) {
  const forecastTimeArray = [];
  forecast.map((forecastData) => {
    let modifiedTimeOfForecast;
    const timeOfForecast = Number(forecastData.dt_txt.slice(11, 13));

    if (timeOfForecast <= 11) {
      modifiedTimeOfForecast = timeOfForecast.toLocaleString() + "am";
      if (timeOfForecast == 0) {
        modifiedTimeOfForecast = "12am";
      }
    } else {
      modifiedTimeOfForecast = timeOfForecast.toLocaleString() + "pm";
    }
    forecastTimeArray.push(modifiedTimeOfForecast);
  });

  function convertTemp(temp) {
    if (unit == "metric") {
      return temp;
    } else {
      return Number((temp * 1.8 + 32).toFixed(2));
    }
  }
  const forecastArray = [];
  forecast.map((forecastData) => {
    forecastArray.push(convertTemp(forecastData.main.temp));
  });

  const weatherDescriptionArray = [];
  forecast.map((forecastData) => {
    const firstLetter = forecastData.weather[0].description.slice(0, 1);
    const restLetters = forecastData.weather[0].description.slice(1);
    weatherDescriptionArray.push(firstLetter.toUpperCase() + restLetters);
  });

  const data = {
    labels: forecastTimeArray,
    datasets: [
      {
        label: "Weather",
        data: forecastArray,
        weatherDesc: weatherDescriptionArray,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let value = tooltipItem.raw;
            let weatherDesc =
              tooltipItem.dataset.weatherDesc[tooltipItem.dataIndex];
            return unit == "metric" ? `Weather: ${value}°C, ${weatherDesc}` : `Weather: ${value}°F, ${weatherDesc}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.202)",
        },
        ticks: {
          color: "hsla(0, 0%, 90%, 1)",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.202)",
        },
        ticks: {
          color: "hsla(0, 0%, 90%, 1)",
        },
      },
    },
  };

  return <Line data={data} backgroundColor="red" options={options} />;
}
