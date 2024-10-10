'use client';
import { createContext, useContext, useState } from 'react';

const WeatherContext = createContext({});

export const WeatherProvider = ({ children, initialWeatherData }) => {
  const [weatherData, setWeatherData] = useState(initialWeatherData);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  return useContext(WeatherContext);
};

export default WeatherContext;
