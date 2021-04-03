import { useEffect, useRef, useState } from 'react';
import api from '../../utils/internalApi';
import styles from '../../styles/components/MovieRow.module.css'
import { apiImageUrl } from '../../utils/tmdb';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const MovieRow = ({title, fetchUrl, isLargeRow}) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const moviesRef = useRef(null);

  const scroll = (scrollOffset) => {
    moviesRef.current.scrollLeft += scrollOffset;
  };

  useEffect(() => {
    async function fetchMovies() {
      const { data } = await api.get(fetchUrl);

      setMovies(data.results);
      setIsLoading(false);
    }

    fetchMovies();
  }, [fetchUrl]);

  return (
    <>
      {isLoading ? (
        <div className={styles.container}>
          <h2>{title}</h2>

          <div className={styles.moviesRow}>

            <h3>Carregando...</h3>

          </div>
        </div>
      ) : (
      <div className={styles.container}>
        <h2>{title}</h2>
        <div className={styles.moviesRow} ref={moviesRef}>
          <button 
            className={`${styles.scrollButton} ${styles.scrollLeftButton} ${isLargeRow && styles.largeScrollButton}`}
            onClick={() => scroll(isLargeRow ? -182 : - 280)}
          >
            <ArrowBackIosIcon />
          </button>
          {movies.map(movie => (
            <img
              key={movie.id}
              className={`${styles.movie} ${isLargeRow && styles.largeMovie}`}
              src={`${apiImageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
          ))}
          <button 
            className={`${styles.scrollButton} ${styles.scrollRightButton} ${isLargeRow && styles.largeScrollButton}`}
            onClick={() => scroll(isLargeRow ? 182 : 280)}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
      )}
    </>
  );
}

export default MovieRow;