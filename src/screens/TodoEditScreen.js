import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';

class TodoEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.todoEditInput} multiline value="SpeechLinksのSEO対策"/>
        <CircleButton style={styles.editButton} onPress={() => { this.props.navigation.goBack(); }}>
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

export default TodoEditScreen;