import keyMirror from 'keymirror';

const datasetActionTypes = keyMirror({
    FETCH_DATASET: null,
    FETCH_DATASET_STARTED: null,
    FETCH_DATASET_ENDED: null,
    SAVE_DATASET: null,
});

export default datasetActionTypes;
