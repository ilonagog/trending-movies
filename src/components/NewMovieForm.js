import { useState } from 'react'

const NewMovieForm = ({ addNewMovie }) => {

    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [poster, setPoster] = useState("")
    const [genre, setGenre] = useState("")
    const [about, setAbout] = useState("")

    const resetForm = () => {
        setTitle("")
        setYear("")
        setPoster("")
        setGenre("")
        setAbout("")
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(" http://localhost:3000/movies", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                year: year,
                poster: poster,
                genre: genre,
                about: about
            })
        })
            .then((r) => r.json())
            .then((newMovie) => {
                addNewMovie(newMovie);
                resetForm()
            })
    }

    return (
        <section>
            <form className='form' onSubmit={handleSubmit} >
                <h3>Add New Movie</h3>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" title="title" value={title} onChange={(e) => setTitle(e.target.value)} />

                <label htmlFor="year">Year</label>
                <input type="text" id="year" year="year" value={year} onChange={(e) => setYear(e.target.value)} />

                <label htmlFor="poster">Poster</label>
                <input type="text" id="poster" poster="poster" value={poster} onChange={(e) => setPoster(e.target.value)} />

                <label htmlFor="genre">Genre</label>
                <input type="text" id="genre" genre="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />

                <label htmlFor="about">Synopsis</label>
                <input type="text" id="about" about="about" value={about} onChange={(e) => setAbout(e.target.value)} />

                <br></br>
                <button className="submit" type="submit">Add Movie</button>
            </form>
        </section>
    )
}
export default NewMovieForm