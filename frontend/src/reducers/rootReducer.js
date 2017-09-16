import { combineReducers } from 'redux';
import datesetReducers from './datesetReducers';
import uiReducers from './uiReducers';

const rootReducer = combineReducers({
    datasets: datesetReducers,
    ui: uiReducers,
});

export default rootReducer;
