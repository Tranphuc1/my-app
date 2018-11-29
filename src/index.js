import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import appReducers from './components/Products/Reducer/index';
import {Provider} from 'react-redux';
const store = createStore(
    appReducers
);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
serviceWorker.unregister();
