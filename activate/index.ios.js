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

import PeopleIndexScreen from './app/screens/PeopleIndexScreen'

export default class activate extends Component {

  _renderScene (route, navigator) {
    let globalNavigatorProps = { navigator }

    switch (route.indent) {
      case 'PeopleIndex':
        return (
          <PeopleIndexScreen
            {...globalNavigatorProps} />
        )
        case 'PersonShow':
          return (
            <PersonShowScreen
              {...globalNavigatorProps} />
          )
    }
  }

  render () {
    return (
      <Navigator
        initialRoute={{indent: 'PeopleIndex'}}
        ref='appNavigator'
        renderScene={(route, navigator) => { return this._renderScene(route, navigator) }} />
    )
  }
}

AppRegistry.registerComponent('activate', () => activate)
