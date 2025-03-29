import React, { useState, useEffect, use } from 'react';
import WeatherService from './weatherService'; // Adjust the path if needed

import '../index.css'; // Adjust the path if needed

function Weather(props) {
  const [city, setCity] = useState('kolkata');
  const [realtimeData, setRealtimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setCity(props.name);
  }
  , [props.name]);

  useEffect(() => {
    async function fetchRealtimeWeather() {
      // Use the city state variable to fetch weather data
      try {
        
        const data = await WeatherService.getRealtime(city);
        setRealtimeData(data);
        console.log('Realtime weather data:', data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchRealtimeWeather();
  }, [city]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!realtimeData) return <p>No realtime weather data available.</p>;

  // Extract relevant data from the API response
  const { data } = realtimeData;
  const { values } = data;

  const temperature = values.temperature;
  const cloudCover = values.cloudCover;
  const precipitationIntensity = values.precipitationIntensity;
  const humidity = values.humidity;
  const windSpeed = values.windSpeed;
  const windDirection = values.windDirection;
  const visibility = values.visibility;

  // Determine rain status based on precipitation intensity
  const rainStatus = precipitationIntensity > 0 ? 'Raining' : 'Not raining';

  return (
    <div className="weather-container">
      <h1 className="weather-title">Realtime Weather in {city}</h1>
      <div className="weather-details">
        <div className="weather-detail">
          <span className="weather-detail-label">Temperature:</span>
          <span className="weather-detail-value">{temperature}°C</span>
        </div>
        <div className="weather-detail">
          <span className="weather-detail-label">Cloud Cover:</span>
          <span className="weather-detail-value">{cloudCover}%</span>
        </div>
        <div className="weather-detail">
          <span className="weather-detail-label">Rain:</span>
          <span className="weather-detail-value">{rainStatus}</span>
        </div>
        <div className="weather-detail">
          <span className="weather-detail-label">Humidity:</span>
          <span className="weather-detail-value">{humidity}%</span>
        </div>
        <div className="weather-detail">
          <span className="weather-detail-label">Wind Speed:</span>
          <span className="weather-detail-value">{windSpeed} m/s</span>
        </div>
        <div className="weather-detail">
          <span className="weather-detail-label">Wind Direction:</span>
          <span className="weather-detail-value">{windDirection}°</span>
        </div>
        <div className="weather-detail">
          <span className="weather-detail-label">Visibility:</span>
          <span className="weather-detail-value">{visibility} km</span>
        </div>
      </div>
    </div>
  );
}

export default Weather;