import './App.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';


export function AddMovie() {
    const history = useHistory();
    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");
    const [trailer, setTrailer] = useState("");

      const addMovie = () => {

        const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer
        }

        console.log(newMovie);

        fetch("https://moviereviews-server.herokuapp.com/movies",{
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: {
                "Content-Type" : "application/json"
            }
        }).then( () => history.push("./movielist"))

      }
    
    return (
        
        <div>
            <div className="inputs">
                <TextField id="filled-basic" label="Enter Movie Name" variant="filled" value={name} onChange={(event) => setName(event.target.value)} />
                <TextField id="filled-basic" label="Enter Movie Poster URL" variant="filled" value={poster} onChange={(event) => setPoster(event.target.value)} />
                <TextField id="filled-basic" label="Enter Movie Rating" variant="filled" value={rating} onChange={(event) => setRating(event.target.value)} />
                <TextField id="filled-basic" label="Enter Movie Summary" variant="filled" value={summary} onChange={(event) => setSummary(event.target.value)} />
                <TextField id="filled-basic" label="Enter Movie Trailer URL" variant="filled" value={trailer} onChange={(event) => setTrailer(event.target.value)} />
                <Button onClick={ () => {addMovie()} } variant="contained">Add Movie</Button>
            </div>
        </div>
    );
}