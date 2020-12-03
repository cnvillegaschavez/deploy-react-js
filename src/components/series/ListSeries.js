import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListGrid from '../shared/ListGrid';
import { findSeries } from '../../redux/actions/serieActions';

const ListMovies = () => {
    
    const dispatch = useDispatch();
    const  seriesReducers  = useSelector(state => state.SeriesReducers);
    const { series } = seriesReducers;

    useEffect(() => {
        if (series.length===0) {    
            dispatch(findSeries());
          }
      
    }, [dispatch, series])

    return <ListGrid list={series}/>;
}

export default ListMovies;