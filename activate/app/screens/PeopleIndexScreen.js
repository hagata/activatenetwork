'use strict'
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
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

export default class PeopleIndexScreen extends Component {
  constructor (props) {
    super(props)
    // This is needed to render lists from data
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})

    // if data changes, set this.state
    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    }
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

  _navigateToPersonShowPerson (person) {
    this.props.navigator.push({
      ident: "PersonShow",
      person: person
    })
  }

  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <ListView
          style={{marginTop: 100}}
          dataSource={this.state.peopleDataSource}
          renderRow={(person) => this._renderPersonRow(person) }
          />
        <Text>{`Hello from Inside ViewContainer`}</Text>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  personRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  personName: {},
  personMoreIcon: {
    color: 'green',
    height: 30,
    width: 30
  }
})

module.exports = PeopleIndexScreen
