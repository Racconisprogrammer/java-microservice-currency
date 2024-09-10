import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Reducers
import authReducer from './reducers/auth-reducer';
import currencyReducer from './reducers/currency-reducer';
import accountReducer from './reducers/accounts-reducer';
import historyReducer from './reducers/history-reducer';

import rootSaga from './sagas/root-saga';

// Combine Reducers
const reducers = combineReducers({
    auth: authReducer,
    currency: currencyReducer,
    accounts: accountReducer,
    history: historyReducer
});

const appSagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createAppStore = (initialState = {}) => {
    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(appSagaMiddleware))
    );

    appSagaMiddleware.run(rootSaga);

    return store;
};

export default createAppStore;
