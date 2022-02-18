import './App.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


export function AddMovie() {
    const history = useHistory();
    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");
    const [trailer, setTrailer] = useState("");

    const theme = useContext(ThemeContext);


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
        
        <div className={ theme === "light" ? "add-container-light" : "add-container-dark"}>
            <div className="inputs">
                <TextField id={ theme === "light" ? "filled-basic" : "filled-basic-dark"} label="Enter Movie Name" variant="filled" value={name} onChange={(event) => setName(event.target.value)} />
                <TextField id={ theme === "light" ? "filled-basic" : "filled-basic-dark"} label="Enter Movie Poster URL" variant="filled" value={poster} onChange={(event) => setPoster(event.target.value)} />
                <TextField id={ theme === "light" ? "filled-basic" : "filled-basic-dark"} label="Enter Movie Rating" variant="filled" value={rating} onChange={(event) => setRating(event.target.value)} />
                <TextField id={ theme === "light" ? "filled-basic" : "filled-basic-dark"} label="Enter Movie Summary" variant="filled" value={summary} onChange={(event) => setSummary(event.target.value)} />
                <TextField id={ theme === "light" ? "filled-basic" : "filled-basic-dark"} label="Enter Movie Trailer URL" variant="filled" value={trailer} onChange={(event) => setTrailer(event.target.value)} />
                <Button id={ theme === "light" ? "" : "add-button-dark"} onClick={ () => {addMovie()} } variant="contained">Add Movie</Button>
            </div>
        </div>
    );
}