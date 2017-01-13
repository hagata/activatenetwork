'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/viewContainer'
import _ from 'lodash'

class PersonShowScreen extends Component {
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
        <Text style={{marginTop: 100, fontSize: 20}}>{`Person Show Screen`}</Text>
        <Text style={styles.personName}>{`${_.capitalize(this.props.person.name)}`}</Text>
        <Text style={styles.personName}>{`${_.capitalize(this.props.person.phoneNumber)}`}</Text>
        <Text style={styles.personName}>{`${_.capitalize(this.props.person.message)}`}</Text>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  backButton: {

  },
  personName: {

  },
})

module.exports = PersonShowScreen
