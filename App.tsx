/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { NativeRouter, Route, Link } from "react-router-native";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import MainPanel from './components/MainPanel'

const store = createStore(reducer);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface IProps {
}
export default class App extends Component<IProps> {
  render() {
    return (
      <Provider store={ store }>
        <NativeRouter>
          <MainPanel/>
        </NativeRouter>
      </Provider>
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
