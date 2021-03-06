import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

// const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')): {}
const persistedState = sessionStorage.getItem('reduxState') ? JSON.parse(sessionStorage.getItem('reduxState')): {}

const store=createStore(reducers,persistedState);

store.subscribe(()=>{
  sessionStorage.setItem('reduxState', JSON.stringify(store.getState()))
})



ReactDOM.render( 
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));