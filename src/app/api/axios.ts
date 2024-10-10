import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  params: {
    key: process.env.API_KEY,
  },
});
