import axios from 'axios';

const WeatherService = {
    getRealtime: async (location) => {
      try {
const options = {
  method: 'GET',
  url: 'https://api.tomorrow.io/v4/weather/realtime',
  params: {location: location, apikey: 'Hb1L6VjSUJe8ZtYWQvx2UA58FE6LCMAc'},
  headers: {accept: 'application/json', 'accept-encoding': 'deflate, gzip, br'},
};
const response = await axios.request(options);
return response.data;
      }
      catch (error) {
      console.error('Error fetching realtime weather:', error);
      if (error.response) {
        console.error('API Response:', error.response.data);
        console.error('API Status:', error.response.status);
        console.error('API Headers:', error.response.headers);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      throw error;
      }
    }
  };
export default WeatherService;
 