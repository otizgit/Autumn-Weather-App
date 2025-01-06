import React from 'react'

export default function ForecastCard({forecast}) {
    const slicedForecast = forecast.list.slice(1, 11)
    console.log(slicedForecast);

  return (
    <div>
        Hello      
    </div>
  )
}
