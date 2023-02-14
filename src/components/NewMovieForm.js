import { useState } from 'react'

const NewMovieForm = () => {
    const [newTitle, setNewTitle] = useState("")
    const [newYear, setNewYear] = useState("")
    const [newPoster, setNewPoster] = useState("")
    const [newGenre, setNewGenre] = useState("")
    const [newAbout, setNewAbout] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()

        // const newMovie = {
        //     title: newTitle,
        //     year: newYear,
        //     poster: newPoster,
        //     genre: newGenre,
        //     about: newAbout

        // }
        // console.log(newMovie)
    }

    return (
        <section>
            <form className='form' onSubmit={handleSubmit} >
                <h3>Add New Movie</h3>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" title="title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />


                <label htmlFor="year">Year</label>
                <input type="" id="year" year="year" value={newYear} onChange={(e) => setNewYear(e.target.value)} />

                <label htmlFor="poster">Poster</label>
                <input type="" id="poster" poster="poster" value={newPoster} onChange={(e) => setNewPoster(e.target.value)} />

                <label htmlFor="genre">Genre</label>
                <input type="" id="genre" genre="genre" value={newGenre} onChange={(e) => setNewGenre(e.target.value)} />

                <label htmlFor="about">Info</label>
                <input type="" id="about" about="about" value={newAbout} onChange={(e) => setNewAbout(e.target.value)} />
                <br></br>

                <button className="submit" type="submit">Add Movie</button>

            </form>
        </section>
    )
}
export default NewMovieForm