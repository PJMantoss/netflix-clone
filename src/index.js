import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyles } from './globalStyles';
import { FirebaseContext } from './context/firebase';

const config = {
    apiKey: "AIzaSyDfowjadOlRQoqWGOVC6jjbhWuy31fivyc",
    authDomain: "netflix-clone-22d37.firebaseapp.com",
    databaseURL: "https://netflix-clone-22d37-default-rtdb.firebaseio.com",
    projectId: "netflix-clone-22d37",
    storageBucket: "netflix-clone-22d37.appspot.com",
    messagingSenderId: "407949998477",
    appId: "1:407949998477:web:bb9a9276cdacd66de6a5c4"
}

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
