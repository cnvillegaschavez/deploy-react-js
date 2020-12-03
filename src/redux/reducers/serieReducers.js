import { SERIES_SEARCH, SERIES_RESPONSE } from '../actions/serieActions';

export const SeriesReducers = (state = { series: [], serieResponse: {} }, action) => {
    switch (action.type) {
        case SERIES_SEARCH: 
            return { ...state,
                series: action.series
            };

            case SERIES_RESPONSE:
                return { ...state,
                    serieResponse: state.serieResponse
                };

        default:
            {
                return state;
            }
            
    }
}