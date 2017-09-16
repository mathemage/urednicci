import { createAction } from 'redux-actions';
import { createActionThunk } from 'redux-thunk-actions';
import { datasetActionTypes } from '../constants';
import { getJsonFromCsv } from '../utils';

const { FETCH_DATASET, SAVE_DATASET } = datasetActionTypes;

const fetchDataset = createActionThunk(FETCH_DATASET, (pathToCsv) => getJsonFromCsv(pathToCsv));
const saveDataset = createAction(SAVE_DATASET, (fileName, dataset) => ({ fileName, dataset }));

export default {
    fetchDataset,
    saveDataset,
};
