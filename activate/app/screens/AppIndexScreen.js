'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ListView
} from 'react-native'
import ViewContainer from '../components/viewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import Icon from 'react-native-vector-icons/FontAwesome'
import Users from '../data/users'

const fullWidth = Dimensions.get('window').width

const DEPLOY_ENDPOINT = 'http://10.11.12.18:8080/deployMessagesFromApp?id=';
const USER_ID = '000'

class AppIndexScreen extends Component {
  constructor (props) {
    super(props)

    // This is needed to render lists from data
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    // if data changes, set this.state
    this.state = {
      peopleDataSource: ds.cloneWithRows(Users['15104499800']['contacts'])
    }
  }

  _navigateToSuccessShowScreen () {
    this.props.navigator.push({
      ident: 'SuccessIndex'
    })
  }

  _navigateToPersonShowPerson (person) {
    this.props.navigator.push({
      ident: 'PersonShowScreen',
      person: person
    })
  }

  _navigateToSettingsShowScreen () {
    this.props.navigator.push({
      ident: 'SettingsIndex'
    })
  }

  _handleDeploy () {
    fetch(`${DEPLOY_ENDPOINT}${USER_ID}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      this._navigateToSuccessShowScreen()
    })
    console.log('Button Pressed!');

  }

  _renderPersonRow (person) {
    return (
      <TouchableOpacity style={styles.personRow} onPress={(e) => this._navigateToPersonShowPerson(person)}>
        <Text style={styles.personName}>{person.name}</Text>
        <View style={{flex: 1}} />
        <Icon name='chevron-right' style={styles.personMoreIcon} />
      </TouchableOpacity>

    )
  }

  _navigateToSettingsScreen () {
    this.props.navigator.push({
      ident: "SettingsIndex"
    })
  }

  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />

      <TouchableOpacity onPress={(e) => this._navigateToSettingsScreen(e)}>
          <Icon name="cog" style={styles.settingsIcon} />
        </TouchableOpacity>

        <View style={styles.textHeaderContainer}>
          <Text style={styles.textHeader}>Activate Your{'\n'}Network</Text>
          <Text style={styles.textSub}>{'\n'}Press this button to send messages{'\n'}to your network</Text>
        </View>

        <View style={styles.mainContainer}>
          <TouchableOpacity style={styles.backgroundContainer} onPress={(e) => this._handleDeploy()}>
            <Image source={require('../images/button-before.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.myNetwork}>
          <View style={styles.peopleHeaderContainer}>
            <Text style={styles.peopleHeader}>My Network</Text>
            <Icon name="plus" style={styles.addIcon} />
          </View>
          <ListView

            dataSource={this.state.peopleDataSource}
            renderRow={(person) => this._renderPersonRow(person) }
          />
        </View>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  textHeaderContainer: {
    top: 50,
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
    flex: 1,
    alignItems: 'center'
  },

  backgroundContainer: {
    alignItems: 'center',
    height: 145,
    width: 145
  },

  mainButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  settingsIcon: {
    fontSize: 18,
    color: '#c2c2c2',
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'flex-end'
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

  myNetwork: {
    flex: 1,
    width: fullWidth
  },

  personRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomColor: '#AEADB3',
    borderBottomWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10
  },

  peopleHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#222430'
  },

  peopleHeader: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10
  },

  addIcon: {
    color: 'white',
    height: 30,
    width: 30,
    paddingRight: 45,
    paddingTop: 12
  },

  personName: {
    color: 'white'
  },
  personMoreIcon: {
    color: 'white',
    height: 30,
    width: 30,
    paddingTop: 5
  }
})

module.exports = AppIndexScreen
