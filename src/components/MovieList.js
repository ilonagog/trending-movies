import React, { useState } from 'react';
import MoviePage from './MoviePage';

const MovieList = ({ movies, onDeleteMovie, onUpdateMovie }) => {

    const [search, setSearch] = useState("");

    const searchResults = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(search.toLowerCase())
    })

    const movieListPage = searchResults.map(movie =>
        <MoviePage movie={movie} key={movie.id} genre={movie.genre} onDeleteMovie={onDeleteMovie} onUpdateMovie={onUpdateMovie} />
    )

    const handleChange = (e) => setSearch(e.target.value)

    return (
        <div>
            <input type="text" id="search" placeholder="     Search....    🔍" onChange={handleChange} />
            <ul className='cards'>
                {movieListPage}
            </ul>
        </div>

    )
}
export default MovieList;