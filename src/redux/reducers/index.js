import { combineReducers } from 'redux';
import UserReducers from './userReducers';
import { MoviesReducers } from './movieReducers';
import { SeriesReducers } from './serieReducers';

const rootReducer = combineReducers({
    UserReducers,
    MoviesReducers,
    SeriesReducers
});

export default rootReducer;
