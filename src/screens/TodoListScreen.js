import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import TodoList from '../components/TodoList';
import CircleButton from '../elements/CircleButton';

class TodoListScreen extends React.Component {
  handlePress () {
    const db = firebase.firestore();
    db.settings({　timestampsInSnapshots: true　});
    db.collection('todos').add({
      body: '俺の夢',
      createOn: '2019-01-01',
    })
    .then((docRef) => {
      console.log(docRef.body)
    })
    .catch((error) => {
      console.log(error)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TodoList navigation={this.props.navigation}/>
        <CircleButton onPress={this.handlePress.bind(this)}>
          {'\uf067'}
        </CircleButton>
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