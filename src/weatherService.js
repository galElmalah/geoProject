import axios from 'axios';
import config from './config';

const temperatureConverter = kelvin => {
  if (kelvin < 0) {
    throw new Error('below absolute zero (0 K)');
  } else {
    return parseInt(kelvin - 273.15);
  }
};

export const fetchWeather = async (lat, lng) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${
        config.apiKey
      }`
    );
    const weatherData = response.data;
    console.log(weatherData);
    const currentTemp = temperatureConverter(weatherData.main.temp);
    const { description, icon } = weatherData.weather[0];
    const cityName = weatherData.name;
    const pressure = weatherData.main.pressure;
    const humidity = weatherData.main.humidity;
    const windDeg = weatherData.wind.deg;
    const windSpeed = weatherData.wind.speed;
    return {
      temperature: currentTemp,
      icon,
      description,
      cityName,
      currentElementDetails: {cityName, currentTemp, icon, description, pressure, humidity, windDeg, windSpeed}
    };
  } catch (err) {
    console.log(err);
  }
};

export const fetchWeatherByCountry = async (country="", city="") => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${
        config.apiKey
      }`
    );
    const weatherData = response.data;
    const currentTemp = temperatureConverter(weatherData.main.temp);
    const { description, icon } = weatherData.weather[0];
    const cityName = weatherData.name;
    const coord = weatherData.coord;
    const pressure = weatherData.main.pressure;
    const humidity = weatherData.main.humidity;
    return {
      temperature: currentTemp,
      icon,
      description,
      position: coord,
      cityName,
      currentElementDetails: {cityName, currentTemp, icon, description, pressure, humidity}
    };
  } catch (err) {
    console.log(err);
  }
};