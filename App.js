/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import Colors from './Sources/Helper/Colors'

import {
  Dashboard
} from './Sources/Screens'

const reducer = (state) => {
  return state
}

const store = createStore(reducer)

export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <View style={{flex: 1, backgroundColor: Colors.primary}}>
          <Dashboard />
        </View>
      </Provider>
    )
  }
}

