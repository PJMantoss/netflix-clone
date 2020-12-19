import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyles } from './globalStyles';
import { FirebaseContext } from './context/firebase';
import reportWebVitals from './reportWebVitals';

const config = {
  apiKey: '',
  authDomain: '',
  
}

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);

reportWebVitals();
