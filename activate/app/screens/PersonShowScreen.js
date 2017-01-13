'use strict'

import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/viewContainer'

class SuccessIndexScreen extends Component {
  constructor (props) {
    super(props)
  }

  _navigateToAppIndexScreen () {
    this.props.navigator.push({
      ident: 'AppIndex'
    })
  }

  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <TouchableOpacity style={styles.backButton} onPress={(e) => this._navigateToAppIndexScreen()}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text>{`This is your settings page`}</Text>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  backButton: {

  }
})

module.exports = SuccessIndexScreen
