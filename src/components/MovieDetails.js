import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import {fetchToken} from '../middleware/auth'

const MovieDetails = () => {

    const [movie, setMovie] = useState([])
    const {movieId} = useParams()
    const [token, setToken] = useState(0)

    const getMovieDetails = async() => {
        const url = `http://127.0.0.1:3000/movies/movie/${movieId}`
    
        const response = await fetch(url)
        const responseJson = await response.json()
        setMovie(responseJson)
        
    }

    //chercher
    const showBtn = () => {
        if (token > 0) {
            return(
                <button className='btn btn-warning'>Regardez le film</button>
            )
        }else{
            return(
                <button className='btn btn-primary' onClick={bookAMovie()}>Louez le film</button>
            ) 
        }
    }
    
    useEffect(() => {
        getMovieDetails()
      },[])
    
    return(
        <div>
            {
                movie.map((movie, index) => (
                    <div key={index} className="justify-content-center">
                        <img src={movie.image} className="img_detail" alt='img' />
                        <h3>Titre: {movie.name}</h3>
                        <p>Auteur: {movie.author}</p>
                        <p>Date de sortie: {movie.date_sortie}</p>
                        
                        {
                            showBtn()
                        }
                        
                    </div>
                ))
            }
            
        </div>
    )
}



export default MovieDetails