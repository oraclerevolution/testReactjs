import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';

const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

  const getMoviesRequest = async() => {
    const url = `http://127.0.0.1:3000/movies`

    const response = await fetch(url)
    const responseJson = await response.json()

    setMovies(responseJson)
  }
	
  useEffect(() => {
    getMoviesRequest()
  },[])

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default Movie;