import React from 'react'
import trailerVideos from './Videos'

const Home = () => {
    const handleVideos = trailerVideos.map(video =>

        <iframe className="videos" key={video.id} src={video.embedUrl} title={video.title} allowFullScreen frameBorder="0"></iframe>

    )

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

            <div className='videos' >
                {handleVideos}

            </div>
        </div>

    );

}
export default Home