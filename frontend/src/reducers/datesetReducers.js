import { handleActions } from 'redux-actions';
import { datasetActionTypes } from '../constants';

const { SAVE_DATASET } = datasetActionTypes;

const datasetReducers = handleActions({
    [SAVE_DATASET]: (state, action) => ({ ...state, [action.payload.fileName]: action.payload.dataset }),
}, {});

export default datasetReducers;
