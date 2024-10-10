'use client';
import { FC, useMemo } from 'react';
import { Card, Divider, Stack, Typography } from '@mui/material';
import { Grid } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import classNames from 'classnames';

import { WeatherCard, WeatherInfo, WeatherItem } from '@/app/components';
import { WidgetSize } from '@/app/enums';
import { useWeather } from '@/app/context';

import s from './WeatherWidget.module.scss';
import 'swiper/css';

interface WeatherWidgetProps {
  size: WidgetSize;
}

const WeatherWidget: FC<WeatherWidgetProps> = ({ size }) => {
  const { weatherData } = useWeather();
  const { current, forecast, location, isError } = weatherData;

  const formattedLocation = `${location?.name}, ${location?.country}`;

  const shortForecast = useMemo(
    () => forecast?.forecastday.slice(1, 3),
    [forecast],
  );

  if (isError) {
    return (
      <Stack
        container
        className={classNames(s[size], s.card)}
        padding="15px"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h6" textAlign="center" lineHeight="25px">
          Something went wrong...
        </Typography>
        <Typography variant="body1" textAlign="center">
          Try again later...
        </Typography>
      </Stack>
    );
  }

  switch (size) {
    case WidgetSize.Small: {
      return (
        <div className={classNames(s.small, s.card)}>
          <Swiper
            loop
            spaceBetween={0}
            slidesPerView={1}
            speed={2000}
            autoplay={{
              delay: 3000,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide key={0}>
              <WeatherCard
                date={new Date()}
                icon={current?.condition?.icon}
                temperature={current?.temp_c}
                humidity={current?.humidity}
                location={formattedLocation}
              />
            </SwiperSlide>
            {shortForecast?.map(({ date, day }) => (
              <SwiperSlide key={date}>
                <WeatherCard
                  date={new Date(date)}
                  icon={day?.condition?.icon}
                  temperature={day?.avgtemp_c}
                  humidity={day?.avghumidity}
                  location={formattedLocation}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
    }
    case WidgetSize.Wide: {
      return (
        <Card className={classNames(s.wide, s.card)}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <WeatherCard
                variant={WidgetSize.Wide}
                date={new Date()}
                icon={current?.condition?.icon}
                temperature={current?.temp_c}
                humidity={current?.humidity}
                location={formattedLocation}
              />
            </Grid>
            <Grid item xs={6} className={s.list}>
              {shortForecast?.map(({ date, day }) => (
                <WeatherItem
                  date={new Date(date)}
                  icon={day?.condition?.icon}
                  temperature={day?.avgtemp_c}
                />
              ))}
            </Grid>
          </Grid>
        </Card>
      );
    }

    case WidgetSize.Large: {
      return (
        <Card className={classNames(s.large, s.card)}>
          <WeatherInfo
            date={new Date()}
            location={formattedLocation}
            icon={current?.condition?.icon}
            temperature={current?.temp_c}
            humidity={current?.humidity}
            cloud={current?.cloud}
            heatIndex={current?.heatindex_c}
            pressure={current?.pressure_in}
            windSpeed={current?.wind_kph}
          />
          <Divider />
          <Typography
            variant="h6"
            textAlign="center"
            marginTop="10px"
            fontWeight="bold"
          >
            Forecast for a 5 days
          </Typography>
          <Grid container spacing="1px" justifyContent="space-between">
            {forecast?.forecastday?.map(({ date, day }) => (
              <WeatherItem
                date={new Date(date)}
                icon={day?.condition?.icon}
                temperature={day?.avgtemp_c}
              />
            ))}
          </Grid>
        </Card>
      );
    }
    default: {
      return null;
    }
  }
};

export default WeatherWidget;
