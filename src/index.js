import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyles } from './globalStyles';
import { FirebaseContext } from './context/firebase';

import { seedDatabase } from './seed';

const config = {
  apiKey: "AIzaSyCcbmv1uDgd-65m-ZTmcERNNQts_ISprvI",
  authDomain: "netflix-clone-1060f.firebaseapp.com",
  projectId: "netflix-clone-1060f",
  storageBucket: "netflix-clone-1060f.appspot.com",
  messagingSenderId: "439093273428",
  appId: "1:439093273428:web:a3f24f514cd7fd4fd55ec1"
}

const firebase = window.firebase.initializeApp(config);
seedDatabase();

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
