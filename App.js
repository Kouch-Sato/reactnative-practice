import React from 'react';
import { StyleSheet, View } from 'react-native';

import LoginScreen from './src/screens/LoginScreen';
import Header from "./src/components/Header";


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <LoginScreen />
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
});
