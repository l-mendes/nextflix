import Layout from "../components/Layout";
import MovieRow from '../components/MovieRow';

export default function Home() {
  return (
    <Layout>
      <MovieRow title="Originais Netflix" fetchUrl="/originals" isLargeRow />

      <MovieRow title="Filmes em Destaque" fetchUrl="/trendings" />

      <MovieRow title="Top Filmes" fetchUrl="/top" />

      <MovieRow title="Drama" fetchUrl="/drama" />

      <MovieRow title="Comédia" fetchUrl="/comedy" />

      <MovieRow title="Terror" fetchUrl="/horror" />

      <MovieRow title="Documentários" fetchUrl="/documentary" />
    </Layout>
  )
}
