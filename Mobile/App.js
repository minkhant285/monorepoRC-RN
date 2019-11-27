/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, {Component} from 'react'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Demo from '../shared/Demo'

class App extends Component {
render(){
  return(
    <View>
      <Demo/>
    </View>
  )
}
}

export default App;
