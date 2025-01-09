import React, {useState, useEffect} from 'react'

export default function DailyForecast() {
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
      const fetchForecast = async () => {
        const apiKey = "YOUR_API_KEY"; // Replace with your API key
        const location = "Lagos";
        const days = 3;
  
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=${days}`;
        try {
          const response = await axios.get(url);
          setForecast(response.data.forecast.forecastday);
        } catch (error) {
          console.error("Error fetching forecast:", error);
        }
      };
  return (
    <div>
      <div>
        dfdf
      </div>
    </div>
  )
}
