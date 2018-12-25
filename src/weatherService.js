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
    const currentTemp = temperatureConverter(weatherData.main.temp);
    const { description, icon } = weatherData.weather[0];
    return {
      temperature: currentTemp,
      icon,
      description,
    };
  } catch (err) {
    console.log(err);
  }
};
