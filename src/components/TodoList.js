import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class TodoList extends React.Component {
  render() {
    return (
      <View style={styles.todoList}>
        <View style={styles.todoListItem}>
          <Text style={styles.todoTitle}>ReactNativeをマスターする</Text>
          <Text style={styles.todoDate}>2018/12/15</Text>
        </View>
        <View style={styles.todoListItem}>
          <Text style={styles.todoTitle}>ReactNativeをマスターする</Text>
          <Text style={styles.todoDate}>2018/12/15</Text>
        </View>
        <View style={styles.todoListItem}>
          <Text style={styles.todoTitle}>ReactNativeをマスターする</Text>
          <Text style={styles.todoDate}>2018/12/15</Text>
        </View>
        <View style={styles.todoListItem}>
          <Text style={styles.todoTitle}>ReactNativeをマスターする</Text>
          <Text style={styles.todoDate}>2018/12/15</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoList: {
    width: '100%',
    flex: 1,
  },
  todoListItem: {
    padding: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  todoTitle: {
    fontSize: 20,
    paddingBottom: 6,
  },
  todoDate: {
    fontSize: 14,
    color: '#aaa',
  },
});

export default TodoList;