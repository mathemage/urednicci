import { adjust, compose, flatten, map, replace, split, splitAt, test, zipObj } from 'ramda';
import getFileName from './getFileName';
import store from '../store';
import { datasetActions, uiActions } from '../actions';

export default (response) => {
    store.dispatch(uiActions.setModalMessage('Spracování dat...'));
    const [keys, valuesList] =
        compose(adjust(flatten, 0), splitAt(1), map(split(',')), map(replace(/"/g, '')), split('\n'))(response.data);
    const fileName = getFileName(response.config.url);
    const dataset = map((values) => {
        const typedValues = values.map((value) => {
            if (!isNaN(value)) {
                return parseFloat(value);
            } else if (test(/(\d{4})-(\d{2})-(\d{2})/, value)) {
                return new Date(value);
            } else {
                return value;
            }
        });
        return zipObj(keys, typedValues);
    }, valuesList);
    store.dispatch(uiActions.setModalMessage('Uložení dat...'));
    store.dispatch(datasetActions.saveDataset(fileName, dataset));
    store.dispatch(uiActions.setSelectedDataset({ fileName, dataset }));
    store.dispatch(uiActions.setModalMessage('Hotovo.'));
    store.dispatch(uiActions.toggleSpinner(false));
};
