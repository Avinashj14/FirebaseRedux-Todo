//Index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { setDocId, setUid, setUsername } from './actions/authActions';


const storedUid = localStorage.getItem('uid');
const storedDocId = localStorage.getItem('docId');
const storedUsername = localStorage.getItem('username');


if (storedUid && storedDocId && storedUsername) {
  store.dispatch(setUid(storedUid));
  store.dispatch(setDocId(storedDocId));
  store.dispatch(setUsername(storedUsername));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
