import React from 'react';
import { StyleSheet, View } from 'react-native';

import TodoList from '../components/TodoList';
import CircleButton from '../elements/CircleButton';

class TodoListScreen extends React.Component {
  handlePress () {
    const { params } =  this.props.navigation.state;
    this.props.navigation.navigate('TodoCreate', { currentUser: params.currentUser });
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