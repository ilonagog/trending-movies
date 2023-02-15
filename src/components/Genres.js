import React from 'react'

function Genres({ genres, selectedGenre, setSelectedGenre }) {
    const filteredButtons = genres.map((genre) => (


        <button
            key={genre}
            onClick={(e) => setSelectedGenre(genre)}
            className={genre === selectedGenre ? "selected" : null}>
            {genre}
        </button>

    ));
    return (
        <div>
            <section >
                <h2>Genres</h2>
                <div className="filter" >

                    {filteredButtons}

                </div>
            </section>

        </div>
    )
}
export default Genres;