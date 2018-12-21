import React from 'react';
import { StyleSheet, View } from 'react-native';

import TodoList from '../components/TodoList';
import CircleButton from '../elements/CircleButton';

class TodoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoList />
        <CircleButton>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});

export default TodoListScreen;