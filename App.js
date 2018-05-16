// Import
import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import ApiAccessor from './src/containers/ApiAccessor.js';

 // Create
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {

  render() {
    return (
      <View>
        <Text>instructions</Text>
        <ApiAccessor />
      </View>
    );
  }
}

// render via index
export default App;
