import { Container } from '@mui/material';

import { WeatherWidget } from '@/app/features';
import { WidgetSize } from '@/app/enums';
import { axiosInstance } from '@/app/api/axios';
import { WeatherProvider } from '@/app/context';
import { getIP } from '@/app/utils/ip';

import styles from './page.module.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default async function Home() {
  let weatherData;

  try {
    const ip = await getIP();

    const { data } = await axiosInstance.get('/forecast.json', {
      params: { q: ip, days: 5 },
    });

    weatherData = data;
  } catch (e) {
    weatherData = { isError: true };
  }

  return (
    <WeatherProvider initialWeatherData={weatherData}>
      <Container className={styles.page}>
        <WeatherWidget size={WidgetSize.Small} />
        <WeatherWidget size={WidgetSize.Wide} />
        <WeatherWidget size={WidgetSize.Large} />
      </Container>
    </WeatherProvider>
  );
}
