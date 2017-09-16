import keyMirror from 'keymirror';

const uiActionTypes = keyMirror({
    TOGGLE_SPINNER: null,
    SET_MODAL_MESSAGE: null,
    SET_SELECTED_DATASET: null, CLEAR_SELECTED_DATASET: null,
    ADD_FILTERS: null, CLEAR_FILTERS: null,
    SET_GRAPH_DATA: null, CLEAR_GRAPH_DATA: null,
});

export default uiActionTypes;
