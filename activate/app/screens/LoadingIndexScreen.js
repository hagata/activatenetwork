'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  AlertIOS
} from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/viewContainer'
import TouchID from 'react-native-touch-id'

const ENDPOINT = 'https://express-twilio.herokuapp.com/data?id='
const USER_ID = '123'

class LoadingIndexScreen extends Component {

  constructor (props) {
    super(props)
    this._getData()
  }

  _navigateToAppIndexScreen (data) {
    this.props.navigator.push({
      ident: 'AppIndex',
      contacts: data.contacts
    })
  }

  _getData() {
    fetch(`${ENDPOINT}${USER_ID}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
      this._navigateToAppIndexScreen(data)
    })
  }

  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <View style={styles.mainContainer}>
          <Text style={styles.loading}>{`Loading Contacts...`}</Text>
        </View>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    alignItems: 'stretch'

  },

  loading: {
    marginTop: 100,
    textAlign: 'center',
    color: '#fff',
    fontSize: 20
  }
})

module.exports = LoadingIndexScreen
