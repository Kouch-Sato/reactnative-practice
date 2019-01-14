import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from "firebase";

import CircleButton from '../elements/CircleButton';

class TodoCreateScreen extends React.Component {
  state = {
    body: '',
  };

  handlePress() {
    const db = firebase.firestore();
    const { params } =  this.props.navigation.state;
    db.settings({　timestampsInSnapshots: true　});
    db.collection(`users/${params.currentUser.user.uid}/todos`).add({
      body: this.state.body,
      createOn: new Date(),
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
        <TextInput
          style={styles.todoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }); }}
        />
        <CircleButton style={styles.editButton} onPress={this.handlePress.bind(this)}>
          {'\uf00c'}
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
  todoEditInput: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
  },
});

export default TodoCreateScreen;