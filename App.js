import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import firebase from 'firebase';
require("firebase/firestore");

import TodoListScreen from './src/screens/TodoListScreen';
import TodoDetailScreen from './src/screens/TodoDetailScreen';
import TodoEditScreen from './src/screens/TodoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

import ENV from './env.json';

// Initialize Firebase
var config = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PROJECT_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID
};
firebase.initializeApp(config);

const App = createStackNavigator({
  TodoList: {
    screen: TodoListScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Signup: {
    screen: SignupScreen,
  },
  TodoDetail: {
    screen: TodoDetailScreen,
  },
  TodoEdit: {
    screen: TodoEditScreen,
  },
}, {
  defaultNavigationOptions: {
    headerTitle: 'HeartFire',
    headerTintColor: 'white',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: 'crimson',
      shadowColor: 'black',
      shadowOffset: { width:0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
    },
    headerTitleStyle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
  },
});

export default createAppContainer(App);