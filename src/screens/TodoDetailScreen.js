import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class TodoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.todoHeader}>
          <Text style={styles.todoHeaderTitle}>SpeechLinksのSEO対策</Text>
          <Text style={styles.todoHeaderDate}>2018/12/12</Text>
        </View>
        <View style={styles.todoContent}>
          <Text>これは勉強のために最低限やりたい</Text>
        </View>

        <CircleButton color='white' style={styles.editButton}>
          {'\uf303'}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  todoHeader: {
    height: 120,
    backgroundColor: 'firebrick',
    justifyContent: 'center',
  },
  todoHeaderTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 10,
    marginBottom: 4,
  },
  todoHeaderDate: {
    fontSize: 14,
    color: 'white',
    paddingLeft: 10,
  },
  todoContent: {
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  editButton: {
    top: 90,
  }
});

export default TodoDetailScreen;