import './App.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export function EditMovie() {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);


    useEffect(() => {
        fetch("https://moviereviews-server.herokuapp.com/movies/" + id, {
            method: "GET"
        })
            .then(data => data.json())
            .then(mv => setMovie(mv))
    }, [id])

    return (
        movie ? <UpdateMovie movie={movie} /> : ""
    );
}


function UpdateMovie({ movie }) {
    const history = useHistory();
    const [name, setName] = useState(movie.name);
    const [poster, setPoster] = useState(movie.poster);
    const [rating, setRating] = useState(movie.rating);
    const [summary, setSummary] = useState(movie.summary);
    const [trailer, setTrailer] = useState(movie.trailer);

    const theme = useContext(ThemeContext);

    const addEditedMovie = () => {

        const updatedMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer
        }

        fetch("https://moviereviews-server.herokuapp.com/movies/" + movie._id, {
            method: "PUT",
            body: JSON.stringify(updatedMovie),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => history.push("/movielist"))
    }

    return (
        <div className={theme === "light" ? "add-container-light" : "add-container-dark"}>
            <div className="inputs">
                <TextField id={theme === "light" ? "filled-basic" : "filled-basic-dark"} label="Enter Movie Name" variant="filled" value={name} onChange={(event) => setName(event.target.value)} />
                <TextField id={theme === "light" ? "filled-basic" : "filled-basic-dark"} label="Enter Movie Poster URL" variant="filled" value={poster} onChange={(event) => setPoster(event.target.value)} />
                <TextField id={theme === "light" ? "filled-basic" : "filled-basic-dark"} label="Enter Movie Rating" variant="filled" value={rating} onChange={(event) => setRating(event.target.value)} />
                <TextField id={theme === "light" ? "filled-basic" : "filled-basic-dark"} label="Enter Movie Summary" variant="filled" value={summary} onChange={(event) => setSummary(event.target.value)} />
                <TextField id={theme === "light" ? "filled-basic" : "filled-basic-dark"} label="Enter Movie Trailer URL" variant="filled" value={trailer} onChange={(event) => setTrailer(event.target.value)} />
                <Button id={ theme === "light" ? "" : "add-button-dark"} onClick={() => { addEditedMovie() }} variant="contained">Save</Button>
            </div>
        </div>
    );

}