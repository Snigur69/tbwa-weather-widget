'use client';
import { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';

import { useWeather } from '@/app/context';
import { getWeather } from '@/app/services';

const Search = () => {
  const [search, setSearch] = useState();
  const [geo, setGeo] = useState('');

  const { setWeatherData } = useWeather();

  const handleSearch = e => setSearch(e.target.value);

  const handleSubmit = async () => {
    const params = search || geo;

    try {
      setWeatherData({ isLoading: true });

      const { data } = await getWeather({ q: params, days: 5 });

      setWeatherData({ isError: false, isLoading: false, ...data });
    } catch (e) {
      setWeatherData({ isError: true, isLoading: false });
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setGeo(`${position.coords.latitude},
            ${position.coords.longitude}`);
      });
    }
  }, []);

  return (
    <>
      <TextField
        id="search"
        label="City name, coordinates, etc"
        variant="outlined"
        onChange={handleSearch}
        value={search}
      />
      <Button onClick={handleSubmit}>Search</Button>
    </>
  );
};

export default Search;
