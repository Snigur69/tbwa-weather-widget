import { axiosInstance } from '@/app/api/axios';

export const getWeather = params =>
  axiosInstance.get('/forecast.json', {
    params,
  });
