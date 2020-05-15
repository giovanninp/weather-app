import axios from "axios";

export const api_key = "a462c6aabe9ce3bbb28162fb2564dbd4";

export default axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5/weather",
    timeout:1000
});