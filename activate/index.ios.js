/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  Navigator
} from 'react-native'

import AppIndexScreen from './app/screens/AppIndexScreen'
import SuccessIndexScreen from './app/screens/SuccessIndexScreen'
import SettingsIndexScreen from './app/screens/SettingsIndexScreen'
import AddContactIndexScreen from './app/screens/AddContactIndexScreen'
import LoadingIndexScreen from './app/screens/LoadingIndexScreen'
import PersonShowScreen from './app/screens/PersonShowScreen'

export default class activate extends Component {


  _renderScene (route, navigator) {
    let globalNavigatorProps = { navigator }

    switch (route.ident) {
      case 'LoginIndex':
        return (
          <LoadingIndexScreen
            {...globalNavigatorProps} />
        )
      case 'AppIndex':
        return (
          <AppIndexScreen
            {...globalNavigatorProps}
            contacts={route.contacts} />
        )
        case 'PersonShowScreen':
          return (
            <PersonShowScreen
              {...globalNavigatorProps}
              person={route.person} />
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

        case 'AddContactIndex':
          return (
            <AddContactIndexScreen
              {...globalNavigatorProps} />
          )

    }
  }

  render () {
    return (
      <Navigator
        initialRoute={{ident: 'LoginIndex'}}
        ref='appNavigator'
        renderScene={(route, navigator) => { return this._renderScene(route, navigator) }} />
    )
  }
}

AppRegistry.registerComponent('activate', () => activate)
