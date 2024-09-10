import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import browserHistory from './util/history';

import createAppStore from './store/store'
import { loadFromStorage } from './util/store-utils'

const initialState = loadFromStorage();

const store = createAppStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
