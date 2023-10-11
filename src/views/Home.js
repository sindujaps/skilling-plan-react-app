// src/views/Home.js
import React from 'react';
import WeatherForecast from '../components/Weather/WeatherForecast';

function Home() {
    return (
        <div>
            <h2>Welcome to the Weather App</h2>
            <WeatherForecast />
        </div>
    );
}

export default Home;
