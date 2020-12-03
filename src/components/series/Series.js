import React from 'react';
import ListSeries from './ListSeries';
import BackLink  from '../shared/BackLink';

const Series = () => {
    return (
    <div className="container"> 
        <h3> <BackLink/> Series </h3>
        <ListSeries></ListSeries>
    </div>
    );
    
} 

export default Series;