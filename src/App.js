
import './App.css';
import Home from './components/Home';
import { useState, useEffect } from "react"
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import Genres from './components/Genres';
import NewMovieForm from './components/NewMovieForm';
import PostersSlide from './components/PostersSlide';
// import Test2 from './components/Test2';
// //import Test from "./components/Test"
// import Ilona from './components/Ilona';

function App() {
  const [selectedGenre, setSelectedGenre] = useState("All")
  const [genres, setGenres] = useState([])
  const [movies, setMovies] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    fetch(" http://localhost:3000/movies")
      .then((r) => r.json())
      .then((data) => setMovies(data))

    fetch(" http://localhost:3000/genres")
      .then((resp) => resp.json())
      .then((data) => setGenres(data))
  }, []);

  // useEffect(() => {
  // }, [])

  const handleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const addNewMovie = (newMovie) => {
    setMovies((moviesObj) => [...moviesObj, newMovie])
  }
  const onDeleteMovie = (id) => {
    setMovies(prevMovies => {
      const filteredArray = prevMovies.filter((movie) => movie.id !== id)
      return filteredArray
    })
  }

  function handleUpdateMovie(updatedHeartMovie) {
    const updatedArray = movies.map((movie) => movie.id === updatedHeartMovie.id ? updatedHeartMovie : movie);
    setMovies(updatedArray)
  }
  const moviesFilteredByGenres = movies.filter((movie) => movie.genre === selectedGenre || selectedGenre === "All")

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <NavBar isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
      {/* <Test2 /> */}
      {/* <Test /> */}
      <Routes>
        <Route exact path="/" element={
          <>
            <PostersSlide />
            <Home age={21} />
          </>
        } />
        <Route exact path="/movies" element={
          <>
            <Genres genres={genres} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
            <MovieList movies={moviesFilteredByGenres} onDeleteMovie={onDeleteMovie} onUpdateMovie={handleUpdateMovie} />
          </>
        } />
        <Route exact path="/movie/new" element={<NewMovieForm addNewMovie={addNewMovie} />} />
        {/* <Route exact path="/ilona" element={<Ilona />} /> */}

      </Routes>
    </div>
  );
}

export default App;
