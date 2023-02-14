import { useState } from 'react'
import MoviePage from './MoviePage'

function MovieList({ movies, onDeleteMovies }) {
    const [search, setSearch] = useState("");

    const searchResults = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(search.toLowerCase())
    })
    const movieListPage = searchResults.map(movie => <MoviePage key={movie.id} movie={movie} genre={movie.genre} onDeleteMovie={onDeleteMovies} />)
    const handleChange = (e) => setSearch(e.target.value)

    return (
        <div>
            <input type="text" id="search" placeholder="     Search....    🔍" onChange={handleChange} />
            {movieListPage}

        </div>
    )
}
export default MovieList