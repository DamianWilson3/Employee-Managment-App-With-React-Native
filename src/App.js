import React, { Component } from 'react';
import { View, Text} from 'react-native';
import  { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';


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
        return (
            <Provider store = {createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>

                </View>
            </Provider>
        );
    }
}

export default App;
