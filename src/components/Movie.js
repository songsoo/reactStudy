import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
function Movie({medium_cover_image, title, summary, genres}){
    return(
        <div>
            <img src={medium_cover_image} alt={title}></img>
            <a href=""><h3>"{title}"</h3></a>
            <p>{summary}</p>   
            <ul>
                {genres.map((genre)=>
                    <li key={genre}>{genre}</li>
                )}
            </ul>   
        </div>
    )
}

Movie.propTypes={
    coverImg : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired,

}
export default Movie;