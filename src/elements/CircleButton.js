import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Font } from 'expo';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      'FontAwesome': fontAwesome,
    });

    this.setState({ fontLoaded: true })
  }

  render() {
    const { style, color }= this.props;

    let backgroundColor = 'skyblue';
    let textColor = 'white';

    if (color === 'white') {
      backgroundColor = '#fff';
      textColor = 'skyblue';
    }

    return (
      <View style={[styles.CircleButton, style, { backgroundColor: backgroundColor }]}>
        {
          this.state.fontLoaded ? (
            <Text style={[styles.CircleButtonText, { color: textColor }]}>
              {this.props.children}
            </Text>
          ) : null
        }
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
    lineHeight: 60,
    textAlign: 'center',
    fontFamily: 'FontAwesome',
  },
});

export default CircleButton;