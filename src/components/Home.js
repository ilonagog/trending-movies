import React from 'react'
import trailerVideos from './Videos'

const Home = () => {
    const handleVideos = trailerVideos.map(video => {
        return (
            <div className="container">
                <iframe className="videos" src={video.embedUrl} title={video.title} id={video.id} allowFullScreen frameBorder="0"></iframe>
            </div>
        )
    })

    return (
        <div className='videoContainer'>
            <div style={{ margin: "1rem 0" }}>
                <a className="button" href="/movies">
                    View All Movies Here
                    <br></br>
                </a>
                <br></br>
                <h3 style={{ fontSize: "3rem" }}>Upcomming Movie Trailers : </h3>
            </div>
            <br></br>
            <div>
                <div className='videos' >
                    {handleVideos}
                </div>
            </div>
        </div>

    );

}
export default Home