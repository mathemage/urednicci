import store from '../store';

export default (datasetName) => store.getState().datasets[datasetName];
