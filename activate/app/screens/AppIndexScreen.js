'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ListView
} from 'react-native'
import ViewContainer from '../components/viewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'
import Users from '../data/users'

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;


class AppIndexScreen extends Component {
  constructor (props) {
    super(props)

    // This is needed to render lists from data
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})

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
      ident: "PersonShowScreen",
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
        <Text style={styles.personName}>{person.name}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-right" style={styles.personMoreIcon} />
      </TouchableOpacity>

    )
  }

  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />

        <TouchableOpacity style={styles.mainContainer} onPress={(e) => this._handleDeploy()}>
          <View style={styles.backgroundContainer}>
            <Image source={require('../images/button-before.png')} />
          </View>
        </TouchableOpacity>

        <View style={styles.textHeaderContainer}>
          <Text style={styles.textHeader}>Activate Your{"\n"}Network</Text>
          <Text style={styles.textSub}>{"\n"}Press this button to send messages{"\n"}to your network</Text>
        </View>

        <View style={styles.myNetwork}>
          <Text style={styles.peopleHeader}>My Network</Text>
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
    top: 50
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
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: fullWidth,
    height: fullHeight,
    backgroundColor: '#3A3E4F'
  },

  backgroundContainer: {
    alignItems: 'center',
    width: 10
  },

  foregroundContainer: {
    alignItems: 'center'
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
    position: 'absolute',
    bottom: 15,
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

  peopleHeader: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#222430'
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
