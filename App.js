import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>HeartFire</Text>
          </View>
        </View>

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

        <View style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </View>
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
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    paddingTop: 40,
    backgroundColor: 'firebrick',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width:0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    zIndex: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
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
  addButton: {
    position: 'absolute',
    bottom: 50,
    right: 32,
    height: 60,
    width: 60,
    backgroundColor: 'skyblue',
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: {width:0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    zIndex: 10,
  },
  addButtonText: {
    fontSize: 30,
    lineHeight: 54,
    textAlign: 'center',
  }
});
