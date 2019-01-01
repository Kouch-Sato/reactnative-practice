import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import TodoListScreen from './src/screens/TodoListScreen';
import TodoDetailScreen from './src/screens/TodoDetailScreen';
import TodoEditScreen from './src/screens/TodoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Header />
//         <SignupScreen />
//       </View>
//     );
//   }
// }

const App = createStackNavigator({
  TodoList: {
    screen: TodoListScreen,
  },
  TodoDetail: {
    screen: TodoDetailScreen,
  },
  TodoEdit: {
    screen: TodoEditScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Signup: {
    screen: SignupScreen,
  },
}, {
  defaultNavigationOptions: {
    headerTitle: 'HeartFire',
    headerStyle: {
      backgroundColor: 'crimson',
      shadowColor: 'black',
      shadowOffset: { width:0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
    },
    headerTitleStyle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fffdf6',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 90,
//   },
// });

export default createAppContainer(App);