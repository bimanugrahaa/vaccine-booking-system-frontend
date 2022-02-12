import axios from "axios";

export default async function News() {
    const BASE_URL = "https://newsdata.io/api/1/news";
    const query = "covid%20OR%20covid19%20OR%20corona%20OR%20covid-19"
    const language = "en"
    const API_KEY = "pub_1318e2d3bd46a9597bcfa0903c6cbed76bcb"

    const value = {
        status: "",
        response: "",
    }

    const config = {
        method: 'get',
        url: `${BASE_URL}?apikey=${API_KEY}&language=${language}&q=${query}`,
    };

    await axios(config)
        .then(response => {
            value.status = "success"
            value.response = response.data.results
            console.log(response)
        })

        .catch((error) => {
            console.error('There was an error!', error);

            const status = error.response.status;
            value.status = status
            value.response = error
        });

        return value
}