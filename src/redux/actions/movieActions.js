import { getAllMovies } from '../../services/CatalogueService'
export const MOVIE_SEARCH = 'MOVIE_SEARCH';

const internalLoad = (movies) => {
    return {
        type: MOVIE_SEARCH,
        movies
    }
}

export const MOVIES_RESPONSE = 'MOVIES_RESPONSE';

export const internalResponse = (moviesResponse) => {
    return {
        type: MOVIES_RESPONSE,
        moviesResponse
    }
}

export const cleanReponse = () => {
    return (dispatch) => {
        dispatch(internalResponse({}));
    }
}


export const findMovies = () => {
    return (dispatch) => {
        getAllMovies().then(json => {
            dispatch(internalLoad(json));
            dispatch(internalResponse({ ok: 'ok'}));
        } );
    }
};


