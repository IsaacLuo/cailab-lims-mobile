/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native'
import { Dispatch } from 'redux'
import { withRouter } from 'react-router-native'
import { connect } from 'react-redux'


interface IProps {
  message:string,
}

class MainPanel extends Component<IProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.props.message}</Text>
      </View>
    );
    
  }
}

const mapStateToProps = (state :any) => ({
  message: state.message,
})

const mapDispatchToProps = (dispatch :Dispatch) => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPanel))



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
