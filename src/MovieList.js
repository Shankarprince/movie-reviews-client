import { Movie } from './Movie.js';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function MovieList() {

    const [movies, setMovies] = useState([]);
    const history = useHistory();
    
    const getMovies = () => {
        fetch("https://moviereviews-server.herokuapp.com/movies")
            .then(data => data.json())
            .then(mvs => setMovies(mvs))
    }

    useEffect(getMovies, []);

    const deleteMovie = (id) => {
        console.log(id);
        fetch("https://moviereviews-server.herokuapp.com/movies/" + id, { method: "DELETE" })
            .then(getMovies)
    }

    return (
        <div className="app">
            {/* using map function to iterate the array and passing movie name and other values to Msg component */}
            {movies.map(({_id, name, poster, rating, summary}) =>
                <Movie
                    key={_id}
                    id={_id}
                    name={name}
                    poster={poster}
                    rating={rating}
                    summary={summary}
                    editButton={
                        <IconButton
                            onClick={() => history.push("/movielist/edit/" + _id)}
                            aria-label="edit movie"
                            color="secondary">
                            <EditIcon />
                        </IconButton>}
                    deleteButton={
                        <IconButton
                            onClick={() => deleteMovie(_id)}
                            aria-label="delete movie"
                            color="error"
                        >
                            <DeleteIcon />
                        </IconButton>}
                />)
            }
        </div>
    );
}