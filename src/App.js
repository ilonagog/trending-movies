
import './App.css';
import Home from './components/Home';
import { useState, useEffect } from "react"
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import Genres from './components/Genres';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [genres, setGenres] = useState([])
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:3000/movies")
      .then((r) => r.json())
      .then(setMovies)
  }, []);
  console.log(movies)

  useEffect(() => {
    fetch(" http://localhost:3000/genres")
      .then(resp => resp.json())
      .then(data => setGenres(data))
  }, [])
  //console.log(genres)



  const handleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (

    <div className={isDarkMode ? "App" : "App light"}>
      <NavBar isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
      <MovieList movies={movies} />
      <Home />
      <Genres genres={genres} />


    </div>
  );
}

export default App;
