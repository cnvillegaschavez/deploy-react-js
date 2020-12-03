import { getAllSeries } from '../../services/CatalogueService'
export const SERIES_SEARCH = 'SERIES_SEARCH';

const internalLoad = (series) => {
    return {
        type: SERIES_SEARCH,
        series
    }
}

export const SERIES_RESPONSE = 'SERIES_RESPONSE';

export const internalResponse = (serieResponse) => {
    return {
        type: SERIES_RESPONSE,
        serieResponse
    }
}

export const cleanReponse = () => {
    return (dispatch) => {
        dispatch(internalResponse({}));
    }
}


export const findSeries = () => {
    return (dispatch) => {
        getAllSeries().then(json => {
            dispatch(internalLoad(json));
            dispatch(internalResponse({ ok: 'ok'}));
        } );
    }
};


