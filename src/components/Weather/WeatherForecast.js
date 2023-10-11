// src/components/Weather/WeatherForecast.js
import React, { useEffect, useState } from 'react';
import WeatherService from './WeatherService';

function WeatherForecast() {
    const [forecasts, setForecasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        WeatherService.getWeatherForecast()
            .then((data) => {
                setForecasts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
                setError(error);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Weather Forecast</h1>
            <ul>
                {forecasts.map((forecast, index) => (
                    <li key={index}>
                        Date: {forecast.date}, Temperature: {forecast.temperatureC}°C, Summary: {forecast.summary}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WeatherForecast;
