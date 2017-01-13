'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  TouchableOpacity,
  ListView
} from 'react-native'
import ViewContainer from '../components/viewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'


class AppIndexScreen extends Component {
  constructor (props) {
    super(props)
  }

  _navigateToSuccessShowScreen () {
    this.props.navigator.push({
      ident: 'SuccessIndex'
    })
  }

  _navigateToSettingsShowScreen () {
    this.props.navigator.push({
      ident: 'SettingsIndex'
    })

  }

  _handleDeploy () {
    console.log('send data')
    //
    this._navigateToSuccessShowScreen()
  }

  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <TouchableOpacity style={styles.settingsButton} onPress={(e) => this._navigateToSettingsShowScreen()}>
          <Icon name="cog" style={styles.settingsIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deployButton}onPress={(e) => this._handleDeploy()}>
          <Text>Deploy</Text>
        </TouchableOpacity>
        <Image source={require('../images/button-bottom.png')} />
        <Image source={require('../images/button-top.png')} />
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  mainButton: {
    width: 30,
    height: 30
  },

  settingsButton: {
    height: 30,
    width: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  settingsIcon: {
    height: 30,
    width: 30,
    color: 'deepskyblue'

  },

  deployButton: {
    overflow:'hidden',
    borderRadius:4,
    height: 100,
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    borderColor: '#c2c2c2',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 20,
    marginBottom: 20,
    padding:10,
  }
})

module.exports = AppIndexScreen
