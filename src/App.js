import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/Login';
import SignUp from './components/SignUp';
import Movie from './components/Movie';
import { RequireToken } from './middleware/auth';
import MovieDetails from './components/MovieDetails';

const App = () => {

	return (
		<BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route 
          path='/movie' 
          element={
            <RequireToken>
              <Movie />
            </RequireToken>
          } />
        <Route path='/register' element={<SignUp/>} />
        <Route path="/movie/:movieId" element={
          <RequireToken>
            <MovieDetails />
          </RequireToken>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
	);
};

export default App;