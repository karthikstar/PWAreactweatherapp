import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '3c0ca0db1ea97ad2628febfb85f03680';

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY,

        }
    });
    return data;
}