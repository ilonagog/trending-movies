import { useState } from 'react'
import ReactCardFlip from 'react-card-flip';




function MoviePage({ movie, onDeleteMovie, onUpdateMovie }) {
    const { id, title, year, poster, genre, star, about } = movie;
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

    function handleStars() {
        //console.log(movie)
        const newStarObj = { star: movie.star + 1 }
        //console.log(newStarObj)



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
                        <button className='star' onClick={handleStars}>⭐{star}</button>
                        <button className="info" onClick={handleFlip}>Info</button>
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