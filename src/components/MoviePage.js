import { useState } from 'react'
import ReactCardFlip from 'react-card-flip';

function MoviePage({ movie, onDeleteMovie }) {
    const { id, title, year, poster, genre, star, about } = movie
    const [isFlipped, setIsFlipped] = useState(false)
    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }

    const handleDeleteClick = () => {
        fetch(`http://localhost:3000/movies/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(() => onDeleteMovie(id))
    };


    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className='container'>
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
                        <button className='star' >⭐{star}</button>
                        <button className="info" onClick={handleFlip}>Info</button>
                        <button className="delete" onClick={handleDeleteClick} >🚮</button>
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
export default MoviePage