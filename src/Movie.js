// Creating Msg function component to display movie name and other data values into the browser by creating DOM virtually.
// All data values are passed as an argument.

import { useState } from 'react';
import { Counter } from './Counter.js';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useHistory } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';

export function Movie({ name, poster, rating, summary, id, editButton, deleteButton }) {
  //  let styles = { color : "crimson", fontWeight : "bold" };
  let styles = { color: rating >= 8 ? "green" : "red", fontWeight: "bold" }
  const [show, setShow] = useState(true);
  let summaryStyles = { display: show ? "block" : "none" }
  const history = useHistory();
  return (
    <Card>
      <CardContent>
        <div className="movie-container">
          <h2 className="movie-name">{name} </h2>
          <img className="movie-poster" src={poster} alt={name} />
          <h3 className="movie-rating" style={styles} >{rating}</h3>
          <Button
            onClick={() => setShow(!show)}
            variant="contained"
          >
            {show ? "Hide" : "Show"}
          </Button>
          <IconButton
            aria-label="info"
            onClick={() => history.push("/movielist/" + id)}
          >
            <InfoIcon />
          </IconButton>
          <IconButton
            aria-label="show hide"
            onClick={() => setShow(!show)}
            className="show-hide-button"
          >
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <p style={summaryStyles} className="movie-summary">{summary}</p>
        </div>
      </CardContent>
      <CardActions>
        <Counter /> {editButton} {deleteButton}
      </CardActions>
    </Card>
  );
}