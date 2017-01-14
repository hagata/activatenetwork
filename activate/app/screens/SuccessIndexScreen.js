'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
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
          <TouchableOpacity onPress={(e) => this._navigateToAppIndexScreen()}>
            <Text style={styles.backButton}>Back</Text>
          </TouchableOpacity>

        <View style={styles.textHeaderContainer}>
          <Text style={styles.textHeader}>Success!</Text>
          <Text style={styles.textSub}>{"\n"}Your messages have been sent.{"\n"}Good luck out there.</Text>
        </View>

        <TouchableOpacity style={styles.mainContainer}>
          <View style={styles.backgroundContainer}>
            <Image source={require('../images/button-after.png')} />
          </View>
        </TouchableOpacity>


      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  textHeaderContainer: {
    margin: 50,
    flex: 1
  },

  textHeader: {
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '200'
  },

  textSub: {
    color: '#cecece',
    textAlign: 'center'
  },

  mainContainer: {
    flex: 5,
    alignItems: 'center'
  },

  backButton: {
    color: 'white',
    padding: 15
  }

})

module.exports = SuccessIndexScreen
