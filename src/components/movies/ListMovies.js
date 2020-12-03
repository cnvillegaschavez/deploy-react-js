import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findMovies } from '../../redux/actions/movieActions';
import ListGrid from '../shared/ListGrid';

const ListMovies = () => {
    
    const dispatch = useDispatch();
    const  moviesReducers  = useSelector(state => state.MoviesReducers);
    const { movies } = moviesReducers;

    useEffect(() => {
        if (movies.length===0) {    
          dispatch(findMovies());
        }
      
    }, [dispatch, movies])

    return <ListGrid list={movies}/>;
}

export default ListMovies;