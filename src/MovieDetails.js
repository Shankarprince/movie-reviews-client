import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Container } from '@mui/material';

export function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("https://moviereviews-server.herokuapp.com/movies/" + id)
      .then(data => data.json())
      .then(mvs => setMovie(mvs))
  }, [id])

  const theme = useContext(ThemeContext);

  return (
    <div className={theme==="light" ? "movie-details-light" : "movie-details-dark"}>
      <Container>
        <iframe
          width="80%"
          height="500"
          src={movie.trailer}
          title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        <h1>{movie.name}</h1>
        <p>{movie.summary}</p>
      </Container>
    </div>
  );
}