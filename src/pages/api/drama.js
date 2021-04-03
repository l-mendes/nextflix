import { apiKey } from '../../utils/tmdb';
import externalApi from '../../utils/externalApi';


export default async (req, res) => {
    const { data } = await externalApi.get(`/discover/tv?api_key=${apiKey}&language=pt-BR&with_genres=18`);

    res.status(200).json({results: data.results});
}