import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import graphData from './graphData';

const middleware = [logger, thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    { ui:
        {
            filters: [
                { "reprcen_txt\r": "Máslo čerstvé [1 kg]\r" },
                { "uzemi_txt": "Hlavní město Praha" },
            ],
            graphData,
            showSpinner: false,
        },
    },
    composeEnhancers(applyMiddleware(...middleware))
);

window.store = store;

export default store;
