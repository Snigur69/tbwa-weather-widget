import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { getFormattedDate } from '@/app/utils';
import { CelsiusIcon, IconTypography } from '@/app/components';

import s from './WeatherItem.module.scss';

interface WeatherItemProps {
  date: Date;
  icon: string;
  temperature: string;
}

const WeatherItem: FC<WeatherItemProps> = ({ date, icon, temperature }) => (
  <Box className={s.item} textAlign="center">
    <Typography
      fontSize={16}
      variant="subtitle1"
      fontWeight="bold"
      fontStyle="italic"
    >
      {getFormattedDate(date)}
    </Typography>
    <img src={icon} alt="icon" />
    <IconTypography
      justifyContent="center"
      fontSize={16}
      variant="subtitle2"
      icon={<CelsiusIcon />}
    >
      {temperature}
    </IconTypography>
  </Box>
);

export default WeatherItem;
