// src/components/Weather/WeatherService.js
import axios from 'axios';

const baseUrl = 'https://localhost:57379/api/WeatherForecast';


class WeatherService {
    static getWeatherForecast() {
        return axios.get(baseUrl).then((response) => response.data);
    }
}

export default WeatherService;
