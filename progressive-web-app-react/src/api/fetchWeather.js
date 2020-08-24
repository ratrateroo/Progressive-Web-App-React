import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const  API_KEY = '38b0adfe83945b38e59aa0d4ca87362a';



export const fetchWeather =  async (query) => {
    const { data } = await axios.get(URL, {
        params: {

            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}

