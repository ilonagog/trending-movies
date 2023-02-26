import { useState } from 'react'
import ReactCardFlip from 'react-card-flip';




const MoviePage = ({ movie, onDeleteMovie, onUpdateMovie }) => {
    const { id, title, year, poster, genre, heart, about } = movie;
    const [isFlipped, setIsFlipped] = useState(false)
    const [favorite, setFavorite] = useState(false)

    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }

    const handleDeleteClick = () => {
        fetch(`http://localhost:3000/movies/${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then(() => onDeleteMovie(id))
    };

    function handleHearts() {

        const newStarObj = { heart: movie.heart + 1 }

        fetch(`http://localhost:3000/movies/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newStarObj),
        })
            .then((res) => res.json())
            .then((updatedMovie) => { onUpdateMovie(updatedMovie) });

    }


    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="ui three column grid">
                <li className='card'>
                    <figure className="image">
                        <img src={poster} alt={poster} />
                    </figure>
                    <section className="details">
                        <h3>{title}</h3>
                        <p>{year}</p>
                        <p>{genre}</p>
                    </section>
                    <footer className='footer'>
                        {favorite ? (<button className='favorite active' onClick={() => setFavorite(false)}>★</button>) :
                            (<button className='favorite' onClick={() => setFavorite(true)}>☆</button>)}
                        <button className='heart' onClick={handleHearts}>❤️{heart}</button>
                        <button className="info" onClick={handleFlip}>Synopsis</button>
                        <button className="delete" onClick={handleDeleteClick}>🚮</button>
                    </footer>
                </li>
            </div>
            <div>
                <button onClick={handleFlip}>Back</button>
                <br />
                <p>{about}</p>
            </div>
        </ReactCardFlip>
    )
}

export default MoviePage;