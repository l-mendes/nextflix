import axios from 'axios';

const appBaseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL ?? 'http://localhost:3000';

const api = axios.create({
    baseURL: `${appBaseUrl}/api`
});

export default api;