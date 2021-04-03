import { apiKey } from '../../utils/tmdb';
import externalApi from '../../utils/externalApi';


export default async (req, res) => {
    const { data } = await externalApi.get(`/trending/all/week?api_key=${apiKey}&language=pt-BR`);

    res.status(200).json({results: data.results});
}