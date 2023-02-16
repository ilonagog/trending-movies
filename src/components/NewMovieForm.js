import { useState } from 'react'

function NewMovieForm({ addNewMovie }) {
    const [newTitle, setNewTitle] = useState("")
    const [newYear, setNewYear] = useState("")
    const [newPoster, setNewPoster] = useState("")
    const [newGenre, setNewGenre] = useState("")
    const [newAbout, setNewAbout] = useState("")

    const resetForm = () => {
        setNewTitle("")
        setNewYear("")
        setNewPoster("")
        setNewGenre("")
        setNewAbout("")
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const newMovie = {
            title: newTitle,
            year: newYear,
            poster: newPoster,
            genre: newGenre,
            about: newAbout
        }

        fetch(" http://localhost:3000/movies", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newMovie)
        })
            .then((r) => r.json())
            .then((movie) => {
                addNewMovie(movie);
                resetForm()
            })
    }

    return (
        <section>
            <form className='form' onSubmit={handleSubmit} >
                <h3>Add New Movie</h3>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" title="title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />

                <label htmlFor="year">Year</label>
                <input type="text" id="year" year="year" value={newYear} onChange={(e) => setNewYear(e.target.value)} />

                <label htmlFor="poster">Poster</label>
                <input type="text" id="poster" poster="poster" value={newPoster} onChange={(e) => setNewPoster(e.target.value)} />

                <label htmlFor="genre">Genre</label>
                <input type="text" id="genre" genre="genre" value={newGenre} onChange={(e) => setNewGenre(e.target.value)} />

                <label htmlFor="about">Info</label>
                <input type="text" id="about" about="about" value={newAbout} onChange={(e) => setNewAbout(e.target.value)} />
                <br></br>

                <button className="submit" type="submit">Add Movie</button>
            </form>
        </section>
    )
}
export default NewMovieForm