import React from 'react'
import MoviePage from './MoviePage'

function MovieList({ movies }) {

    const movieListPage = movies.map(movie => <MoviePage key={movie.id} movie={movie} />)
    return (
        <div>
            {movieListPage}

        </div>
    )
}
export default MovieList