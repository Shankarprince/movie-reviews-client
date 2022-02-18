
import './App.css';
import { MovieDetails } from './MovieDetails.js';
import { EditMovie } from './EditMovie.js';
import { Switch, Route, Link } from 'react-router-dom';
import { MovieList } from './MovieList.js'
import { AddMovie } from './AddMovie.js';
import { Home } from './Home.js';
import { Error } from './error.js';
import { ThemeContext } from './ThemeContext';
import { useState } from 'react';



export default function App() {

  let [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    console.log(theme);
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <nav className={theme === "light" ? "nav-light" : "nav-dark"}>
          <Link to="/">Home</Link>
          <Link to="/addmovie">Add New Movie</Link>
          <Link to="/movielist">Movies List</Link>
          <p onClick={toggleTheme}>Theme</p>
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
    </ThemeContext.Provider>
  );
}