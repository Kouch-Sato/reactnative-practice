import React from 'react';
import { StyleSheet, View } from 'react-native';

import TodoList from '../components/TodoList';
import CircleButton from '../elements/CircleButton';

class TodoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoList navigation={this.props.navigation}/>
        <CircleButton onPress={() => { this.props.navigation.navigate('TodoEdit'); }}>
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