import { createAction } from 'redux-actions';
import { uiActionTypes } from '../constants';

const {
    TOGGLE_SPINNER, SET_MODAL_MESSAGE,
    SET_SELECTED_DATASET, CLEAR_SELECTED_DATASET,
    ADD_FILTERS, CLEAR_FILTERS,
    SET_GRAPH_DATA, CLEAR_GRAPH_DATA,
} = uiActionTypes;

const toggleSpinner = createAction(TOGGLE_SPINNER);
const setModalMessage = createAction(SET_MODAL_MESSAGE);
const setSelectedDataset = createAction(SET_SELECTED_DATASET);
const clearSelectedDataset = createAction(CLEAR_SELECTED_DATASET);
const addFilters = createAction(ADD_FILTERS);
const clearFilters = createAction(CLEAR_FILTERS);
const setGraphData = createAction(SET_GRAPH_DATA);
const clearGraphData = createAction(CLEAR_GRAPH_DATA);

export default {
    toggleSpinner, setModalMessage,
    setSelectedDataset, clearSelectedDataset,
    addFilters, clearFilters,
    setGraphData, clearGraphData,
};
