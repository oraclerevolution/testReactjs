import React from 'react';
import {Link } from "react-router-dom";

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
					<div className='image-container d-flex justify-content-start col-sm-3 moov' key={movie.id}>
						<img src={movie.image} className="movie-img" alt='img'></img>
						<p>
							<Link to={`/movie/${movie.id}`}>{movie.name}</Link>
						</p>
					</div>
			))}
		</>
	);
};

export default MovieList;