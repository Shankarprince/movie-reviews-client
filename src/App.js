
import './App.css';
import { MovieDetails } from './MovieDetails.js';
import { EditMovie } from './EditMovie.js';
import { Link, Switch, Route } from 'react-router-dom';
import { MovieList } from './MovieList.js'
import { AddMovie } from './AddMovie.js';
import { Home } from './Home.js';
import { Error } from './error.js';


export default function App() {

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/addmovie">Add New Movie</Link>
        <Link to="/movielist">Movies List</Link>
      </nav>
      <Switch>
        <Route path="/addmovie"><AddMovie /></Route>
        <Route path="/films">Redirect to="/movies"</Route>
        <Route path="/movielist/edit/:id"><EditMovie /></Route>
        <Route path="/movielist/:id"><MovieDetails /></Route>
        <Route path="/movielist"><MovieList /></Route>
        <Route exact path="/"><Home /></Route>
        <Route path="**"><Error /></Route>
      </Switch>
    </div>
  );
}