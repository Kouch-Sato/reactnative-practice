import React from 'react';
import { StyleSheet, View } from 'react-native';

import TodoList from './src/components/TodoList';
import Header from './src/components/Header';
import CircleButton from './src/elements/CircleButton';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <TodoList />
        <CircleButton>+</CircleButton>
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
