import React, { Component } from 'react';
import  { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentDidMount(){
      const firebaseConfig = {
            apiKey: "AIzaSyCb1FDmiNr33idOQLvGgxRxzKIGQUqccw0",
            authDomain: "employees-d8271.firebaseapp.com",
            databaseURL: "https://employees-d8271.firebaseio.com",
            projectId: "employees-d8271",
            storageBucket: "employees-d8271.appspot.com",
            messagingSenderId: "27661287299",
            appId: "1:27661287299:web:45c858157cb5f3c92900b6"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store = {store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
