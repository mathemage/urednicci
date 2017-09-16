import axios from 'axios';
import { uiActions } from '../actions';
import store from '../store';
import csvToJson from './csvToJson';

export default (pathToCsv) => {
    store.dispatch(uiActions.toggleSpinner(true));
    store.dispatch(uiActions.setModalMessage('Načítání dat...'));
    axios.get(pathToCsv).then(csvToJson);
};
