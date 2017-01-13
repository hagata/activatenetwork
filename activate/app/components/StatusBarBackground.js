'use strict'

import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

class StatusBarBackground extends Component {
  render () {
    return (
      <View style={[styles.statusBarBackground]}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  statusBarBackground: {
    height: 20,
    backgroundColor: 'skyblue'
  }
})

module.exports = StatusBarBackground
