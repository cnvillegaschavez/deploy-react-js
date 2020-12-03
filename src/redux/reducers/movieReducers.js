import { MOVIE_SEARCH, MOVIES_RESPONSE } from '../actions/movieActions';

export const MoviesReducers = (state = { movies: [], movieResponse: {} }, action) => {
    switch (action.type) {
        case MOVIE_SEARCH: 
            return { ...state,
                movies: action.movies
            };

            case MOVIES_RESPONSE:
                return { ...state,
                    movieResponse: state.movieResponse
                };

        default:
            {
                return state;
            }
            
    }
}