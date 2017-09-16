import { handleActions } from 'redux-actions';
import { datasetActionTypes, uiActionTypes } from '../constants';

const {
    TOGGLE_SPINNER, SET_MODAL_MESSAGE,
    SET_SELECTED_DATASET, CLEAR_SELECTED_DATASET,
    ADD_FILTERS, CLEAR_FILTERS,
    SET_GRAPH_DATA, CLEAR_GRAPH_DATA,
} = uiActionTypes;

const uiReducers = handleActions({
    [TOGGLE_SPINNER]: (state, action) => ({ ...state, showSpinner: action.payload }),
    [SET_MODAL_MESSAGE]: (state, action) => ({ ...state, modalMessage: action.payload }),
    [SET_SELECTED_DATASET]: (state, action) => ({ ...state, selectedDataset: action.payload }),
    [CLEAR_SELECTED_DATASET]: (state, action) => ({ ...state, selectedDataset: {} }),
    [ADD_FILTERS]: (state, action) => ({ ...state, filters: state.filters.concat(action.payload) }),
    [CLEAR_FILTERS]: (state, action) => ({ ... state, filters: [] }),
    [SET_GRAPH_DATA]: (state, action) => ({ ...state, graphData: action.payload }),
    [CLEAR_GRAPH_DATA]: (state, action) => ({ ...state, graphData: [] }),
}, {});

export default uiReducers;
