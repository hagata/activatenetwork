/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  Navigator,
  Text
} from 'react-native'

import AppIndexScreen from './app/screens/AppIndexScreen'
import SuccessIndexScreen from './app/screens/SuccessIndexScreen'
import SettingsIndexScreen from './app/screens/SettingsIndexScreen'
import PersonShowScreen from './app/screens/PersonShowScreen'

export default class activate extends Component {

  _renderScene (route, navigator) {
    let globalNavigatorProps = { navigator }

    switch (route.ident) {
      case 'AppIndex':
        return (
          <AppIndexScreen
            {...globalNavigatorProps} />
        )
        case 'PersonShowScreen':
          return (
            <PersonShowScreen
              {...globalNavigatorProps} />
          )
        case 'SuccessIndex':
          return (
            <SuccessIndexScreen
              {...globalNavigatorProps} />
          )
        case 'SettingsIndex':
          return (
            <SettingsIndexScreen
              {...globalNavigatorProps} />
          )
    }
  }

  render () {
    return (
      <Navigator
        initialRoute={{ident: 'AppIndex'}}
        ref='appNavigator'
        renderScene={(route, navigator) => { return this._renderScene(route, navigator) }} />
    )
  }
}

AppRegistry.registerComponent('activate', () => activate)
