import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import classNames from 'classnames';

import { CelsiusIcon, HumidityIcon, IconTypography } from '@/app/components';
import { WidgetSize } from '@/app/enums';
import { getFormattedDate } from '@/app/utils';

import s from './WeatherCard.module.scss';

interface WeatherCardProps {
  date: Date;
  icon: string;
  temperature: number;
  humidity: number;
  location: string;
  variant: Omit<WidgetSize, WidgetSize.Large>;
}

const WeatherCard: FC<WeatherCardProps> = ({
  date,
  icon,
  temperature,
  humidity,
  location,
  variant = WidgetSize.Small,
}) => (
  <Box className={classNames(s.card, s[variant])}>
    <Typography variant="h5" fontWeight="bold">
      {getFormattedDate(date)}
    </Typography>
    <Box className={s.info}>
      <img src={icon} alt="icon" />
      {variant === WidgetSize.Small && (
        <Box>
          <IconTypography variant="h6" icon={<CelsiusIcon />}>
            {temperature}
          </IconTypography>
          <IconTypography variant="h6" icon={<HumidityIcon />}>
            {humidity}
          </IconTypography>
        </Box>
      )}
    </Box>
    {variant === WidgetSize.Wide && (
      <IconTypography variant="h6" icon={<CelsiusIcon />}>
        {temperature}
      </IconTypography>
    )}
    <Typography
      variant="h6"
      fontStyle="italic"
      lineHeight="20px"
      textAlign="center"
      fontSize="18px"
    >
      {location}
    </Typography>
  </Box>
);

export default WeatherCard;
