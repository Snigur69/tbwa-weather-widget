import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Grid } from '@mui/system';

import { getFormattedDate } from '@/app/utils';
import {
  CelsiusIcon,
  CloudIcon,
  DesertIcon,
  HumidityIcon,
  PressureIcon,
  WindIcon,
  IconTypography,
} from '@/app/components';

import s from './WeatherInfo.module.scss';

interface WeatherInfoProps {
  date: Date;
  location: string;
  icon: string;
  temperature: number;
  humidity: number;
  cloud: number;
  feels: number;
  heatIndex: number;
  pressure: number;
  windSpeed: number;
}

const WeatherInfo: FC<WeatherInfoProps> = ({
  date,
  location,
  icon,
  temperature,
  humidity,
  cloud,
  heatIndex,
  pressure,
  windSpeed,
}) => (
  <Box>
    <Typography
      variant="h5"
      textAlign="center"
      fontWeight="bold"
      fontStyle="italic"
    >
      {location}
    </Typography>
    <Typography variant="h6" textAlign="center">
      {getFormattedDate(date)}
    </Typography>
    <Grid container spacing={2} className={s.container}>
      <Grid item lg={4}>
        <IconTypography variant="body1" icon={<CelsiusIcon />}>
          {temperature}
        </IconTypography>
        <IconTypography variant="body1" icon={<HumidityIcon />}>
          {humidity}
        </IconTypography>
        <IconTypography variant="body1" icon={<CloudIcon />}>
          {cloud}
        </IconTypography>
      </Grid>
      <Grid item lg={4}>
        <img src={icon} alt="icon" />
      </Grid>
      <Grid item xl={4}>
        <IconTypography variant="body1" icon={<DesertIcon />}>
          {heatIndex}
        </IconTypography>
        <IconTypography variant="body1" icon={<PressureIcon />}>
          {pressure}
        </IconTypography>
        <IconTypography variant="body1" icon={<WindIcon />}>
          {windSpeed}
        </IconTypography>
      </Grid>
    </Grid>
  </Box>
);

export default WeatherInfo;
