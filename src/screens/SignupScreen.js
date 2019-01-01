import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

class SignupScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          新規登録
        </Text>
        <TextInput style={styles.input} value="Email"/>
        <TextInput style={styles.input} value="Password"/>
        <TouchableHighlight style={styles.button} underlayColor="firebrick" onPress={() => {}}>
          <Text style={styles.buttonTitle}>始める！</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: "#ddd",
    height: 60,
    marginBottom: 16,
    fontSize: 20,
    padding: 8,
  },
  button: {
    backgroundColor: 'red',
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SignupScreen;