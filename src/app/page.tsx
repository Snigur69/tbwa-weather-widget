import { Box, Container, Typography } from '@mui/material';

import { WeatherWidget } from '@/app/features';
import { WidgetSize } from '@/app/enums';
import { WeatherProvider } from '@/app/context';
import { Search } from '@/app/components';
import { getIP, getWeather } from '@/app/services';

import styles from './page.module.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default async function Home() {
  let weatherData;

  try {
    const ip = await getIP();

    const { data } = await getWeather({ q: ip, days: 5 });

    weatherData = { isError: false, ...data };
  } catch (e) {
    weatherData = { isError: true };
  }

  return (
    <WeatherProvider initialWeatherData={weatherData}>
      <Box padding="20px">
        <Container className={styles.page}>
          <Typography variant="h5">
            Enter city name, coordinates or IP
          </Typography>
          <Search />
          <WeatherWidget size={WidgetSize.Small} />
          <WeatherWidget size={WidgetSize.Wide} />
          <WeatherWidget size={WidgetSize.Large} />
        </Container>
      </Box>
    </WeatherProvider>
  );
}
