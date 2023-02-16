
import './App.css';
import Home from './components/Home';
import { useState, useEffect } from "react"
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import Genres from './components/Genres';
import NewMovieForm from './components/NewMovieForm';
import PostersSlide from './components/PostersSlide';

function App() {
  const [selectedGenre, setSelectedGenre] = useState("All")
  const [genres, setGenres] = useState([])
  const [movies, setMovies] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    fetch(" http://localhost:3000/movies")
      .then((r) => r.json())
      .then(setMovies)
  }, []);

  useEffect(() => {
    fetch(" http://localhost:3000/genres")
      .then(resp => resp.json())
      .then(data => setGenres(data))
  }, [])

  const handleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const addNewMovie = (newMovie) => {
    setMovies((movie) => [...movie, newMovie])
  }
  const onDeleteMovie = (id) => {
    setMovies(prevMovies => {
      const filteredArray = prevMovies.filter(movie => movie.id !== id)
      return filteredArray
    })
  }

  function handleUpdateMovie(updatedStarMovie) {
    console.log(updatedStarMovie)
    const updatedArray = movies.map((movie) => movie.id === updatedStarMovie.id ? updatedStarMovie : movie);
    setMovies(updatedArray)
    console.log(updatedArray)
  }

  const moviesFilteredByGenres = movies.filter(movie => movie.genre === selectedGenre || selectedGenre === "All")

  return (

    <div className={isDarkMode ? "App" : "App light"}>
      <NavBar isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
      <Routes>
        <Route path="/" element={
          <>
            <PostersSlide />
            <Home />
          </>
        } />
        <Route path="/movies" element={
          <>
            <Genres genres={genres} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
            <MovieList movies={moviesFilteredByGenres} onDeleteMovie={onDeleteMovie} onUpdateMovie={handleUpdateMovie} />
          </>
        } />
        <Route path="/movie/new" element={<NewMovieForm addNewMovie={addNewMovie} />} />
      </Routes>
    </div>
  );
}

export default App;
