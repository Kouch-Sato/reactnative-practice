import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>HeartFire</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    paddingTop: 40,
    backgroundColor: 'crimson',
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
});

export default Header;