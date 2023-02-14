
import './App.css';
import Home from './components/Home';
import { useState, useEffect } from "react"
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import Genres from './components/Genres';
import NewMovieForm from './components/NewMovieForm';

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

  const onDeleteMovies = (id) => {
    setMovies(prevMovies => {
      const filteredArray = prevMovies.filter(movie => movie.id !== id)
      return filteredArray
    })
  }
  const addNewMovie = (newMovie) => {
    setMovies((movie) => [...movie, newMovie])

  }
  function handleUpdateMovie(updatedMovie) {
    const updatedArray = movies.map((movie) => movie.id === updatedMovie ? updatedMovie : movie)
    setMovies(updatedArray)
  }



  return (

    <div className={isDarkMode ? "App" : "App light"}>
      <NavBar isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList movies={movies} onDeleteMovies={onDeleteMovies} onUpdateMovie={handleUpdateMovie} />} />
        <Route path="/genres" element={<Genres genres={genres} />} />
        <Route path="/movie/new" element={<NewMovieForm addNewMovie={addNewMovie} />} />
      </Routes>
    </div>
  );
}

export default App;
