import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class CircleButton extends React.Component {
  render() {
    return (
      <View style={styles.CircleButton}>
        <Text style={styles.CircleButtonText}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  CircleButton: {
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
  CircleButtonText: {
    fontSize: 30,
    lineHeight: 54,
    textAlign: 'center',
  },
});

export default CircleButton;