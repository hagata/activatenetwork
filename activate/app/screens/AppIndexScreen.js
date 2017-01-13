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

const people = [
  { firstName: "cid", lastName: "donham", phoneNumber: "555-555-5555" },
  { firstName: "genki", lastName: "hagata", phoneNumber: "555-555-4444" },
  { firstName: "natalia", lastName: "Mmargolis", phoneNumber: "555-555-3333" }
]

class AppIndexScreen extends Component {
  constructor (props) {
    super(props)

    // This is needed to render lists from data
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})

    // if data changes, set this.state
    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    }
  }

  _navigateToSuccessShowScreen () {
    this.props.navigator.push({
      ident: 'SuccessIndex'
    })
  }

  _navigateToPersonShowPerson (person) {
    this.props.navigator.push({
      ident: "PersonShow",
      person: person
    })
  }

  _navigateToSettingsShowScreen () {
    this.props.navigator.push({
      ident: 'SettingsIndex'
    })

  }

  _handleDeploy () {
    console.log('send data')
    this._navigateToSuccessShowScreen()
  }

  _renderPersonRow (person) {
    return (
      <TouchableOpacity style={styles.personRow} onPress={(e) => this._navigateToPersonShowPerson(person)}>
        <Text style={styles.personName}>{`${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}`}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-right" style={styles.personMoreIcon} />
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <TouchableOpacity style={styles.settingsButton} onPress={(e) => this._navigateToSettingsShowScreen()}>
          <Icon name="cog" style={styles.settingsIcon} />
        </TouchableOpacity>


        <TouchableOpacity style={styles.mainContainer} onPress={(e) => this._handleDeploy()}>
          <View style={styles.backgroundContainer}>
            <Image source={require('../images/button-bottom.png')} />
          </View>
          <View style = {styles.backgroundContainer}>
            <Image source={require('../images/button-top.png')} />
          </View>
        </TouchableOpacity>

        <ListView
          style={{marginTop: 100}}
          dataSource={this.state.peopleDataSource}
          renderRow={(person) => this._renderPersonRow(person) }
          />
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  forgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  mainButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
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
  },

  personRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  personName: {},
  personMoreIcon: {
    color: 'green',
    height: 30,
    width: 30
  }
})

module.exports = AppIndexScreen
