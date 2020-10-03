import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import Hello from './Hello';
//import Home from './Home';
//import Home from './LatihanCRUD2/Home'
//import BelajarHook from './Hook/belajarHook'
//import BelajaruseCallback from './Hook/useCallback'
//import BelajaruseMemo from './Hook/useMemo'
import App from './RouterDom/App'

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
