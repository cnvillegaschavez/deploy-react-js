import React from 'react';
import ListMovies from './ListMovies';
import BackLink  from '../shared/BackLink';

const Movies = () => {
       
    return (
    <div className="container">
        
        <h3> <BackLink/> Películas </h3>
        <ListMovies></ListMovies>
    </div>
    );
    
} 

export default Movies;