'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  AlertIOS
} from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/viewContainer'
import TouchID from 'react-native-touch-id'

class LoginIndexScreen extends Component {

  constructor (props) {
    super(props)
    console.log(TouchID);
  }

  _navigateToAppIndexScreen () {
    this.props.navigator.push({
      ident: 'AppIndex'
    })
  }

  _pressHandler() {
    let self = this
    console.log(TouchID.isSupported())
    TouchID.authenticate('to demo this react-native component')
      .then(success => {
        AlertIOS.alert('Authenticated Successfully');
      })
      .catch(error => {
        AlertIOS.alert('Authentication Failed');
      });
  }

  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <View>
          <TouchableHighlight onPress={this._pressHandler}>
            <Text>
              Authenticate with Touch ID
            </Text>
          </TouchableHighlight>
        </View>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({

})

module.exports = LoginIndexScreen
