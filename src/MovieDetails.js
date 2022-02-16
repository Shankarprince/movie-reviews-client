import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function MovieDetails() {
    const [movie, setMovie] = useState({});
    const { id } = useParams();

    useEffect( () => {
        fetch("https://moviereviews-server.herokuapp.com/movies/"+id)
            .then(data => data.json())
            .then(mvs => setMovie(mvs))
    }, [id])

    return (
      <div>
        <iframe
          width="60%"
          height="445"
          src={movie.trailer}
          title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        <h1>{movie.name}</h1>
        <p>{movie.summary}</p>
      </div>
    );
  }