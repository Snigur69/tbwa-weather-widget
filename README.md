
# Weather Widget - Test Task for TBWA

## How to Run Locally

To run the application locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies:**

   Navigate to the project directory and run:

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root of the application and add the following content:

   ```bash
    BASE_URL=http://api.weatherapi.com/v1
    API_KEY=adc3433d87814d24bef101020241010
    NEXT_PUBLIC_BASE_URL=http://api.weatherapi.com/v1
    NEXT_PUBLIC_API_KEY=adc3433d87814d24bef101020241010
   ```


4. **Run the application:**

   Start the development server by running:

   ```bash
   npm run dev
   ```

## Notes:

The application retrieves the client's IP address to determine their location for weather data. However, this functionality will not work correctly when running the app locally, as the IPv6 address for `localhost` is `::1`. As a result, the initial location may be inaccurate.
Deployed add won't have such problem and will work as expected.

To fetch weather data for your actual location, you can initiate a search with an empty input field.
