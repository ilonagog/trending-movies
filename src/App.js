
import './App.css';
import Home from './components/Home';
import { useState, useEffect } from "react"
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import Genres from './components/Genres';
import NewMovieForm from './components/NewMovieForm';

function App() {
  const [selectedGenre, setSelectedGenre] = useState("All")
  const [genres, setGenres] = useState([])
  const [movies, setMovies] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  // console.log(genres)
  //console.log(movies)



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
  //console.log(genres)


  const handleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const addNewMovie = (newMovie) => {
    setMovies((movie) => [...movie, newMovie])
  }
  const onDeleteMovie = (id) => {
    // console.log(id)
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
  //console.log(movies)

  const moviesFilteredByGenres = movies.filter(movie => movie.genre === selectedGenre || selectedGenre === "All")

  return (

    <div className={isDarkMode ? "App" : "App light"}>
      <NavBar isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<>
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
