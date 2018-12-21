import React from 'react';
import { StyleSheet, View } from 'react-native';

import TodoListScreen from './src/screens/TodoListScreen';
import Header from "./src/components/Header";


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <TodoListScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 90,
  },
});
