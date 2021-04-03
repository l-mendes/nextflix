import axios from 'axios';

const apiBaseUrl = process.env.TMDB_BASE_URL ?? 'https://api.themoviedb.org/3';

const externalApi = axios.create({
    baseURL: `${apiBaseUrl}`
});

export default externalApi;